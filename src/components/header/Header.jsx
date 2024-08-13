import React from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css';

const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <img src="./src/assets/img/logo.jpg" alt="logo site" />
        </div>
        <div className="navigationHeader">
          <ul id="navigation-content">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/games">Jeux</Link></li>
            <li><Link to="/ladder" className="active">Classement</Link></li>
            <li id="profile"><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
        <div className="navigation">
          <ul id="navigationBurger-content">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/games">Jeux</Link></li>
            <li><Link to="/ladder" className="active">Classement</Link></li>
            <li id="profile"><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

