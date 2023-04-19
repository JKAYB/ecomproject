import React, { useState } from 'react';
import './Login.css';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import google from '../../Icon/Google.png'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}, Remember me: ${rememberMe}`);
    // Send login request to server
  };

  return (
    <div className='pageLogin'>
    <Navbar/>
    <div className="login-page">
      <form className='loginForm' onSubmit={handleSubmit}>
        <button  className='googleSignIn'> <img className='google-icon' src={google} alt='google'></img>Continue With Google</button>
        <p className='or'>or</p>
        <div className="form-group">
          <input className='input-login' type="text" id="username" placeholder='Email Address' value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <input  className='input-login' type="password" id="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
            <div className='checkDiv'>
            <input className='checkbox' type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange} />
            <label className="remember-me">
            Remember me
          </label>
          <label className="forgot-pass">
            Forgot Password?
          </label>
          </div>
        </div>
        <button className='sign-in-button' type="submit">Sign In</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default LoginPage;
