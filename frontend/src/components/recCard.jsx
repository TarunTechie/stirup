import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import favourite from "../actions/favourite"

function RecCard({recipe})
{ 
  const[clr,setclr]=useState("")
  useEffect(()=>{check()},[])
  function check()
  {
    if(recipe.vegetarian)
    {
      setclr('green')
    }
    else
    {
      setclr('red')
    }
  }
    const handleClick = () => {
        try {
          const jsonString = JSON.stringify(recipe);
          localStorage.setItem('bigcard', jsonString);
          console.log('Data saved to localStorage');
        } catch (error) {
          console.error('Error saving data to localStorage:', error);
        }
      };
    return(
        <Link to ={`/show/${recipe.id}`} >

        <div className="recCard" onClick={handleClick}>
            <div className="flex justify-end">
            <img src={recipe.image} className="rounded-xl" id="recimg"/>
            </div>
            <div className="flex justify-end pt-8">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-1 ">
            <rect x="1" y="1" width="26" height="26" rx="4" stroke={`${clr}`} stroke-width="2"/>
            <circle cx="14.0001" cy="13.9999" r="5.6" fill={`${clr}`}/>
            </svg>
            </div>
            <h1 className="text-black text-2xl text-center font-bold font-heading my-1">{recipe.title}</h1>
            <div className="flex bg-black h-px w-4/5 mx-auto mt-2 mb-4"></div>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary}} className="text-center text-black overflow-auto no-scrollbar"/>
        </div>

        </Link>
        
    )
}
export default RecCard
