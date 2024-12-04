import React from 'react';
import './body.css';
import Card from '../card/card';
import ChatToggle from '../chatToggle/chatToggle';
import Carrete from '../carrete/carrete';
import Form from '../form/form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';  // Para las redes sociales
import { faEnvelope, faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';  // Para otros íconos

const isidrabit = [
  { pathImg: "/iconos/REACT.png" },
  { pathImg: "/iconos/NODEJS.png" },
  { pathImg: "/iconos/CSS.png" },
  { pathImg: "/iconos/bootstrap.png" }
];

const gestor_de_empleados = [
  { pathImg: "/iconos/java.png" },
  { pathImg: "/iconos/SPRINGBOOT.png" },
  { pathImg: "/iconos/REACT.png" },
  { pathImg: "/iconos/bootstrap.png" }
];

const Body = () => {
  return (
    <>
      <div className="transition-container">
        <div className="hero-container">
          <div className="foto-container">
            <img src="/foto_santiago.png" alt="Santiago Varela" className="foto" />
          </div>
          <div className="info-container">
            <h1 className="titulo">Santiago Varela</h1>
            <h3 className="subtitulo">Analista de Sistemas</h3>
            <p className="presentacion">
              Hola, soy <span className="resaltador">Analista de Sistemas</span> y actualmente estoy
              cursando mis últimas dos materias para recibirme como <span className="resaltador">analista de sistemas</span>.
              Soy una persona <span className="resaltador">comprometida</span> y <span className="resaltador">emprendedora</span>.
              Mi objetivo es convertirme en un <span className="resaltador">nómada digital</span>, explorando diferentes lugares
              mientras trabajo en lo que me apasiona desde cualquier parte del mundo, rodeado de naturaleza.
              Me gusta <span className="resaltador">aportar valor</span> a los equipos con los que trabajo, intercambiar ideas y
              <span className="resaltador">aprender de los demás</span>, ya que creo que es la clave para crecer profesionalmente y personalmente.
              ¡Espero que mi porfolio sea de su agrado! :)
            </p>

            <div className="botones-container">
              <button
                className="btn-contacto"
                type="submit"
                onClick={() => window.location.href = "mailto:santiago.varela@hotmail.com?subject=Consulta%20de%20Contacto&body=Hola,%20me%20gustaría%20contactarme%20con%20usted."}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contáctame
              </button>
              <button className="btn-cv" href='/Analista_de_Sistemas_Santiago_Varela_cv.pdf' download>
                <FontAwesomeIcon icon={faDownload} /> Descargar CV
              </button>

              <div className="social-icons">
                <a href="https://github.com/SantiagoVarela2001" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/santi_cod3/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/santiago-valentin-varela/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>

            </div>

          </div>
        </div>

        <div className="gradient-divider"></div>

        <h3 className="subtitulo experiencia">
          <FontAwesomeIcon icon={faBriefcase} /> EXPERIENCIA
        </h3>

        <div className="cartas">
          <Card
            title="ISIDRA BIT"
            text=""
            pathimg="/isidrabit.jpg"
            projectUrl="https://isidrabit.netlify.app/"
            document="ISIDRA_BIT_(documentacion).pdf"
            technologies={isidrabit}
          />

          <Card
            title="GESTOR DE EMPLEADOS"
            text=""
            pathimg="/Gestion_de_Empleados.jpg"
            projectUrl="https://www.linkedin.com/feed/update/urn:li:activity:7212077812642451457/"
            document="GESTOR_DE_EMPLEADOS_(documentacion).pdf"
            technologies={gestor_de_empleados}
          />
        </div>
      </div>
      <Carrete />
      <div className="gradient-divider"></div>

      <Form />
      <ChatToggle />
    </>
  );
}

export default Body;
