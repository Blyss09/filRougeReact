import { Route, Routes } from "react-router-dom";
import Profile from "../src/screens/profile/Profile.jsx";
import Register from "../src/screens/register/Register.jsx";
import Games from "../src/screens/games/Games.jsx";
import Ladder from "../src/screens/ladder/Ladder.jsx";
import Home from "../src/screens/home/Home.jsx";
import Login from "./screens/logIn/LogIn.jsx";
import { UserProvider } from "../src/contexts/userContexts.jsx";
import 'boxicons/css/boxicons.min.css';
import "./assets/resetCss/reset.css";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
