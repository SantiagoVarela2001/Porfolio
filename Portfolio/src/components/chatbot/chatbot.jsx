import React, { useState } from 'react';
import axios from 'axios';
import "../chatbot/chatbot.css"

const apiBaseURL = "https://backend-portfolio-latest.onrender.com";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleQuestion = async (question) => {
    try {
      const response = await axios.post(`${apiBaseURL}/api/chatbot`, { question });
      setMessages([...messages, { question, answer: response.data.answer }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p className='chat-yo'><strong>Yo:</strong> {msg.question}</p>
            <p className='chat-santi-bot'><strong>Santi Bot:</strong> {msg.answer}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => handleQuestion('¿Qué tecnología te apasiona?')}>¿Qué tecnología te apasiona?</button>
        <button onClick={() => handleQuestion('¿Tienes experiencia laboral?')}>¿Tienes experiencia laboral?</button>
        <button onClick={() => handleQuestion('¿Por qué debo elegirte?')}>¿Por qué debo elegirte?</button>
      </div>

    </div>
  );
};

export default Chatbot;



