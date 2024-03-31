import React,{useState,useEffect} from "react"
import axiosInstance from "../constants/spoon"

function SearchBar(){
  const [food,setfood]=useState('')
  const send=async ()=>
  {
    console.log(food)
    try{
      const result=await axiosInstance.get('food/search',{params:{'query':food,'number':5}})
      console.log(result.data.searchResults[0].results)
    }
    catch(error){console.error(error)}
  }
  const change=(event)=>
  {
    event.preventDefault();
    setfood(event.target.value)
  }
  return(    
  <div className="flex mt-20 p-4 relative mx-auto justify-center">
  <div className="flex w-4/6 p-4 bg-white border-maron border-2 rounded-3xl justify-around  focus:outline-orange">
  <input className="bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-none"
    type="search" name="search" placeholder="Find a dish or ingridient" onChange={change}/>
  <button onClick={send}>
  <img src="\icons\spoon-svgrepo-com.svg" alt="" srcset="" className="w-10 h-10 hover:shadow-2xl"/>
  </button>
  </div>
</div>)

}


export default SearchBar