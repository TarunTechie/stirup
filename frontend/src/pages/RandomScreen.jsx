import { useState } from "react"
import Top from "../components/top"
import Bottom from "../components/bottom"
import spoon from "../constants/spoon"
import RecCard from "../components/recCard";
import recipes from "../constants/recipes"
import { ScrollRestoration } from "react-router-dom";

export default function RandomScreen(){
    const meals=['Main Course','Appetizer','Salad','Breakfast','Desert','Beverage','Snack',"Soup"]
    const cuisines=["Indian","Asian","Chinese","French","Italian","Mexican","Thai","American"]
    const[check,setCheck]=useState({})
    const[recipe,setRecipe]=useState([])
    const[meal,setMeal]=useState('')
    const[cus,setCus]=useState(false)
    const[cuisine,setCuisine]=useState("Select Cusine")
    function drop()
    {
        if(cus==true)
        setCus(false)
        if(cus==false)
        setCus(true)
    }
    function handel(event)
    {
        const{id,value}=event.target
        setCheck(id,value)
    }
    async function send()
    {
        const c=cuisine=="Select Cusine"?"":cuisine
        const tosend= check+','+meal+','+c
        try {
            const result=await spoon.get('recipes/random',{params:{'include-tags':tosend,'number':8,'includeNutrition':true}})
            console.log(result.data.recipes)
            setRecipe(result.data.recipes)    
        } 
        catch (error) {
            console.log(error)
        }

    }
    return(<div className="w-screen">
        <ScrollRestoration/>
        <Top/>
        <img src="/images/randombg.png" className="w-screen h-[800px] mx-auto mb-12"/>
        <h1 className="font-heading text-6xl text-center mt-24">Explore Random Recipes</h1>
        <h1 className="font-heading text-4xl">Meal Prefernce</h1>
        <div className="grid grid-cols-4 gap-10 mx-10 my-10">
            {
                meals.map((meals)=>
                    <button className={`p-4 rounded-xl font-bold text-xl 
                    border-2 border-orange
                    ${meal===meals?'bg-orange text-white shadow-sm shadow-orange border-2 border-white':'bg-white text-orange'}
                     hover:bg-orange hover:text-white
                     `}
                    onClick={()=>{setMeal(meals)}}
                    value={meals}
                    >{meals}</button>
                )
            }
        </div>
        <h1 className="font-heading text-4xl">Cuisine</h1>
        <div className="grid place-items-center">
            <button className={`flex justify-between mx-auto w-1/2 p-2 bg-white text-maron border-2 
             border-maron text-xl font-semibold font-nat ${cus?"border-b-0 rounded-t-xl":"rounded-xl"}`}
            onClick={drop}>
            {cuisine} 
            <img src="/icons/dropdown.svg" className=""/>
            </button>
            <div className={`bg-white w-1/2 border-2 rounded-b-xl border-maron border-t-0 ${cus?"grid":"hidden"}`}>
                <ul>
                {
                cuisines.map((cus)=>(
                <li className="p-4 text-lg rounded-xl hover:underline decoration-orange 
                decoration-2 underline-offset-[10px] 
                hover:animate-bounce" onClick={()=>{setCuisine(cus);setCus(false)}}>{cus}</li>)
                )}
                </ul>
            </div>
        </div>
        <div className="flex justify-center text-xl gap-10 my-10">

        <span className="flex text-3xl items-center gap-3 font-bold text-green-800">
            <input type="checkbox" 
            value="vegetarian"
            id="vegetarian" 
            checked={check==="vegetarian"}
            onChange={handel}
            className="h-10 w-10  accent-green-700"/>
        <h1>Vegetarian</h1>
        </span>
        
        <span className="flex text-3xl items-center gap-3 font-bold text-red-500">
            <input type="checkbox" 
            value="nonvegetarian"
            id="nonvegetarian" 
            checked={check==="nonvegetarian"}
            onChange={handel}
            className="h-10 w-10 accent-red-500"/>
        <h1>Non-Vegetarian</h1>
        </span>

        </div>
            <button className="flex btn mx-auto my-10" onClick={send}>GENERATE</button>
        <div className="grid grid-cols-4 mx-auto">
                {
                    recipe.map((recs)=>(
                        <RecCard recipe={recs}/>
                    ))
                }
        </div>
        <Bottom/>
    </div>)
}