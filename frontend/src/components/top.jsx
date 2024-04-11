import { useState } from "react"
import { Link } from "react-router-dom"

export default function Top()
{
    const[login,setlogin]=useState(false)
    const handleLogout = ()=>{
        localStorage.removeItem('userInfo')
        setlogin(true)
    }
    const user=localStorage.getItem('userInfo')
    return<header className="flex bg-peach/95 px-2 justify-between h-24 items-center fixed z-10 w-screen">
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
        {user ? (
  
            <button className="mr-10 btn" onClick={handleLogout}>LOGOUT</button>

        ):(
            <Link to="/login">
            <button className="mr-10 btn">LOGIN</button>
            </Link>
        )}
        
    </header>
}