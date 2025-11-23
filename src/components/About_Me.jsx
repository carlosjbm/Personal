import "./About.css";
import Level from "./Level";
import alto from "../assets/alto.svg";
import bajo from "../assets/bajo.svg";
import cv from "../assets/Carlos Borges Milian.pdf";
import cvEn from "../assets/Carlos Borges-CV(en).pdf";

import { useContext } from "react";
import { idiomContext } from "../context/idiomContext";

function About() {
  const { english } = useContext(idiomContext);

  return (
    <div className="about">
      <h1>
        <span className="about__enf">Carlos</span> Borges
      </h1>
      <div className="about__p">
        {english ? (
          <p>
            My name is Carlos Borges, I have a degree in Computer Engineering in
            the University of Matanzas (Cuba), I love the world of development
            website and everything related to it. Although I have little
            experience job I am prepared to join a project where I can put all
            my knowledge into practice and to continue learning.
            <span>
              <a
                className="dowload-btn"
                href={cvEn}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                download my CV
              </a>
            </span>
          </p>
        ) : (
          <p>
            Mi nombre es Carlos Borges soy garduado de Ingeniería Informática en
            la Universidad de Matanzas(Cuba), me encata el mundo del desarrollo
            web y todo lo que a este se refiere. Aunque tengo poca experiencia
            laboral estoy preparado para integrarme a un proyecto donde pueda
            poner en práctica todos mis conocimientos y seguir mejorando.
            <span>
              <a
                className="dowload-btn"
                href={cv}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                descarga mi CV
              </a>
            </span>
          </p>
        )}
      </div>
      {english ? <h2>Skills</h2> : <h2>Habilidades</h2>}

      <div className="about__hardskills">
        <Level name="HTML" img={alto} />
        <Level name="CSS" img={alto} />
        <Level name="JavaScript" img={alto} />
        <Level name="Git" img={alto} />
        <Level name="React.js" img={alto} />
        <Level name="Next.js" img={alto} />
        <Level name="Sql" img={bajo} />
        <Level name="PHP" img={bajo} />
        <Level name="C#" img={bajo} />
      </div>
    </div>
  );
}

export default About;
