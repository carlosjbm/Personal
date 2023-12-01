import "./About.css";
import Level from "./Level";
import alto from "../assets/alto.svg";
import medio from "../assets/medio.svg";
import bajo from "../assets/bajo.svg";
import react from "../assets/react.svg";
import html from "../assets/html.svg";
import node from "../assets/node.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
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
            my knowledge into practice.
          </p>
        ) : (
          <p>
            Mi nombre es Carlos Borges soy garduado de Ingeniería Informática en
            la Universidad de Matanzas(Cuba), me encata el mundo del desarrollo
            web y todo lo que a este se refiere. Aunque tengo poca experiencia
            laboral estoy preparado para integrarme a un proyecto donde pueda
            poner en práctica todos mis conocimientos.
          </p>
        )}

        <div className="about__form"></div>
      </div>
      {english ? (
        <h2>
          <span className="about__enf">Hard</span> Skills
        </h2>
      ) : (
        <h2>
          <span className="about__enf">Habilidades</span> Fuertes
        </h2>
      )}

      <div className="about__hardskills">
        <Level name="HTML" img={alto} />
        <Level name="CSS" img={alto} />
        <Level name="JavaScript" img={alto} />
        <Level name="React.js" img={alto} />
        <Level name="Sql" img={bajo} />
        <Level name="PHP" img={bajo} />
        <Level name="C#" img={bajo} />
        <Level name="Vue.js" img={bajo} />
        <Level name="Svelte" img={medio} />
      </div>
      {english ? (
        <h2>
          <span className="about__enf">Some Mastered </span> Technologies
        </h2>
      ) : (
        <h2>
          <span className="about__enf">Agunas Tecnologías</span> Dominadas
        </h2>
      )}
      <div className="about__techs">
        <img className="about__img" src={html} alt="html" />
        <img className="about__img" src={css} alt="css" />
        <img className="about__img" src={node} alt="Node" />
        <img className="about__img" src={react} alt="React" />
        <img className="about__img" src={js} alt="js" />
      </div>
    </div>
  );
}

export default About;
