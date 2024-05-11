import React,{useState,useEffect} from "react"
import Top from '../components/top'
import Bottom from '../components/bottom'
import favourite from "../actions/favourite";
import { ScrollRestoration } from "react-router-dom";

export default function Bigcard()
{
    const [recipe, setRecipe] = useState(null);
    const[fav,setfav]=useState('none')
    const [vis,setvis]=useState('grid')
    const [loading, setLoading] = useState(true);
    async function tofav()
    {
        if(fav=='none')
        {
            let reply=await favourite(recipe.id,"add")
            if(reply==true)
            setfav('#D22701')
        }
        if(fav=='#D22701')
        {
            favourite(recipe.id,"rem")
            setfav('none')
        }
    }
    function handleCancel(){
        if(vis=='grid')
        {
          setvis('hidden')
        }
        else
        {
          setvis('grid')
        }
    }
    function send() {
        try{
            const jsonString = localStorage.getItem('bigcard');
            const parsedData = JSON.parse(jsonString);
            setRecipe(parsedData)
            if(localStorage.getItem('favs').includes(parsedData.id))
            {
                setfav('#D22701')
            }
        }catch(error){
            console.error('Error retrieving data from localStorage:', error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        send();
    },[])
    if (loading) {
        return <div>Loading...</div>; // Render loading state until recipe data is fetched
      }
    return(
        <>
        <ScrollRestoration/>
    <Top/>
    <div className={`${vis}  bg-white w-screen h-full  rounded-xl  p-10 mt-20`}>

        <div className='flex relative mb-24'>
        <h1 className='absolute inset-x-0 top-0 text-center text-4xl font-nat text-orange'>{recipe.title}</h1>

        <svg className="absolute top-0 right-0 drop-shadow-2xl hover:w-[150px] hover:h-[75px]" width="140" height="65" viewBox="0 0 153 213"  fill={fav}xmlns="http://www.w3.org/2000/svg" onClick={tofav}  >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M119.5 26.9212C95.808 -0.689602 56.218 -9.22252 26.5332 16.0606C-3.15172 41.3438 -7.33096 83.6156 15.9808 113.518C35.3629 138.38 94.0199 190.816 113.245 207.788C115.395 209.686 116.47 210.636 117.725 211.008C118.819 211.334 120.018 211.334 121.113 211.008C122.368 210.636 123.442 209.686 125.594 207.788C144.818 190.816 203.475 138.38 222.857 113.518C246.169 83.6156 242.499 41.0778 212.304 16.0606C182.109 -8.95655 143.192 -0.689602 119.5 26.9212Z" stroke="#D22701" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </div>

    <div className='flex justify-around'>
        <div className='grid gap-10'>
            <img src={recipe.image} className='mx-auto' />
            <div className='flex gap-12 rounded-xl border-2 border-black w-fit h-fit p-10'>
            <div className='grid gap-6'>
                <span className='flex gap-5 items-center text-2xl'><img src="/icons/time.svg" className='w-10 h-10'/>:<h1>{recipe.readyInMinutes} Minutes</h1></span>
                <span className='flex gap-5 items-center text-2xl'><img src="/icons/chef.svg" className='w-12 h-12'/>:<h1>{recipe.servings} Servings</h1></span>
                <span className='flex gap-5 items-center text-2xl'><img src="/icons/cals.svg" className='w-12 h-12'/>:<h1>{recipe.nutrition.nutrients[0].amount} kcal</h1></span>
            </div>
            <div className="flex bg-black h-py w-1"></div>
            <div className='grid gap-6 '>``
                <span className='flex gap-5 items-center text-2xl'><img src="/icons/carb.svg" className="h-14"/>Carbs:<h1>{recipe.nutrition.nutrients[3].amount} {recipe.nutrition.nutrients[3].unit}</h1></span>
                <span className='flex gap-5 items-center text-2xl'><img src="/icons/fat.svg" className="h-14"/>Fat:<h1>{recipe.nutrition.nutrients[1].amount} {recipe.nutrition.nutrients[1].unit}</h1></span>
                <span className='flex gap-5 items-center text-2xl'><img src="/icons/protein.svg" className="h-14"/>Protein:<h1>{recipe.nutrition.nutrients[8].amount} {recipe.nutrition.nutrients[8].unit}</h1></span>
            </div>
            </div>
        </div>

        <div className='grid m-2'>
        <ul className='grid xt-black  text-2xl '>
        <h1 className='text-6xl text-maron font-tego'>INGRIDIENTS</h1>
            {recipe.extendedIngredients.map((ingrident,index)=>(
                <l1 key={index} >{ingrident.name.charAt(0).toUpperCase()+ingrident.name.slice(1)} - {ingrident.amount} { ingrident.unit} </l1>
            ))}
        </ul>
        </div>

    </div>
    <div className='pt-20'>
        <h1 className="grid text-6xl text-maron text-center font-semibold font-tego">INSTRUCTIONS</h1>
        <ul className='grid gap-4 pt-8 list-disc text-xl'>
        {recipe.analyzedInstructions[0].steps.map((step,index)=>(
                <l1 key={index} >{`${index+1}) `} {step.step} </l1>
            ))}
        </ul>
    </div>
    </div>
    <Bottom/>
    </>)
}