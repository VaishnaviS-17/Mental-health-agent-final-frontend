import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFeatherAlt } from 'react-icons/fa';
import logo from '../assets/icon-removebg-preview.png'
import './Chatpage.css';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is a simulated response.', sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-page">
      <header className="mh-navbar">
        <div className="mh-brand">
          <img src={logo} alt="Mindfull Haven logo" className="mh-logo" />
          <span className="mh-title">Mindfull Haven</span>
        </div>
        <nav className="mh-nav">
          <Link to="/" className="mh-link">Home</Link>
          <Link to="/about" className="mh-link">About Us</Link>
          <Link to="/diary" className="mh-link">Diary Writing</Link>
          <Link to="/resources" className="mh-link">Resources</Link>
          <a href="/#contact" className="mh-link">Contact Us</a>
          <a href="/#login" className="mh-btn">Login</a>
        </nav>
      </header>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
  <div key={index} className={`message-wrapper message-${message.sender}`}>
    {message.sender === 'bot' ? (
      <>
        <div className="bot-icon"><FaFeatherAlt /></div>
        <div className="message bot">{message.text}</div>
      </>
    ) : (
      <div className="message user">{message.text}</div>
    )}
  </div>
))}

        </div>
        <div className="chat-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>&#10148;</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;