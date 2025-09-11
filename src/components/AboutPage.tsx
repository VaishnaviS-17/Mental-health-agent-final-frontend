import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-removebg-preview.png'
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
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
      <div className="about-container">
        <h1>About Mindfull Haven</h1>
        <p>
          Mindfull Haven is a safe and supportive space designed to help you on your journey towards better mental well-being. 
          We believe that everyone deserves to feel heard, understood, and empowered.
        </p>
        <p>
          Our platform offers a variety of tools to support you, including a private diary to record your thoughts and feelings, 
          a friendly chatbot to talk to, and a collection of resources to help you learn more about mental health.
        </p>
        <p>
          Whether you're looking for a space to reflect, a listening ear, or helpful information, Mindfull Haven is here for you. 
          Your mental health matters, and we're committed to providing a compassionate and confidential environment where you can thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;