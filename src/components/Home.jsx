import Navbar from "./Navbar";
import "./Home.css";
import home_art1 from "../assets/home_art 1.svg";
import cv from "../assets/Carlos Borges Milian.pdf";
import cvEn from "../assets/Carlos Borges-CV(en).pdf";
import Social from "./Social";
import { useContext } from "react";
import { idiomContext } from "../context/idiomContext";

function Home() {
  const { english, handleEnglish } = useContext(idiomContext);

  return (
    <div className="home">
      <Navbar english={english} handleEnglish={handleEnglish} />
      <div className="home__hero">
        <div className="home__contact">
          <div className="home__text">
            {english ? <p>Hi, how are things</p> : <p>Hola, que tal </p>}
            {english ? (
              <p className="home__text--main">I AM A WEB DEVELOPER</p>
            ) : (
              <p className="home__text--main">SOY DESARROLLADOR WEB</p>
            )}
            {english ? (
              <p>
                Welcome to my personal portfolio, this portfolio is only a
                summary, if you want to know more details you can download my
                CV.
              </p>
            ) : (
              <p>
                Sea bienvenid@ a mi portafolio personal, este portafolio solo es
                un resumen, si quiere saber más detalles puede descagar mi CV.
              </p>
            )}
          </div>
          <button className="home__button">
            {english ? (
              <a href={cvEn} download target="_blank" rel="noopener noreferrer">
                <p>Download CV</p>
              </a>
            ) : (
              <a href={cv} download target="_blank" rel="noopener noreferrer">
                <p>Descargar CV</p>
              </a>
            )}
          </button>
          <Social />
        </div>
        <div className="home__img">
          <img src={home_art1} alt="Home Image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
