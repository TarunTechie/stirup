import React,{useState,useEffect} from "react"
import axiosInstance from "../constants/spoon"

function SearchBar(){
  const [food,setfood]=useState('')
  const [recipe,setfoodrecipes]=useState([])
  const [ingridents,setfoodingridents]=useState([])
  const send=async ()=>
  {

    console.log(food)
    try{
      const result=await axiosInstance.get('food/search',{params:{'query':food,'number':5}})
      setfoodrecipes(result.data.searchResults[0].results)
      setfoodingridents(result.data.searchResults[1].results)

    }
    catch(error){console.error(error)}
    finally{
      console.log(recipe)
      console.log(ingridents)
    }
    
  }
  const change=(event)=>
  {
    event.preventDefault();
    setfood(event.target.value)
  }
  return(    
  <div>

  <div className="flex mt-20 p-4 relative mx-auto justify-center">
  <div className="flex w-4/6 p-4 bg-white border-maron border-2 rounded-3xl justify-around  focus:outline-orange">
  <input className="bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-none"
    type="search" name="search" placeholder="Find a dish or ingridient" onChange={change}/>       
  <button onClick={send}>
  <img src="\icons\spoon-svgrepo-com.svg" alt="" srcset="" className="w-10 h-10 hover:shadow-2xl"/>
  </button>
  </div>
  </div>

<div className="flex justify-center">
<div className="p-4 rounded-xl text-2xl w-4/6 border-5 border-maron bg-white">
    <ul className="grid gap-4">
        {recipe.map((suggestion) => (
          <li key={suggestion.id} className="p-4 rounded-xl hover:underline decoration-orange decoration-2 underline-offset-[10px] hover:animate-bounce">
            {suggestion.name}
          </li>
        ))}
      </ul>
  </div>
  </div>

  </div>
)

}


export default SearchBar