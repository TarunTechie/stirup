export default function SearchBar()
{
    return(     <div class="flex mt-20 pt-2 relative mx-auto justify-center items-center">
    <input class="border-2 border-maron bg-white h-10 w-4/6 px-5 pr-16 rounded-3xl text-2xl tracking-widest focus:outline-orange"
      type="search" name="search" placeholder="Find a dish or ingridient"/>
    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
    <img src="\icons\spoon-svgrepo-com.svg" alt="" srcset="" className="w-10 h-10"/>
    </button>
  </div>)
}