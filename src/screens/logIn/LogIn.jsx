import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../logIn/logIn.css"

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="blur-overlay">
      <div className="content">
        <div className="login-box">
          <p>Connexion</p>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                id="login-email"
                required
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                id="login-password"
                required
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Mot de passe</label>
            </div>
            <div className="buttons-menu">
              <button type="submit" className="styled-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Entrer
              </button>
              <button type="button" className="styled-button" onClick={() => navigate('/')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Quitter
              </button>
            </div>
          </form>
          <p>Toujours pas de compte ? <a onClick={() => navigate('/register')} className="a2">S'inscrire !</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;