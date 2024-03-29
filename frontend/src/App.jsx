import './App.css'
import './index.css'
import Top from './components/top'
import Features from './components/features'
import SearchBar from './components/searchBar'
import Favs from './components/favs'
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
    </>
  )
}
export default App