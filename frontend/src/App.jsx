import './App.css'
import './index.css'
import Top from './components/top'
import Features from './components/features'
import SearchBar from './components/searchBar'
import Favs from './components/favs'
import Bigcard from './components/bigCard'
function App() {
  return (
    <>
    <Top/>
    <div className='mb-8'>
      <img src="/images/frontpage.png" className='w-screen h-screen '/>
    </div>
    <Features/>
    <SearchBar/>
    <Favs/>
    <Bigcard/>
    </>
  )
}
export default App