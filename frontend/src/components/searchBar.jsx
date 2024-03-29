import React,{useState,useEffect} from "react"
import axiosInstance from "../constants/spoon"


function SearchBar(){

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
      if (query.trim() === '') {
        setSuggestions([]);
        return;
      }
  
      const fetchSuggestions = async () => {
        try {
          const response = await axiosInstance.get('/food/search?query=${query}');
          const data = await response.json();
          setSuggestions(data.results.slice(0, 5));
          console.log(suggestions) // Limiting to 5 suggestions
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
  
      fetchSuggestions();
  
      
      return () => setSuggestions([]);
    }, [query]);
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSelectSuggestion = (suggestion) => {
      setQuery(suggestion.name);
      setSuggestions([]);
    };




  return(     <div class="flex mt-20 pt-2 relative mx-auto justify-center items-center">
  <input class="border-2 border-maron bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-orange"
    type="search" name="search" placeholder="Find a dish or ingridient" value={query} onChange={handleChange}/>
  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
  <img src="\icons\spoon-svgrepo-com.svg" alt="" srcset="" className="w-10 h-10"/>
  </button>
</div>)

}


export default SearchBar