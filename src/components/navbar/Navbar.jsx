import React, { useContext } from 'react'
import './Navbar.css'
import { LoginOutlined } from '@ant-design/icons'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value){
      case 'usd': {
        setCurrency({name: 'usd', symbol: '$'});
        break;
      }
      case 'eur': {
        setCurrency({name: 'eur', symbol: '€'});
        break;
      }
      case 'inr': {
        setCurrency({name: 'inr', symbol: '₹'});
        break;
      }
      default: {
        setCurrency({name: 'usd', symbol: '$'});
        break;
      }

    }
  }

  return (
    <div className='navbar'>
        <h2>CryptoVault</h2>
      <img src="" alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EURO</option>
            <option value="inr">INR</option>
        </select>
        <button>SignUp <LoginOutlined /></button>
      </div>
    </div>
  )
}

export default Navbar
