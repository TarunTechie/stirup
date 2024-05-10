import Top from "../components/top"
import Bottom from "../components/bottom";
import Logo from "../components/logo";
import {useEffect, useState} from "react";
import spoon from "../constants/spoon";
import { Link } from "react-router-dom";
import RecCard from "../components/recCard";
import { ScrollRestoration } from "react-router-dom";

function NutritionScreen(){

    const [selectedOption, setSelectedOption] = useState('');
    const [calorie,setCalorie]=useState()
    const[food,setFood]=useState([])
    const[show,Setshow]=useState(false)
    const [info,setInfo]=useState([])
    const handleOptionChange = (option) => {
        setSelectedOption(option);
      };
      const handleInputChange = (event) => {
        setCalorie(event.target.value);
      };

      async function getMeals(){
        try {
            const result=await spoon.get('mealplanner/generate?timeFrame=day',{params:{'diet':selectedOption,'targetCalories':calorie.toString()}})
            let data=JSON.stringify(result.data.meals.map((ids)=>(ids.id)))
            data = data.replace(/^\[|\]$/g, '');
            const nutrients=JSON.stringify(result.data.nutrients)
            const mealIds = [data, nutrients]
            const mealIdsString = JSON.stringify(mealIds);
            localStorage.setItem('mealids',mealIdsString)
            getRecipes()
            
          } 
          catch (error) {
            console.error(error)
          }
      }
      async function getRecipes()
      {
          const retrievedMealIdsString = localStorage.getItem('mealids');
          const retrievedMealIds = JSON.parse(retrievedMealIdsString);
          let mealids=JSON.stringify(retrievedMealIds[0])
          mealids = mealids.replace(/^"|"$/g, '');
          const retrievedNutrients = JSON.parse(retrievedMealIds[1]);
          setInfo(retrievedNutrients)
          console.log(info)
          Setshow(true)
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
      useEffect(()=>{getRecipes()},[localStorage.getItem('mealids')])



    return(
        <div className="bg-white">
          <ScrollRestoration/>
            <Top/>
            <div>
                <img src="/images/n_bg.jpeg" className="w-screen h-[800px] mx-auto mb-12"/>
                <h1 className="font-heading text-5xl ml-6 p-3 underline decoration-orange decoration-1 underline-offset-[12px] ">MEAL PLANNER</h1>
                <h1 className="font-light text-4xl font-tego p-5 ml-8">Deitary Preferences</h1>
    <div className="grid mt-14 grid-cols-3 gap-16 mx-auto">
      <div className="flex">
        <button
          onClick={() => handleOptionChange('vegetarian')}
          className={`mx-auto h-14 w-4/5 text-xl font-extrabold ${selectedOption === 'vegetarian' ? 'bg-orange text-white' : 'bg-white text-orange'} border-2 border-orange rounded-xl hover:bg-orange hover:text-white `}
        >
          Vegetarian
        </button>
      </div>
      <div className="flex ">
        <button
          onClick={() => handleOptionChange('keto')}
          className={`mx-auto h-14 w-4/5 text-xl font-extrabold ${selectedOption === 'keto' ? 'bg-orange text-white' : 'bg-white text-orange'} border-2 border-orange rounded-xl hover:bg-orange hover:text-white`}
        >
          Keto
        </button>
      </div>
      <div className="flex ">
        <button
          onClick={() => handleOptionChange('gluten free')}
          className={`mx-auto h-14 w-4/5 text-xl font-extrabold ${selectedOption === 'gluten free' ? 'bg-orange text-white' : 'bg-white text-orange'} border-2 border-orange rounded-xl hover:bg-orange hover:text-white`}
        >
          Gluten-Free
        </button>
      </div>
      <div className="flex ">
        <button
          onClick={() => handleOptionChange('lacto-vegetarian')}
          className={`mx-auto h-14 w-4/5 text-xl font-extrabold ${selectedOption === 'lacto-vegetarian' ? 'bg-orange text-white' : 'bg-white text-orange'} border-2 border-orange rounded-xl hover:bg-orange hover:text-white`}
        >
          Lacto-Vegetarian
        </button>
      </div>
      <div className="flex ">
        <button
          onClick={() => handleOptionChange('vegan')}
          className={`mx-auto h-14 w-4/5 text-xl font-extrabold ${selectedOption === 'vegan' ? 'bg-orange text-white' : 'bg-white text-orange'} border-2 border-orange rounded-xl hover:bg-orange hover:text-white`}
        >
          Vegan
        </button>
      </div>
      <div className="flex ">
      <button
          onClick={() => handleOptionChange('whole')}
          className={`mx-auto h-14 w-4/5 text-xl font-extrabold ${selectedOption === 'whole' ? 'bg-orange text-white' : 'bg-white text-orange'} border-2 border-orange rounded-xl hover:bg-orange hover:text-white`}
        >
          No-Preference
        </button>
      </div>
      <div className="flex w-screen">
      <input
            type="number" 
            min={2000}
            step={50}
            className="bg-transparent h-12 w-1/6  mx-auto border-2 border-orange focus: outline-none"
            // value={ingredient}
            onChange={handleInputChange}
            placeholder="calories"
          />
      </div>
      </div>
      <Link to="/nutrition">
      <button className="px-12 cambtn1 hover:bg-white hover:text-orange mx-auto my-12" onClick={getMeals}>
      Generate Meals
      <svg width="40" height="65" viewBox="0 0 53 65" id="sv" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5815 14.2351C10.7992 15.4113 10.3995 16.8179 10.3912 18.2696C10.3818 19.7219 10.7637 21.225 11.5608 22.6058C11.8635 23.1299 12.5342 23.3104 13.0593 23.0073C13.5833 22.7047 13.7634 22.033 13.4608 21.5089C12.858 20.4649 12.579 19.3416 12.5841 18.2836C12.591 17.2247 12.884 16.2368 13.407 15.4512C13.7422 14.9475 13.6069 14.2651 13.1032 13.9299C12.5967 13.594 11.9176 13.7309 11.5815 14.2351Z" fill="orange"/>
      <path d="M21.535 5.57776C19.8632 5.03896 18.11 4.82472 16.3766 4.97445C14.6433 5.12413 12.9289 5.64026 11.3489 6.55245C9.76992 7.46407 8.46572 8.69075 7.46844 10.1176C5.97366 12.2573 5.16758 14.8416 5.09988 17.5213C5.03315 20.2027 5.70561 22.9871 7.17785 25.5371C8.76601 28.2879 11.0556 30.3683 13.6418 31.6335C15.9601 32.7665 18.5225 33.2458 21.0327 32.9557L24.9621 39.7616L24.8411 39.8314C24.2699 40.1612 24.0735 40.8916 24.4033 41.4627L32.4463 55.3937L32.4487 55.3979C34.1469 58.3393 37.9085 59.3458 40.849 57.6481C43.7896 55.9504 44.7987 52.1895 43.1004 49.2481L35.0549 35.3129C34.7252 34.7417 33.9945 34.5466 33.4241 34.8759L33.3024 34.9462L29.373 28.1403C30.8793 26.1116 31.7463 23.6522 31.9234 21.0785C32.1206 18.2062 31.4639 15.1831 29.8758 12.4323C27.9114 9.03212 24.8788 6.65622 21.535 5.57776ZM38.1518 52.9764C37.3748 53.4249 36.3812 53.1587 35.9327 52.3818C35.4836 51.604 35.7499 50.6104 36.5268 50.1618C37.3038 49.7132 38.2974 49.9795 38.7464 50.7573C39.195 51.5342 38.9288 52.5278 38.1518 52.9764ZM32.464 43.1249C31.6871 43.5735 30.693 43.3063 30.2444 42.5294C29.7954 41.7516 30.0616 40.758 30.8385 40.3095C31.6155 39.8609 32.6091 40.1271 33.0582 40.9049C33.5068 41.6819 33.241 42.6763 32.464 43.1249ZM29.491 20.9116C29.3271 23.2988 28.4545 25.5216 26.9794 27.2377L26.4156 27.8924L31.1917 36.1648L27.0727 38.5429L22.2967 30.2705L21.4478 30.4314C19.2238 30.8508 16.8627 30.4951 14.7134 29.4434C12.5634 28.3924 10.6352 26.6511 9.28853 24.3185C7.62431 21.436 7.18563 18.2321 7.79513 15.3986C8.10027 13.9815 8.66585 12.6606 9.46728 11.5135C10.2688 10.3666 11.3048 9.3932 12.5676 8.66308C13.8314 7.9345 15.1923 7.524 16.5864 7.40331C18.6763 7.22129 20.8453 7.69813 22.807 8.76626C24.7686 9.83429 26.5169 11.4892 27.765 13.6511C29.1117 15.9836 29.6557 18.5241 29.491 20.9116Z" />
      </svg>
      </button>
      </Link>
 
    </div>
    {show && (
        <div className="grid">
        <div className="bg-maron w-3/4 h-0.5 mx-auto "/>
        <h1 className="pgheading underline mt-14 mx-auto ">Generated Meal For Today </h1>
        <div className="rounded-xl px-16 py-4  border-2 border-maron my-10 mx-auto grid gap-6">
        <span className='flex gap-5 items-center text-2xl'><img src="/icons/cals.svg" className='w-8 h-8'/><h1>Calories</h1>:<h1>{info.calories}</h1></span>
        <span className='flex gap-5 items-center text-2xl'><img src="/icons/carb.svg" className='w-8 h-8 mt-2'/><h1>Carbohydrates</h1>:<h1>{info.carbohydrates}</h1></span>
        <span className='flex gap-5 items-center text-2xl'><img src="/icons/protein.svg" className='w-8 h-8 mt-2'/><h1>Protein</h1>:<h1>{info.protein}</h1></span>
        <span className='flex gap-5 items-center text-2xl'><img src="/icons/fat.svg" className='w-8 h-8 mt-2'/><h1>Fats</h1>:<h1>{info.fat}</h1></span>
        </div>

        <div className="grid">
        <div className="grid grid-cols-3 mx-auto gap-40">
    {food.map((rec) =>(
          <RecCard
            recipe={rec}
          />
        ))
      }
    </div>
    </div>
    <button className="px-12 py-6 cambtn1 hover:bg-white hover:text-orange mx-auto my-12" onClick={getMeals}>
      Save Recipes
      </button>
    </div>
    )}

    <Bottom/>
</div>
    )
}
export default NutritionScreen