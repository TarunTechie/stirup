import './App.css'
import './index.css'
import Card from './components/card'
import Top from './components/top'
function App() {
  return (
    <>
    <Top/>

    <div className='flex'>
    <Card
    image={"/images/random.jpeg"}
    name={"RANDOM"}
    content={"this card will be genetating random recepies in the card so ya this is a card sdysdfhdfhdrejertsejyerjyethestetyheyeye"}
    />
    </div>
    </>
  )
}
export default App