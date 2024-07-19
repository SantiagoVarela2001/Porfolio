import React from 'react';
import { Carousel } from 'react-bootstrap';
import Tecnologias from '../tecnologias/tecnologias'; // Ajusta la ruta según sea necesario
import "../carrete/carrete.css"

const lenguajes = [
  { pathImg: "/iconos/java.png", nombre: "JAVA" },
  { pathImg: "/iconos/PYTHON.png", nombre: "PYTHON" },
  { pathImg: "/iconos/JAVASCRIPT.png", nombre: "JS" }
];

const freamworks = [
    { pathImg: "/iconos/SPRINGBOOT.png", nombre: "SPRING" },
    { pathImg: "/iconos/NODEJS.png", nombre: "NODEJS" },
    { pathImg: "/iconos/REACT.png", nombre: "REACT" }
  ];

  const web = [
    { pathImg: "/iconos/html.png", nombre: "HTML" },
    { pathImg: "/iconos/CSS.png", nombre: "CSS" },
    { pathImg: "/iconos/bootstrap.png", nombre: "Bootstrap" },
    { pathImg: "/iconos/tailwind.png", nombre: "Tailwind" },
    { pathImg: "/iconos/thymeleaf.png", nombre: "Thymeleaf" }
  ];

  const basesDeDatos = [
    { pathImg: "/iconos/mongodb.png", nombre: "MongoDb" },
    { pathImg: "/iconos/sql.png", nombre: "SQL" },
  ];

  const metodologiasYHerramientas = [
    { pathImg: "/iconos/oop.png", nombre: "OOP" },
    { pathImg: "/iconos/uml.png", nombre: "UML" },
    { pathImg: "/iconos/scrum.png", nombre: "SCRUM" },
    { pathImg: "/iconos/git.png", nombre: "GIT" }
  ];

const Carrete = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <Tecnologias nombreTecnologias="LENGUAJES" listaTecnologias={lenguajes} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Tecnologias nombreTecnologias="FREAMWORKS Y LIBRERIAS" listaTecnologias={freamworks} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Tecnologias nombreTecnologias="TECNOLOGIAS WEB" listaTecnologias={web} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Tecnologias nombreTecnologias="BASES DE DATOS" listaTecnologias={basesDeDatos} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Tecnologias nombreTecnologias="METODOLOGIAS Y HERRAMIENTAS" listaTecnologias={metodologiasYHerramientas} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default Carrete;