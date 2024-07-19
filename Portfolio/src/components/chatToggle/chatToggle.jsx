import React, { useState } from 'react';
import Chatbot from '../chatbot/chatbot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../chatToggle/chatToggle.css"

const ChatToggle = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className="chat-widget">
      <div className="chat-toggle" onClick={toggleChat}>
        <i className={`fas ${isChatVisible ? 'fa-times' : 'fa-comment'}`}></i>
      </div>
      {isChatVisible && (
        <div className="chat-container">
          <div className="chat-header" onClick={toggleChat}>
            CHATBOT
          </div>
          <div className="chat-body">
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatToggle;

