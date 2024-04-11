import Top from "../components/top"
import Bottom from "../components/bottom";
import { useState } from "react";

function CameraScreen (){
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

return(
    <div className="bg-white">
    <Top />
    <div >
        <img src="/images/pagebg.jpg" className="w-screen" />
    </div>
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Snap and Cook</h1>
    <h1 className="font-light text-5xl ml-36">Ingredients</h1>
    <button className="btn" onClick={handleAddInput}>Add </button>
    {ingredients.map((ingredient, index) => (
         <div key={index}>
         <input
           type="search"
           value={ingredient}
           onChange={(event) => handleInputChange(index, event)}
           placeholder="Enter ingredient"
         />
         <button onClick={() => handleDeleteInput(index)}><span><img src="/icons/cross.svg" className="w-8 h-8"/></span></button>

         </div>
          
    ))}
    <button className="lrbtn">Search Recipe</button>
    <Bottom />
    </div>
)
}
export default CameraScreen