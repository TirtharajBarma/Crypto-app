import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

import InputField from "./InputField";
import './style.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  // google popup
  const handleGoogle = async() => {
   try {
      await signInWithPopup(auth, googleProvider);
      // const user = res.user;
      // console.log('google signup successfully', user);
      navigate('/');
   } catch (error) {
      console.log(error);
   }
  }

  const handleGithub = async() => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');  // Redirect to home page after successful signup
    } catch (err) {
      console.error('Signup error:', err); // Log detailed error
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password must be at least 6 characters.');
      } else {
        setError('Signup failed. Please try again.');
      }
    }
  };
  return (
    <div className="login-container">
      <h2 className="form-title">Sign up with</h2>
      <div className="social-login">
      <button className="social-button" onClick={handleGoogle}>
        <img src="google.svg" alt="Google" className="social-icon" />
        Google
      </button>
      <button className="social-button" onClick={handleGithub}>
        <img src="icons8-github-30.png" alt="github" className="social-icon" />
        Github
      </button>
    </div>

      <p className="separator"><span>or</span></p>

      <form onSubmit={handleSignup} className="login-form">
        <InputField type="email" placeholder="Email address" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <InputField type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />

          {error && <div className="error-message">{error}</div>}

        <a href="#" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Already have an account? <Link to="/login" className="signup-link">Log in</Link>
      </p>
    </div>
  )
}

export default Signup;
