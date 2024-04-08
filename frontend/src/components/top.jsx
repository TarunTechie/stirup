export default function Top()
{
    return<header className="flex bg-peach/95 justify-between h-24 items-center fixed z-10 w-screen">
        <img src="/fulllogo.svg" alt="" srcset="" className="w-72"/>
        <div className="flex gap-44 text-2xl font-extrabold text-maron">
        <h1>Home</h1>
        <h1>Recipes</h1>
        <h1>About Us</h1>
        <h1>Collections</h1>
        </div>
        <button className=" mr-8 h-12 w-32 text-xl font-extrabold bg-white text-orange border-2 border-orange rounded-xl hover:bg-orange hover:text-white">LOGIN</button>
    </header>
}