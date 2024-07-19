import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    mensaje: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activa el spinner

    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      console.log('Form data submitted:', response.data);
      alert('Mensaje enviado con éxito!');
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsLoading(false); // Desactiva el spinner
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="p-4 rounded">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre Completo</label>
          <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="empresa" className="form-label">Nombre de la Empresa / Negocio</label>
          <input 
            type="text" 
            className="form-control" 
            id="empresa" 
            name="empresa" 
            value={formData.empresa} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea 
            className="form-control" 
            id="mensaje" 
            name="mensaje" 
            rows="4" 
            value={formData.mensaje} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
          {isLoading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
