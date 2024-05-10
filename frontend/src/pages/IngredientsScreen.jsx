import Top from "../components/top"
import Bottom from "../components/bottom";
import Logo from "../components/logo";
import {useEffect, useState} from "react";
import spoon from "../constants/spoon";
import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function IngredientsScreen (){
    useEffect(()=>{localStorage.removeItem('recids')},[])
    const [ingredients, setIngredients] = useState(['']);
    const handleAddInput = () => {
      const Ingredients = [...ingredients];
      if(Ingredients.length<6){
        setIngredients([...ingredients, '']);
      }
    };
  
    const handleDeleteInput = (index) => {
      const updatedIngredients = [...ingredients];
      if(updatedIngredients.length>1){
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
      }
      
    };
  
    const handleInputChange = (index, event) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = event.target.value;
      setIngredients(updatedIngredients);
    };

    async function getRecipe()
    {
      try {
        const result=await spoon.get('recipes/findByIngredients',{params:{'ingredients':ingredients.toString()}})
        const data=JSON.stringify(result.data.map((ids)=>(ids.id)))
        console.log(data)
        localStorage.setItem('recids',data)
      } 
      catch (error) {
        console.error(error)
      }
    }

return(
    <div className="bg-white">
      <ScrollRestoration/>
    <Top />
    <div >
        <img src="/images/pagebg.jpg" className="w-screen" />
    </div>
    <div className="ml-4 gap-10">
    <h1 className="font-heading text-7xl ml-auto underline decoration-orange decoration-1 underline-offset-[12px] ">List and Cook</h1>
    <h1 className="font-light text-5xl font-tego pt-4">Ingredients</h1>
    <div className="pt-10">
      <button className="cambtn hover:bg-orange hover:text-white" onClick={handleAddInput}>
        <h1>ADD</h1> 
        <svg width="40" height="59" viewBox="0 0 59 59" fill="#FF670E" id="sv" xmlns="http://www.w3.org/2000/svg" >
        <g clip-path="url(#clip0_313_249)">
        <path d="M50.8055 34.4167H21.3055C20.8709 34.4167 20.454 34.5893 20.1466 34.8967C19.8393 35.204 19.6666 35.6209 19.6666 36.0555C19.6666 36.4902 19.8393 36.9071 20.1466 37.2144C20.454 37.5218 20.8709 37.6944 21.3055 37.6944H50.8055C51.2402 37.6944 51.657 37.5218 51.9644 37.2144C52.2718 36.9071 52.4444 36.4902 52.4444 36.0555C52.4444 35.6209 52.2718 35.204 51.9644 34.8967C51.657 34.5893 51.2402 34.4167 50.8055 34.4167Z" />
        <path d="M19.6666 26.2222C19.6666 26.6569 19.8393 27.0737 20.1466 27.3811C20.454 27.6884 20.8709 27.8611 21.3055 27.8611H50.8055C51.2402 27.8611 51.657 27.6884 51.9644 27.3811C52.2718 27.0737 52.4444 26.6569 52.4444 26.2222C52.4444 25.7876 52.2718 25.3707 51.9644 25.0633C51.657 24.756 51.2402 24.5833 50.8055 24.5833H21.3055C20.8709 24.5833 20.454 24.756 20.1466 25.0633C19.8393 25.3707 19.6666 25.7876 19.6666 26.2222Z" />
        <path d="M44.25 44.25H21.3055C20.8709 44.25 20.454 44.4227 20.1466 44.73C19.8393 45.0374 19.6666 45.4542 19.6666 45.8889C19.6666 46.3235 19.8393 46.7404 20.1466 47.0478C20.454 47.3551 20.8709 47.5278 21.3055 47.5278H44.25C44.6846 47.5278 45.1015 47.3551 45.4088 47.0478C45.7162 46.7404 45.8888 46.3235 45.8888 45.8889C45.8888 45.4542 45.7162 45.0374 45.4088 44.73C45.1015 44.4227 44.6846 44.25 44.25 44.25Z" />
        <path d="M26.042 14.75C26.042 14.3153 25.8693 13.8985 25.562 13.5911C25.2546 13.2838 24.8377 13.1111 24.4031 13.1111H16.3889V5.26084C16.3889 4.82618 16.2163 4.40932 15.9089 4.10197C15.6015 3.79462 15.1847 3.62195 14.75 3.62195C14.3154 3.62195 13.8985 3.79462 13.5912 4.10197C13.2838 4.40932 13.1111 4.82618 13.1111 5.26084V13.1111H4.73642C4.30176 13.1111 3.8849 13.2838 3.57755 13.5911C3.2702 13.8985 3.09753 14.3153 3.09753 14.75C3.09753 15.1847 3.2702 15.6015 3.57755 15.9089C3.8849 16.2162 4.30176 16.3889 4.73642 16.3889H13.1111V24.9275C13.1111 25.3622 13.2838 25.779 13.5912 26.0864C13.8985 26.3937 14.3154 26.5664 14.75 26.5664C15.1847 26.5664 15.6015 26.3937 15.9089 26.0864C16.2163 25.779 16.3889 25.3622 16.3889 24.9275V16.3889H24.4031C24.8377 16.3889 25.2546 16.2162 25.562 15.9089C25.8693 15.6015 26.042 15.1847 26.042 14.75Z" />
        </g>
        </svg>
      </button>
      {ingredients.map((ingredient, index) => (
          <div key={index} className="flex justify-between bg-peach w-[55%] border-2 border-black p-2 m-4">
          <input
            type="text"
            className="bg-transparent w-full focus: outline-none"
            value={ingredient}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Enter ingredient"
          />
          <button onClick={() => handleDeleteInput(index)}><span><img src="/icons/cross.svg" className="w-4 h-4"/></span></button>
          </div>
    ))}
<Link to="/recipe"><button className="cambtn hover:bg-orange hover:text-white" onClick={getRecipe}>
      <h1>Search Recipe</h1>
      <svg width="40" height="65" viewBox="0 0 53 65" id="sv" fill="#FF670E" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5815 14.2351C10.7992 15.4113 10.3995 16.8179 10.3912 18.2696C10.3818 19.7219 10.7637 21.225 11.5608 22.6058C11.8635 23.1299 12.5342 23.3104 13.0593 23.0073C13.5833 22.7047 13.7634 22.033 13.4608 21.5089C12.858 20.4649 12.579 19.3416 12.5841 18.2836C12.591 17.2247 12.884 16.2368 13.407 15.4512C13.7422 14.9475 13.6069 14.2651 13.1032 13.9299C12.5967 13.594 11.9176 13.7309 11.5815 14.2351Z" fill="white"/>
      <path d="M21.535 5.57776C19.8632 5.03896 18.11 4.82472 16.3766 4.97445C14.6433 5.12413 12.9289 5.64026 11.3489 6.55245C9.76992 7.46407 8.46572 8.69075 7.46844 10.1176C5.97366 12.2573 5.16758 14.8416 5.09988 17.5213C5.03315 20.2027 5.70561 22.9871 7.17785 25.5371C8.76601 28.2879 11.0556 30.3683 13.6418 31.6335C15.9601 32.7665 18.5225 33.2458 21.0327 32.9557L24.9621 39.7616L24.8411 39.8314C24.2699 40.1612 24.0735 40.8916 24.4033 41.4627L32.4463 55.3937L32.4487 55.3979C34.1469 58.3393 37.9085 59.3458 40.849 57.6481C43.7896 55.9504 44.7987 52.1895 43.1004 49.2481L35.0549 35.3129C34.7252 34.7417 33.9945 34.5466 33.4241 34.8759L33.3024 34.9462L29.373 28.1403C30.8793 26.1116 31.7463 23.6522 31.9234 21.0785C32.1206 18.2062 31.4639 15.1831 29.8758 12.4323C27.9114 9.03212 24.8788 6.65622 21.535 5.57776ZM38.1518 52.9764C37.3748 53.4249 36.3812 53.1587 35.9327 52.3818C35.4836 51.604 35.7499 50.6104 36.5268 50.1618C37.3038 49.7132 38.2974 49.9795 38.7464 50.7573C39.195 51.5342 38.9288 52.5278 38.1518 52.9764ZM32.464 43.1249C31.6871 43.5735 30.693 43.3063 30.2444 42.5294C29.7954 41.7516 30.0616 40.758 30.8385 40.3095C31.6155 39.8609 32.6091 40.1271 33.0582 40.9049C33.5068 41.6819 33.241 42.6763 32.464 43.1249ZM29.491 20.9116C29.3271 23.2988 28.4545 25.5216 26.9794 27.2377L26.4156 27.8924L31.1917 36.1648L27.0727 38.5429L22.2967 30.2705L21.4478 30.4314C19.2238 30.8508 16.8627 30.4951 14.7134 29.4434C12.5634 28.3924 10.6352 26.6511 9.28853 24.3185C7.62431 21.436 7.18563 18.2321 7.79513 15.3986C8.10027 13.9815 8.66585 12.6606 9.46728 11.5135C10.2688 10.3666 11.3048 9.3932 12.5676 8.66308C13.8314 7.9345 15.1923 7.524 16.5864 7.40331C18.6763 7.22129 20.8453 7.69813 22.807 8.76626C24.7686 9.83429 26.5169 11.4892 27.765 13.6511C29.1117 15.9836 29.6557 18.5241 29.491 20.9116Z"/>
      </svg>
</button></Link>
    </div>
</div>
    <Bottom />
    </div>
)
}
export default IngredientsScreen