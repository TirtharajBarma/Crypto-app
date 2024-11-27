import './App.css'
import {Navbar, Footer, Signup} from './components'
import { Routes, Route } from 'react-router-dom'
import {Home, Coin, Otherpage} from './pages'
import Login from './components/signup/Login'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/other' element={<Otherpage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
