import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';

function CustomCard({ title, text, pathimg, projectUrl, document, technologies }) {
  return (
    <div className="carta">
      <Card className="custom-card">
        <div className="card-image-container">
          <Card.Img variant="top" src={pathimg} className="custom-card-img" />
        </div>
        <Card.Body className="card-body">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-text">{text}</Card.Text>
          <div className="tech-images">
            {technologies.map((tech, index) => (
              <img key={index} src={tech.pathImg} alt={tech.nombre} className="tech-icon" />
            ))}
          </div>
          <div className="button-group">
            <Button variant="outline-light" className="custom-button" href={projectUrl} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </Button>
            <Button variant="outline-light" className="custom-button" href={document} target="_blank" rel="noopener noreferrer">
              Documentación
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;


