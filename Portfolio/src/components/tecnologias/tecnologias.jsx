import React from 'react';
import "../tecnologias/tecnologias.css";

const Tecnologias = ({ nombreTecnologias, listaTecnologias }) => {
  return (
    <div className="tecnologias">
      <h5 className="nombreTecnologias">{nombreTecnologias}</h5>
      <div className="tecnologias-container">
        {listaTecnologias.map((tecnologia, index) => (
          <div key={index} className="tecnologia-item">
            <img 
              src={tecnologia.pathImg} 
              alt={tecnologia.nombre} 
              className="tecnologia-img" 
            />
            <p className="tecnom">{tecnologia.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
