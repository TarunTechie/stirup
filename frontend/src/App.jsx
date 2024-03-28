import './App.css'
import './index.css'
import Top from './components/top'
import cards from './constants/mianScreen'
function App() {
  return (
    <>
    <Top/>
    <div className='mb-8'>
      <img src="/images/frontpage.png" className='w-screen h-screen '/>
    </div>
    <div className='flex'>
    {cards.map(card =>(
          <Card
          image={card.image}
          name={card.name}
          content={card.content}
          />
        ))
      }
    </div>
    </>
  )
}
export default App