import './App.css'
import './index.css'
import Card from './components/card'
import Top from './components/top'
import cards from './constants/mianScreen'
function App() {
  return (
    <>
    <Top/>
    <div>
      <img src="/images/frontpage.png" alt="" srcset="" />
    </div>
    <div className='flex'>
      {
        cards.map(card =>(
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