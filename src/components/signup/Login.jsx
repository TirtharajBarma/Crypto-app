import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import InputField from "./InputField";
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');  // Redirect to home page after successful login
    } catch (err) {
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with email</h2>

      <form onSubmit={handleLogin} className="login-form">
        <InputField
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error-message">{error}</div>}

        <a href="#" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
      </p>
    </div>
  );
};

export default Login;