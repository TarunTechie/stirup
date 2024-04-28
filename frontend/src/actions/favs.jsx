import ourApi from "../constants/ourapi"
import Reccard from "../components/recCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Favs()

{
    async function getrecs()
    {
      const recs=await ourApi.get('/getFavs',{params:{"id":sessionStorage.getItem('userid')}})
      setRecipes(recs.data)
      console.log(recs.data)
    }
    const[recipes,setRecipes]=useState([])
    const user = sessionStorage.getItem('userid')

    useEffect(()=>{getrecs()},[])

    return(
    <div className="justify-center mt-20" >
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Favourites</h1>
    {user?
    recipes.length === 0?
    <div className="grid justify-center mt-10">
    <h1 className="font-tego font-semibold text-4xl">No recipes added</h1>
  </div>:
    <div className="flex justify-center my-6">
    {recipes.map(recipe =>(
          <Reccard
          recipe={recipe}
          />
        ))
      }
    </div>
    :
    <div className="grid justify-center mt-10">
      <h1 className="font-tego font-semibold text-5xl">Login to add favourites</h1>
      <Link to="/login">
      <button className="py-1 cambtn1 hover:bg-white hover:text-orange mx-auto my-6" >
      Login
      </button>
      </Link>
    </div>
    }
    
    </div>)
}