import { useState } from "react"
import Top from "../components/top"
export default function RandomScreen(){
    const meals=['Main Course','Appetizer','Salad','Breakfast','Desert','Beverage','Snack',"Soup"]
    const [veg,setveg]=useState('')
    return(<div className="w-screen">
        <Top/>
        <img src="images/randombg.png" className="h-full"/>
        <h1 className="font-heading text-6xl text-center">Explore Random Recipes</h1>
        <h1 className="font-heading text-4xl">Meal Prefernce</h1>
        <div className="grid grid-cols-4 gap-10 mx-10 my-10">
            {
                meals.map((meal)=>
                    <button className="bg-white p-4 rounded-xl font-bold text-xl border-2 border-orange text-orange shadow-xl hover:bg-orange hover:text-white">{meal}</button>
                )
            }
        </div>
        <h1 className="font-heading text-4xl">Cuisine</h1>
        <div className="flex justify-center text-xl gap-10">

        <span className="flex text-3xl items-center gap-3 font-bold text-green-800">
            <input type="checkbox" value="veg" 
            className="h-10 w-10  accent-green-700"/>
        <h1>VEG</h1>
        </span>
        
        <span className="flex text-3xl items-center gap-3 font-bold text-red-500">
            <input type="checkbox" value="veg" 
            className="h-10 w-10 accent-red-500"/>
        <h1>NON-VEG</h1>
        </span>

        </div>
    </div>)
}