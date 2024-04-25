import spoon from "../constants/spoon";
import Top from "../components/top";
import Bottom from "../components/bottom";
import RecCard from "../components/recCard";

import { useEffect, useState } from "react";
export default function MealScreen()
{

    const[food,setFood]=useState([])
    useEffect(()=>{getRecipes()},[localStorage.getItem('mealids')])

    async function getRecipes()
    {
        const retrievedMealIdsString = localStorage.getItem('mealids');
        const retrievedMealIds = JSON.parse(retrievedMealIdsString);
        let mealids=JSON.stringify(retrievedMealIds[0])
        mealids = mealids.replace(/^"|"$/g, '');
  
        const retrievedNutrients = JSON.parse(retrievedMealIds[1]);
        try
        {
            console.log(mealids)
            const result=await spoon.get('recipes/informationBulk',{params:{'ids':mealids,'includeNutrition':true}})
            setFood(result.data)
        }
        catch(error){
            console.error(error)
        }
    }
    return(<div className="h-fit w-screen">
        <Top/>
        <div className="grid mt-32">
        <h1 className="pgheading underline mb-6 mx-auto ">Generated Meal For Today </h1>
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