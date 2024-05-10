import React,{useState,useEffect} from "react"
import spoon from "../constants/spoon"
import { Link } from "react-router-dom"
function SearchBar(){
  const [food,setfood]=useState('')
  const [recipe,setfoodrecipes]=useState([])
  const [ingridents,setfoodingridents]=useState([])
  const [vis,setvis]=useState('hidden')
  const send=async ()=>
  {
    console.log(food)
    try{
      const result=await spoon.get('food/search',{params:{'query':food,'number':5}})
      setfoodrecipes(result.data.searchResults[0].results)
      setfoodingridents(result.data.searchResults[1].results)
    }
    catch(error){console.error(error)}
    finally{
      setvis('flex')
    }
  }

  const change=(event)=>
  {
    event.preventDefault();
    setfood(event.target.value)
  }
  const handleKeyPress = (event) => {

    if (event.key === 'Enter') {

      send();
    }
  };
  function dis()
  {
    if(vis=='flex')
    {
      setvis('hidden')
    }
    else
    {
      setvis('flex')
    }
  }
  async function nav(id)
  {
    try {
      const result=await spoon.get(`recipes/${id}/information`,{params:{'includeNutrition':true}})
      console.log(result)
      const jsonString = JSON.stringify(result.data);
      localStorage.setItem('bigcard', jsonString);
      console.log('Data saved to localStorage');
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }
  return(    
  <div>

  <div className="flex mt-20 p-4 relative mx-auto justify-center">
  <div className="flex w-4/6 p-4 bg-white border-maron border-2 rounded-3xl justify-around focus:outline-orange" >
  <input className="bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-none"
    type="search" name="search" placeholder="Find a dish or ingridient" onKeyPress={handleKeyPress} onChange={change} />       
  <button onClick={send}>
  <img src="\icons\spoon.svg" alt="" srcset="" className="w-10 h-10 hover:shadow-2xl"/>
  </button>
  </div>
  </div>

<div className={`${vis} justify-center`} id="pop">
<div className="p-4 rounded-xl text-2xl w-4/6 border-5 border-maron bg-white">
  {recipe.length === 0?
  <h1 className="font-tego text-center ">No results found!!</h1>
  :
    <ul className="grid gap-4">
        {recipe.map((suggestion) => (
          <Link to ={`/show/${suggestion.id}`}>
          <li key={suggestion.id} onClick={()=>{nav(suggestion.id)}} className="p-4 rounded-xl hover:underline decoration-orange decoration-2 underline-offset-[10px] hover:-translate-y-2">
            {suggestion.name}
          </li>
          </Link>
        ))}
      </ul>}
  </div>
  </div>

  </div>
)
}
export default SearchBar