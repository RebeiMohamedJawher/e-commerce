import React, { useState } from 'react';

import './Login.css';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginAccount = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  const createAccount = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className="login">
      .
      <div className="login__page">
        <div className="logo">
        </div>
        <form>
          <span className="login__email">Email Address:</span>
          <input 
            value={email} 
            onChange={event => setEmail(event.target.value)}
            className="login__input" 
            type="email" 
            placeholder="Email" 
            required 
          />
          <span className="login__password">Password:</span>
          <input 
            value={password} 
            onChange={event => setPassword(event.target.value)}
            className="login__input" 
            type="password" 
            placeholder="Password" 
            required 
          />
          <button className="login__button" type="submit" onClick={loginAccount} >Login</button>
          <button className="login__button" type="submit" onClick={createAccount} >Create your Account</button>
        </form>
      </div>
      .
    </div>
  );
}

export default Login;