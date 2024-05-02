import React, { useState } from "react";
import spoon from "../constants/spoon";
import { Link } from "react-router-dom";

function SearchBar() {
  const [food, setFood] = useState('');
  const [recipe, setFoodRecipes] = useState([]);
  const [visibility, setVisibility] = useState('hidden');
  const [info,setRecipe]=useState([])

  const send = async () => {
    console.log(food);
    try {
      const result = await spoon.get('food/search', { params: { 'query': food, 'number': 5 } });
      setFoodRecipes(result.data.searchResults[0].results);
      if (result.data.searchResults[0].results.length > 0) {
        setVisibility('flex'); // Show dropdown if there are results
      } else {
        setVisibility('hidden'); // Hide dropdown if no results
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFood(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      send();
    }
  };
  const handleSearch = async (id) => {
    try {
      const result = await spoon.get('recipes/informationBulk', { params: { 'ids': id, 'includeNutrition': true } });
      setRecipe(result);
      console.log(info)
      const jsonString = JSON.stringify(info);
      localStorage.setItem('bigcard', jsonString);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex mt-20 p-4 relative mx-auto justify-center">
        <div className="flex w-4/6 p-4 bg-white border-maron border-2 rounded-3xl justify-around focus:outline-orange">
          <input
            className="bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-none"
            type="search"
            name="search"
            placeholder="Find a dish or ingredient"
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
          <button onClick={send}>
            <img src="\icons\spoon.svg" alt="" srcSet="" className="w-10 h-10 hover:shadow-2xl"/>
          </button>
        </div>
      </div>

      <div className={`${visibility} justify-center`} id="pop">
        <div className="p-4 rounded-xl text-2xl w-4/6 border-5 border-maron bg-white">
          {recipe.length === 0 ? (
            <h1 className="font-tego text-center ">No results found!!</h1>
          ) : (
            <div className="grid gap-4">
              {recipe.map((suggestion) => (
                <div key={suggestion.id} className="p-4 rounded-xl hover:underline decoration-orange decoration-2 underline-offset-[10px] hover:animate-bounce">
                  <Link to={`/show/${suggestion.id}`} onClick={()=>handleSearch(suggestion.id)}>
                    {suggestion.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
