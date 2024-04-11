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
    <div className="ml-4 gap-10">
    <h1 className="font-heading text-7xl ml-auto underline decoration-orange decoration-1 underline-offset-[12px] ">Snap and Cook</h1>
    <h1 className="font-light text-5xl font-tego pt-4">Ingredients</h1>
    <div className="pt-10">
      <button className="btn flex" onClick={handleAddInput}>Add<img src="/icons/camadd.svg" className="w-8 h-8 mx-2"/></button>
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
<button className="flex btn">
      <h1>Search Recipe</h1>
      <img src="/icons/spoon.svg" className="w-8 h-8" alt="" srcset="" />
</button>
    </div>
</div>
    <Bottom />
    </div>
)
}
export default CameraScreen