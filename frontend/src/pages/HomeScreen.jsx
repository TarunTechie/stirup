import Top from "../components/top";
import SearchBar from "../components/searchBar";
import Meals from "../actions/meals";
import Card from "../components/card";
import cards from "../constants/mianScreen";
import Bottom from "../components/bottom";
import { Link , ScrollRestoration} from "react-router-dom";
import Popular from "../components/Popular";

import News from "../components/news";
function HomeScreen() {
  return (
    <>
    <ScrollRestoration/>
    <Top/>
    <div className='mb-8'>
      <img src="/images/frontpage.png" className='w-screen h-screen '/>
    </div>
    <div className='flex justify-center gap-10 mb-10 mt-16'>
        <h1 className='pgheading'>Unlock The Flavors</h1>
        <div className='flex mt-2 text-5xl'>
        <h1 className='font-sill text-orange'>Yummy.</h1>
        <h1 className='font-sill text-olive'>Tasty.</h1>
        <h1 className='font-sill text-maron'>Delicious</h1>
        </div>
    </div>
    <div className='flex justify-center gap-12'>
    {cards.map(card =>(
          <Link to={`${card.link}`}>
          <Card
          
          image={card.image}
          name={card.name}
          content={card.content}
          />
          </Link>
        ))
      }
      </div>
    <SearchBar/>
    <Meals/>
    <Popular />
    <News/>
    <Bottom/>  
    </>
  )
}
export default HomeScreen