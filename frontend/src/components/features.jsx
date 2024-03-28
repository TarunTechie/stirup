import Card from './card'
import cards from '../constants/mianScreen'
export default function Features()
{
    return <>
    <div className='flex justify-center gap-10'>
        <h1 className='font-heading text-maron text-6xl'>Unlock The Flavors</h1>
        <div className='flex mt-2 text-5xl'>
        <h1 className='font-sill text-orange'>Yummy.</h1>
        <h1 className='font-sill text-olive'>Tasty.</h1>
        <h1 className='font-sill text-maron'>Delicious</h1>
        </div>
    </div>
    {cards.map(card =>(
          <Card
          image={card.image}
          name={card.name}
          content={card.content}
          />
        ))
      }
    </>
}