import cards from "../constants/mianScreen"
import ourApi from "../constants/ourapi"
import Reccard from "./recCard"
import recipes from "../constants/recipes"
export default function Favs()
{
  
    return(<div className="justify-center mt-20" >
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Favourites</h1>
    <div className="flex justify-center">
    {recipes.map(recipe =>(
          <Reccard
          image={recipe.image}
          heading={recipe.title}
          content={recipe.summary}
          />
        ))
      }
    </div>
    </div>)
}