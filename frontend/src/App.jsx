import './App.css'
import './index.css'
import Top from './components/top'
import Features from './components/features'

function App() {
  return (
    <>
    <Top/>
    <div className='mb-8'>
      <img src="/images/frontpage.png" className='w-screen h-screen '/>
    </div>
    <Features/>
    </>
  )
}
export default App