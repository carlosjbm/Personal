import "./Profolio.css";
// import projects from "../assets/projects.js";
import github from "../assets/github.svg";
import { useContext, useState } from "react";
import { idiomContext } from "../context/idiomContext";

function Profolio() {
  const projects = [
    {
      id: 1,
      name: "React-Challenge",
      image: "public/images/react-challenge.png",
      type: "pruebas",
      description:
        "Este es un Challenge para desarrolladores Front-End, donde hago uso de conceptos básicos de React como la división de la UI en componentes y el manejo del estado.",
      enDecription:
        "This is a Challenge for Front-End developers, where I make use of basic React concepts such as dividing the UI into components and managing state.",
      link: "https://github.com/carlosjbm/React-Challeng.git",
      linkWeb: "https://reactcarlinhos.netlify.app/",
      tools: "React(useState)",
    },
    {
      id: 2,
      name: "App con Git",
      image: "public/images/github1.png",

      type: "ejercicio",
      description:
        "En este proyecto pongo en práctica mis conocimientos sobre el uso del control de versiones con Git y todo el flujo de trabajo con GitHub.",
      enDecription:
        "In this project I put into practice my knowledge about using version control with Git and the entire workflow with GitHub.",
      link: "https://github.com/carlosjbm/git.git",
      tools: "Git, GitBash, GitHub",
    },
    {
      id: 3,
      name: "Conceptos JS",
      image: "public/images/prueba.png",

      type: "ejercicio",
      description:
        "En este proyecto pongo en párctica algunos de mis conocimientos de JS, especificamente en el manejo de peticiones asíncronas como son AJAX y Fetch.",
      enDecription:
        "In this project I put into practice some of my JS knowledge, specifically in handling asynchronous requests such as AJAX and Fetch.",
      link: "https://github.com/carlosjbm/curso-js.git",
      tools: "Vanilla JS",
    },
    {
      id: 4,
      name: "Prueba Técnica (Junior)",
      image: "public/images/prueba.png",

      type: "pruebas",
      description:
        "Esta es una prube técnica para desarrolladores (juniors) donde pongo en práctica conocimientos como el fetching de datos, manejo del estado,el uso de Hooks y manipulación de strings.",
      enDecription:
        "This is a technical test for developers (juniors) where I put into practice knowledge such as data fetching, state management, the use of Hooks and string manipulation.",
      link: "",
      tools: "React(useState, useEffect, useContext), API-Rest",
    },
    {
      id: 5,
      name: "Pizza Shop",
      image: "public/images/pshop.png",

      type: "pruebas",
      description:
        "Este proyecto no es mas que la simulación de una UI para una PizzaShop online, donde pongo a prueba mis habilidades de maquetación y el desarrollo de una UI desde una maqueta hecha en Figma",
      enDecription:
        "This project is nothing more than the simulation of a UI for an online PizzaShop, where I test my layout skills and the development of a UI from a mockup made in Figma",
      link: "",
      tools: "React(useState), Figma, Git, GitHub",
    },
    {
      id: 6,
      name: "Prueba Tecnica React-Developer",
      image: "public/images/prueba.png",

      type: "pruebas",
      description:
        "Durante la resolucion de esta prueba técnica utilicé conceptos de React como el manejo del estado, conección con una API, el uso del contexto para el manejo de un estado global.",
      enDecription:
        "During the resolution of this technical test I used React concepts such as state management, connection with an API, and the use of context to manage a global state.",
      link: "",
      tools: "React(useState, useContext, useEffect), React-Router-Dom, API",
    },
  ];

  const [data, setData] = useState(projects);

  const { english } = useContext(idiomContext);

  const handleTest = () => {
    setData(projects);
    setData(projects.filter((el) => el.type === "pruebas"));
  };
  const handleExor = () => {
    setData(projects);
    setData(projects.filter((el) => el.type === "ejercicio"));
  };
  const reset = () => {
    setData(projects);
  };

  return (
    <div className="profolio">
      <div className="profolio__header">
        {english ? (
          <h1 className="porfolio__h1">Briefcase</h1>
        ) : (
          <h1 className="porfolio__h1">Portafolio</h1>
        )}
        {english ? (
          <p className="porfolio__p">These are some projects I have done</p>
        ) : (
          <p className="porfolio__p">
            Estos son algunos proyectos que he realizado
          </p>
        )}
      </div>
      <nav>
        <ul className="profolio__nav">
          <button className="profolio__button" onClick={() => reset()}>
            {english ? (
              <li className=" porfolio__item porfolio__item--dark">All</li>
            ) : (
              <li className=" porfolio__item porfolio__item--dark">Todos</li>
            )}
          </button>

          <button className="profolio__button" onClick={() => handleTest()}>
            {english ? (
              <li className=" porfolio__item">Technical tests</li>
            ) : (
              <li className=" porfolio__item">Pruebas Técnicas</li>
            )}
          </button>

          <button className="profolio__button" onClick={() => handleExor()}>
            {english ? (
              <li className=" porfolio__item">Exercises </li>
            ) : (
              <li className=" porfolio__item">Ejercicios </li>
            )}
          </button>
        </ul>
      </nav>

      <div className="profolio__list">
        {data.map((el) => {
          return (
            <div key={el.id} className="profolio__example">
              {english ? (
                <p>
                  Name:{" "}
                  <a href={el.linkWeb} target="_blank" rel="noreferrer">
                    {" "}
                    {el.name}
                  </a>
                </p>
              ) : (
                <p>
                  Nombre:{" "}
                  <a href={el.linkWeb} target="_blank" rel="noreferrer">
                    {" "}
                    {el.name}
                  </a>
                </p>
              )}
              <div className="profolio__image">
                <img src={el.image} alt="Project Photo" />
              </div>
              {english ? <p>{el.enDecription}</p> : <p>{el.description}</p>}

              <p>{el.tools}</p>
              <div className="social-icon">
                <a href={el.link} target="_blank" rel="noreferrer">
                  <img
                    className="social__icon"
                    src={github}
                    alt="link_github"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profolio;
