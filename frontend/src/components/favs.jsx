import Card from "./card"
import cards from "../constants/mianScreen"
import { useEffect } from "react"
import ourApi from "../constants/ourapi"

export default function Favs()
{
    
    return(<div className="mt-20">
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Favourites</h1>
    {cards.map(card =>(
          <Card
          image={card.image}
          name={card.name}
          content={card.content}
          />
        ))
      }
    </div>)
}