import cards from "../constants/mianScreen"
import ourApi from "../constants/ourapi"
import Reccard from "./recCard"
export default function Favs()
{
  
    return(<div className="mt-20">
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Favourites</h1>
    <Reccard/>
    </div>)
}