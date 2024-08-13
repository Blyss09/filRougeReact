import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../register/register.css";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/cool_games/register.php', {
        username,
        email,
        password
      });
      console.log(response.data);
      // Navigate to the login page or show a success message
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <div className="blur-overlay">
      <div className="content">
        <div className="login-box">
          <p>S'enregistrer</p>
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                id="signup-username"
                required="required"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Pseudo</label>
            </div>
            <div className="user-box">
              <input
                id="signup-email"
                required="required"
                name="email"
                type="text"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                id="signup-password"
                required="required"
                name="password"
                type="password"
                pattern=".{8,}"
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
                S'inscrire
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
          <p>Déjà inscrit ? <a onClick={() => navigate('/login')} className="a2">Connecte toi !</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
