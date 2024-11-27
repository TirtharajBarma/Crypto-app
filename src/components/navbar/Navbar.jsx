import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.config';  // Import your Firebase config
import { onAuthStateChanged, signOut } from 'firebase/auth';  // Import necessary Firebase methods
import { CoinContext } from '../../context/CoinContext';
import { LoginOutlined } from '@ant-design/icons'

const Navbar = () => {
  const [user, setUser] = useState(null);  // State to store user information
  const { setCurrency } = useContext(CoinContext);

  // Currency handler function
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  // UseEffect hook to listen for authentication state changes\
  // onAuthStateChanged -> listen to any changes to current authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {       // if currentUser exists
      setUser(currentUser);  // Set the user state when authentication changes
    });
    return () => unsubscribe();  // Clean up listener when component unmounts
  }, []);

  // Logout function
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);  // Reset user state after logout
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <h2>CryptoVault</h2>
      </Link>
      <ul>
        <Link to={'/'}> <li>Home</li></Link>
        <Link to={'/other'}><li>Other Currency</li></Link>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>
        {user ? (
          <div className='user'>
            <span>{user.email}</span> {/* Display user email */}
            <button onClick={handleLogout}>Logout</button> 
          </div>
        ) : (  
          <button><Link to="/signup">Signup</Link>  <LoginOutlined /></button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
