import React from 'react';
import { Carousel } from 'react-bootstrap';
import Tecnologias from '../tecnologias/tecnologias'; // Ajusta la ruta según sea necesario
import "../carrete/carrete.css";

const lenguajes = [
  { pathImg: "/iconos/java.png", nombre: "JAVA" },
  { pathImg: "/iconos/PYTHON.png", nombre: "PYTHON" },
  { pathImg: "/iconos/JAVASCRIPT.png", nombre: "JS" }
];

const frameworks = [
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
  { pathImg: "/iconos/sql.png", nombre: "SQL" }
];

const metodologiasYHerramientas = [
  { pathImg: "/iconos/oop.png", nombre: "OOP" },
  { pathImg: "/iconos/uml.png", nombre: "UML" },
  { pathImg: "/iconos/scrum.png", nombre: "SCRUM" },
  { pathImg: "/iconos/git.png", nombre: "GIT" }
];

const Carrete = () => {
  return (
    <div className="carrete-container">
      <h3 className='experiencia'>CONOCIMIENTOS</h3>
      <Carousel indicators={true} interval={5000}>
        <Carousel.Item>
          <Tecnologias nombreTecnologias="LENGUAJES" listaTecnologias={lenguajes} />
        </Carousel.Item>

        <Carousel.Item>
          <Tecnologias nombreTecnologias="FRAMEWORKS Y LIBRERÍAS" listaTecnologias={frameworks} />
        </Carousel.Item>

        <Carousel.Item>
          <Tecnologias nombreTecnologias="TECNOLOGÍAS WEB" listaTecnologias={web} />
        </Carousel.Item>

        <Carousel.Item>
          <Tecnologias nombreTecnologias="BASES DE DATOS" listaTecnologias={basesDeDatos} />
        </Carousel.Item>

        <Carousel.Item>
          <Tecnologias nombreTecnologias="METODOLOGÍAS Y HERRAMIENTAS" listaTecnologias={metodologiasYHerramientas} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrete;
