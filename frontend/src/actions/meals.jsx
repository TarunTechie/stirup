import ourApi from "../constants/ourapi"
import Reccard from "../components/recCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Meals()

{
    async function getrecs()
    {
      let ids=[]
      const recs=await ourApi.get('/getMeals',{params:{"id":sessionStorage.getItem('userid')}})
      setRecipes(recs.data)
      console.log(recs.data)
      recs.data.map((id)=>(
        ids.push(id.id)
      ))
    }
    const[recipes,setRecipes]=useState([])
    const user = sessionStorage.getItem('userid')

    useEffect(()=>{getrecs()},[])

    return(
    <div className="justify-center mt-20" >
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Todays Meals</h1>
    {user?
    recipes.length === 0?
    <div className="grid justify-center mt-10">
    <h1 className="font-tego font-semibold text-4xl">No meal added</h1>
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
      <h1 className="font-tego font-semibold text-5xl">Plan Your Meals</h1>
    </div>
    }
    
    </div>)
}