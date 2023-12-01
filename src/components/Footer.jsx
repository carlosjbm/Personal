import "./Footer.css";
import comilla from "../assets/comilla.svg";

import Social from "./Social";
import { useContext } from "react";
import { idiomContext } from "../context/idiomContext";

function Footer() {
  const { english } = useContext(idiomContext);
  return (
    <footer className="footer">
      <div className="footer__fact">
        <img className="comilla" src={comilla} alt="Comilla" />
        {english ? (
          <p>
            “Learning is the only thing that the mind never gets tired of, is
            never afraid of and never regrets”
          </p>
        ) : (
          <p>
            “Aprender es lo único de lo que la mente nunca se cansa, es “Nunca
            temo y nunca me arrepiento”
          </p>
        )}
        <p className="footer__writter">~Leonardo da Vinci</p>
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
