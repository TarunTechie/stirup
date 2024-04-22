import ourApi from "../constants/ourapi"
import Reccard from "../components/recCard"
import { useEffect, useState } from "react"
export default function Favs()
{
    async function getrecs()
    {
      const recs=await ourApi.get('/getFavs',{params:{"id":sessionStorage.getItem('userid')}})
      setRecipes(recs.data)
      console.log(recs.data)
    }
    const[recipes,setRecipes]=useState([])

    useEffect(()=>{getrecs()},[])

    return(
    <div className="justify-center mt-20" >
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Favourites</h1>
    <div className="flex justify-center my-6">
    {recipes.map(recipe =>(
          <Reccard
          recipe={recipe}
          />
        ))
      }
    </div>
    </div>)
}