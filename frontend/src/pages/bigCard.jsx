
import React,{useState,useEffect} from "react"
import Top from '../components/top'
import Bottom from '../components/bottom'
import spoon from '../constants/spoon'



export default function Bigcard()
{
    const [recipe, setRecipe] = useState(null);
    const [vis,setvis]=useState('grid')
    const [loading, setLoading] = useState(true);
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
            console.log(recipe)
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
    <Top/>
    <div className={`${vis}  bg-white w-5/6 h-fit border-4 rounded-xl border-orange p-10`}>

        <div className='flex justify-between mb-10'>
        <button><span><img className="w-10 h-10" src="/icons/heart.svg"/></span></button>
        <h1 className='text-center text-5xl font-nat text-orange'>{recipe.title}</h1>
        <button on onClick={handleCancel}><span><img src="/icons/cross.svg" className="w-8 h-8"/></span></button>
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
            <div className='grid gap-6'>
                <span className='flex gap-5 items-center text-2xl'>Carbs:<h1>{recipe.nutrition.nutrients[3].amount} {recipe.nutrition.nutrients[3].unit}</h1></span>
                <span className='flex gap-5 items-center text-2xl'>Fat:<h1>{recipe.nutrition.nutrients[1].amount} {recipe.nutrition.nutrients[1].unit}</h1></span>
                <span className='flex gap-5 items-center text-2xl'>Protein:<h1>{recipe.nutrition.nutrients[8].amount} {recipe.nutrition.nutrients[8].unit}</h1></span>
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