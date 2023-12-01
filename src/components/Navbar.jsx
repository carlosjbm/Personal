import "./Navbar.css";
import logo from "../assets/logo.svg";

// eslint-disable-next-line react/prop-types
function Navbar({ english, handleEnglish }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="navbar__imglogo" src={logo} alt="Logo" />
        <p>Carlos Borges</p>
        {english ? (
          <button
            className="navbar__handle-idiom"
            onClick={() => handleEnglish()}
          >
            cambiar a Español
          </button>
        ) : (
          <button
            className="navbar__handle-idiom"
            onClick={() => handleEnglish()}
          >
            change to English
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
