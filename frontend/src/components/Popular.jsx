import recipes from "../constants/recipes"
import { Link } from "react-router-dom"

export default function Popular(){
    const handleClick =(recipe)=>{
        try {
            const jsonString = JSON.stringify(recipe);
            localStorage.setItem('bigcard', jsonString);
            console.log('Data saved to localStorage');
          } catch (error) {
            console.error('Error saving data to localStorage:', error);
          }
        };
    
return(
<div className="flex ml-24 my-24 justify-between">
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-y-2 ml-4">
          <h1 className="font-heading text-5xl underline decoration-orange decoration-2 underline-offset-[12px] col-span-2 mb-3">Popular Picks</h1>
          {recipes.map(recipe => (
            <div key={recipe.id} onClick={() => handleClick(recipe)} className="font-tego text-xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/show/${recipe.id}`}>
                <h1>{recipe.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-maron w-1 self-stretch ml-8 "></div> 
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-y-2 ml-4">
          <h1 className="font-heading text-5xl underline decoration-orange decoration-2 underline-offset-[12px] col-span-2 mb-3">Cuisines</h1>
        
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/indian`}>
                <h1>Indian</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/asian`}>
                <h1>Asian</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/chinese`}>
                <h1>Chinese</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/french`}>
                <h1>French</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/italian`}>
                <h1>Italian</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/mexican`}>
                <h1>Mexican</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/thai`}>
                <h1>Thai</h1>
              </Link>
            </div>
            <div className="font-tego text-3xl ml-2 p-1 hover:underline decoration-maron">
              <Link to={`/cuisines/american`}>
                <h1>American</h1>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}