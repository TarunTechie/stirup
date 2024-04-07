import recipes from '../constants/recipes'
export default function Bigcard()
{
    const ingridents = recipes[0].extendedIngredients;
    return(<div className='flex justify-items-stretch bg-white w-5/6 h-fit border-4 rounded-xl border-orange p-10'>
        <div className='grid gap-10'>
        <h1 className='text-center text-5xl font-nat text-orange'>{recipes[0].title}</h1>
            <img src={recipes[0].image}/>
            <div className='flex gap-12  rounded-xl border-2 border-black w-fit h-fit p-10'>
            <div className='grid gap-6'>
                <span className='flex gap-5 items-center text-4xl'><img src="/icons/heart.svg" className='w-10 h-10'/>:<h1>{recipes[0].readyInMinutes} Minutes</h1></span>
                <span className='flex gap-5 items-center text-4xl'><img src="/icons/heart.svg" className='w-10 h-10'/>:<h1>{recipes[0].servings} Servings</h1></span>
                <span className='flex gap-5 items-center text-4xl'><img src="/icons/heart.svg" className='w-10 h-10'/>:<h1>{recipes[0].nutrition.nutrients[0].amount} kcal</h1></span>
            </div>
            <div className="flex bg-black h-py w-1"></div>
            <div className='grid gap-6'>
                <span className='flex gap-5 items-center text-4xl'>Carbs:<h1>{recipes[0].nutrition.nutrients[3].amount} {recipes[0].nutrition.nutrients[3].unit}</h1></span>
                <span className='flex gap-5 items-center text-4xl'>Fat:<h1>{recipes[0].nutrition.nutrients[1].amount} {recipes[0].nutrition.nutrients[1].unit}</h1></span>
                <span className='flex gap-5 items-center text-4xl'>Protein:<h1>{recipes[0].nutrition.nutrients[8].amount} {recipes[0].nutrition.nutrients[8].unit}</h1></span>
            </div>
            </div>
        </div>
        <div className='grid align-middle text-center'>
        <h1 className='text-5xl  text-maron'>INGRIDIENTS</h1>

        <ul className='text-black'>
            {recipes[0].extendedIngredients.map((ingrident,index)=>(
                <l1 key={index} >{ingrident.name} - {ingrident.amount} { ingrident.unit} </l1>
            ))}
        </ul>
        
        </div>
    </div>)
}