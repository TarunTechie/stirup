import React,{useState,useEffect} from "react"
import axiosInstance from "../constants/spoon"

const apiKey = '9285ed5ac3734555ace89246806efe2f';
function SearchBar(){

    const [query, setQuery] = useState('');
    const [suggestionsRec, setSuggestionsRecipes] = useState([]);
    const [suggestionsIng, setSuggestionsIngridients] = useState([]);
  
  
      const fetchSuggestions = async (event) => {
        event.preventDefault();

    if (query.trim() === '') {
      setSuggestionsRecipes([]);
      setSuggestionsIngridients([]);
      return;
    }
        try {
          const response = await fetch(`https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${query}`);
          const data = await response.json();
          setSuggestionsRecipes(data.searchResults[0].results);
          setSuggestionsIngridients(data.searchResults[1].results);
          console.log(suggestionsRec)
          console.log(suggestionsIng) // Limiting to 5 suggestions
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
  
     
      

    const handleChange = (event) => {
      setQuery(event.target.value);

    };
  
    const handleSelectSuggestion = (suggestion) => {
      setQuery(suggestion.name);
      setSuggestionsRecipes([]);
      setSuggestionsIngridients([]);
    };




  return(     <div class="flex mt-20 pt-2 relative mx-auto justify-center items-center">
    <form onSubmit={fetchSuggestions}>
  <input class="border-2 border-maron bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-orange"
    type="search" name="search" placeholder="Find a dish or ingridient" value={query} onChange={handleChange}/>
  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
  <img src="\icons\spoon-svgrepo-com.svg" alt="" srcset="" className="w-10 h-10"/>
  </button>
  </form>
</div>)

}


export default SearchBar