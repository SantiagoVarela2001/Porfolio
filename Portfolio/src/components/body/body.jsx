import React from 'react';
import './body.css';
import Card from '../card/card';
import ChatToggle from '../chatToggle/chatToggle';
import Carrete from '../carrete/carrete';
import Form from '../form/form'

const isidrabit = [
  { pathImg: "/iconos/REACT.png" },
  { pathImg: "/iconos/NODEJS.png" },
  { pathImg: "/iconos/bootstrap.png" },
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
      <div className="foto-container">
        <img src="/foto_santiago.png" alt="Santiago Varela" className="foto" />
        <div className="info-container">
          <h1>Santiago Varela</h1>
          <h3>Analista Programador</h3>
          <p className='presentacion'>
            Hola, soy <span className="resaltador">analista programador</span> y actualmente estoy
             cursando mis últimas dos materias para recibirme como <span className="resaltador">analista de sistemas</span>.
              Soy una persona <span className="resaltador">comprometida</span> y <span className="resaltador">emprendedora</span>.
               Mi objetivo es convertirme en un <span className="resaltador">nómada digital</span>,
               explorando diferentes lugares mientras trabajo en lo que me apasiona desde cualquier parte
                del mundo, rodeado de naturaleza.
            Me gusta <span className="resaltador">aportar valor</span> a los equipos con los que trabajo,
             intercambiar ideas y <span className="resaltador">aprender de los demás</span>,
              ya que creo que es la clave para crecer profesionalmente y personalmente.
               ¡Espero que mi porfolio sea de su agrado! :)
          </p>
        </div>
      </div>

      <h3 className="subtitulo experiencia">EXPERIENCIA</h3>

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

      <h3 className="subtitulo tecnologias">TECNOLOGIAS</h3>
      <Carrete />
      <Form />
      <ChatToggle />
    </>
  );
}

export default Body;
