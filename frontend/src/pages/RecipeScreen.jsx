import spoon from "../constants/spoon";
import Top from "../components/top";
import Bottom from "../components/bottom";
import RecCard from "../components/recCard";
import { useEffect } from "react";
export default function RecipeScreen()
{
    const[food,setFood]=([])
    useEffect(()=>{getRecipes()},[])
    async function getRecipes()
    {
        try
        {
            const result=await spoon.get('recipes/informationBulk',{params:{'ids':JSON.stringify(localStorage.getItem('recids'))}})
            setFood(result.data)
        }
        catch(error){
            console.error(error)
        }
        finally{
            logrec()
        }
    }
    function logrec()
    {
        console.log(food)
    }
    return(<div className="w-screen h-screen">
        <Top/>
        <div className="flex justify-center my-6">
    {food.map((rec) =>(
          <RecCard
          image={rec.image}
          heading={rec.title}
          content={rec.summary}
          />
        ))
      }
    </div>
        <Bottom/>
    </div>)
}