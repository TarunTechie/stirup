import spoon from "../constants/spoon";
import Top from "../components/top";
import Bottom from "../components/bottom";
import RecCard from "../components/recCard";
import recipes from "../constants/recipes";
import { useEffect, useState } from "react";
export default function RecipeScreen()
{

    const[food,setFood]=useState([])
    useEffect(()=>{getRecipes()},[localStorage.getItem('recids')])

    async function getRecipes()
    {
        try
        {
            const result=await spoon.get('recipes/informationBulk',{params:{'ids':JSON.stringify(localStorage.getItem('recids')),'includeNutrition':true}})
            setFood(result.data)
            console.log(result.data)
        }
        catch(error){
            console.error(error)
        }
    }
    return(<div className="h-fit w-screen">
        <Top/>
        <div className="grid mt-32">
        <h1 className="pgheading">Generated Recipes</h1>
        <div className="grid grid-cols-3">
    {food.map((rec) =>(
          <RecCard
            recipe={rec}
          />
        ))
      }
    </div>
    </div>
        <Bottom/>
    </div>)
}