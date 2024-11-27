import React, { useEffect, useState, useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import './Otherpage.css';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Otherpage = () => {
  const { allCoin, currency } = useContext(CoinContext); // Props passed with coin details and currency details
  const [displayCoin, setDisplayCoin] = useState([]); // Coins to display
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const coinsPerPage = 10; // Number of coins per page

  // Update the displayCoin when allCoin changes
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  // Calculate the start and end indices for slicing
  const startIndex = (currentPage - 1) * coinsPerPage;
  const endIndex = startIndex + coinsPerPage;

  // Pagination change handler
  const handlePageChange = (event, page) => {
    setCurrentPage(page); // Update the current page
  };

  return (
    <div>
      <div className="hero">
      <h1>Other Cryptos</h1>
      </div>
     
      <div className="crypto-table extra">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(startIndex, endIndex).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            {/* Redirect to coin's page */}
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + ' - ' + item.symbol}</p>
            </div>
            <p>
              {currency.symbol}{' '}
              {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0
                  ? 'green'
                  : 'red'
              }
            >
              {Math.floor(item.price_change_percentage_24h * 100) /
                100}
            </p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <Stack spacing={2}>
        <div className="pagination-container">
        <Pagination
          count={Math.ceil(displayCoin.length / coinsPerPage)} // Total pages
          page={currentPage} // Current page
          onChange={handlePageChange} // Handle page change
          sx={{
            "& .MuiPaginationItem-root": { color: "white" }, // Text color
            "& .Mui-selected": { backgroundColor: "white", color: "black" }, // Selected item styles
          }} 
        />
        </div>
      </Stack>
    </div>
  );
};

export default Otherpage;
