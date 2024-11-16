import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);        // props passed with coins details AND currency details (name & symbol)
  const [displayCoin, setDisplayCoin] = useState([]);         // stores all the coins
  const [input, setInput] = useState('');                     // stores the search input


  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value === ''){
      setDisplayCoin(allCoin);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();


    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    })

    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  },[allCoin])

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br /> Crypto MarketPlace </h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos. </p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Search crypto' onChange={inputHandler} value={input} list='coinList' required />    {/*  suggestions */}

          <datalist id='coinList'>
            {allCoin.map((item, index) => <option key={index} value={item.name} /> )}        {/*  suggestions */}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign: 'center'}}> 24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}
              </p>
              <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home