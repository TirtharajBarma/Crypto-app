import './App.css'
import {Navbar, Footer} from './components'
import { Routes, Route } from 'react-router-dom'
import {Home, Coin} from './pages'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
