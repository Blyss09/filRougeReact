import "./home.css";
export default function Home() {
  return (
    <main>
      <div className="blur-overlay"></div>
      <div className="content">
        <h1>Bienvenu sur CoolGames</h1>
        <span>Le site de mini-jeux seul ou à plusieurs</span>
        <div className="enter-buttons">
          <button id="button-log">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> Connexion </span>
          </button>
          <button id="button-reg">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text">S'inscrire</span>
          </button>
        </div>
        <button id="button-main">
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text"> Continuer en tant qu'inviter </span>
        </button>
      </div>
    </main>
  );
}
