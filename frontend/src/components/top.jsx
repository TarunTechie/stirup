export default function Top()
{
    return<header className="flex bg-peach justify-between h-20 items-center fixed w-screen">
        <img src="/fulllogo.svg" alt="" srcset="" className="w-44"/>
        <div className="flex gap-44 text-xl font-extrabold text-maron">
        <h1>Home</h1>
        <h1>Recipes</h1>
        <h1>About Us</h1>
        <h1>Collections</h1>
        </div>
        <button className=" mr-8 p-2 h-fit font-extrabold bg-white text-orange border-2 border-orange rounded-xl hover:bg-orange hover:text-white">LOGIN</button>
    </header>
}