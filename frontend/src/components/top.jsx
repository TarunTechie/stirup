import { Link } from "react-router-dom"

export default function Top()
{
    return<header className="flex bg-peach/95 justify-between h-24 items-center fixed z-10 w-screen">
        <Link to="/">
        <img src="/fulllogo.svg" alt="" srcset="" className="w-72"/>
        </Link>
        <div className="flex gap-44 text-2xl font-extrabold text-maron">
        
        <ul className="flex gap-44" >
            <Link to="/"><li className="hover:underline underline-offset-4" >Home</li></Link>
            <Link to="/"><li className="hover:underline underline-offset-4" >Recipes</li></Link>
            <Link to="/"><li className="hover:underline underline-offset-4" >About Us</li></Link>
            <Link to="/"><li className="hover:underline underline-offset-4 " >Collections</li></Link>
        </ul>
        </div>
        <Link to="/login">
        <button className=" my-auto mr-8 h-10 w-32 text-xl font-extrabold bg-white text-orange border-2 border-orange rounded-xl hover:bg-orange hover:text-white">LOGIN</button>
        </Link>
    </header>
}