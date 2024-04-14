import { useEffect } from "react"
import { Link } from "react-router-dom"


function RecCard({recipe})

{ 
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
        
        <div className="grid  bg-white m-5 rounded-xl  h-[30rem] max-w-80 border-2 border-maron no-scrollbar relative p-2" onClick={handleClick}>
            <div className="flex justify-end">
            <img src="/icons/heart.svg" className="absolute  h-6 m-2 object-top-right fill"/>
            <img src={recipe.image} className="rounded-xl"/>
            </div>
            <div className="flex justify-end ">
            <img src="/icons/heart.svg" className="  object-top-right  w-7 h-7 "/>    
            </div>
            <h1 className="text-black text-2xl text-center font-bold font-heading my-1">{recipe.title}</h1>
            <div className="flex bg-black h-px w-4/5 mx-auto mt-2 mb-4"></div>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary}} className="text-center text-black overflow-auto no-scrollbar"/>
        </div>
        </Link>
        
    )
}
export default RecCard
