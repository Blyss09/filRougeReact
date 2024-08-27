import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContexts.jsx";
import "../header/header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  const handleLogout = () => {
    setUser(null);
    navigate("/login")
  }

  return (
    <header>
      <div className="nav">
        <div className="logo">
          <img src="./src/assets/img/logo.jpg" alt="logo site" />
        </div>
        <div className="navigationHeader">
          <ul id="navigation-content">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={location.pathname === "/games" ? "active" : ""}>
              <Link to="/games">Jeux</Link>
            </li>
            <li className={location.pathname === "/ladder" ? "active" : ""}>
              <Link to="/ladder">Classement</Link>
            </li>
            <li
              id="profile"
              className={location.pathname === "/profile" ? "active" : ""}
            >
              <Link to="/profile">{user ? user.username : "Profile"}</Link>
            </li>
            {user && (
              <li>
                <button onClick={handleLogout} className="logout-button" aria-label="Déconnexion">
                  <i className="bx bx-power-off"></i>
                </button>
              </li>
            )}
          </ul>
        </div>
        <button className="burger-menu" aria-label="Ouvrir le menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navigation">
          <ul id="navigationBurger-content">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={location.pathname === "/games" ? "active" : ""}>
              <Link to="/games">Jeux</Link>
            </li>
            <li className={location.pathname === "/ladder" ? "active" : ""}>
              <Link to="/ladder">Classement</Link>
            </li>
            <li
              id="profile"
              className={location.pathname === "/profile" ? "active" : ""}
            >
              <Link to="/profile">{user ? user.username : "Profile"}</Link>
            </li>
            {user && (
              <li>
                <button onClick={handleLogout} className="logout-button" aria-label="Déconnexion">
                  <i className="bx bx-power-off"></i>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
