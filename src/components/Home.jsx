import "./Home.css";
import home_art1 from "../assets/home_art 1.svg";
import cv from "../assets/Carlos Borges Milian.pdf";
import cvEn from "../assets/Carlos Borges-CV(en).pdf";
import { useContext } from "react";
import { idiomContext } from "../context/idiomContext";
import { ToggleOf, ToggleOn } from "./socialIcons";

function Home() {
  const { english, handleEnglish } = useContext(idiomContext);

  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__contact">
          <div className="button-container">
            <button className="home__button" onClick={handleEnglish}>
              {english ? (
                <div className="toggle-idiom">
                  <ToggleOn />
                  <span style={{ color: "var(--blue-to-link)" }}>English</span>
                </div>
              ) : (
                <div className="toggle-idiom">
                  <ToggleOf />
                  English
                </div>
              )}
            </button>
          </div>

          <div className="home__img">
            <img src={home_art1} alt="Home Image" />
          </div>
          <div className="home__text">
            <div className="home__text-container">
              {english ? <p>Hi, how are things</p> : <p>Hola, que tal </p>}
              {english ? (
                <p className="home__text--main">I AM A WEB DEVELOPER</p>
              ) : (
                <p className="home__text--main">SOY DESARROLLADOR WEB</p>
              )}
              {english ? (
                <p>
                  Welcome to my personal portfolio, this portfolio is only a
                  summary, if you want to know more details you can{" "}
                  <a
                    className="text-link"
                    href={cvEn}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    download my CV
                  </a>
                </p>
              ) : (
                <p>
                  Sea bienvenid@ a mi portafolio personal, este portafolio solo
                  es un resumen, si quiere saber más detalles puede{" "}
                  <a
                    className="text-link"
                    href={cv}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    descargar mi CV
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
