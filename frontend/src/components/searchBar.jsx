






export default function SerachBar()
{
  function search()
  {

  }
  return(
    <div className="flex justify-center">
    <div className="flex h-fit w-5/6 bg-white rounded-3xl m-10 justify-between border-2 border-maron focus:outline-orange">
      <input class="h-10 w-5/6 p-8 rounded-3xl text-2xl tracking-widest focus:outline-none"
      type="search" name="search" placeholder="Find a dish or ingridient"/>
      <button onClick={search()}>
        <img src="\icons\spoon-svgrepo-com.svg" alt="" srcset="" className="h-10" />
      </button>
    </div>
    </div>
  )
}