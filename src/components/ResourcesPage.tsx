import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-removebg-preview.png'
import './ResourcesPage.css';

const ResourcesPage: React.FC = () => {
  return (
    <div className="resources-page">
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
      <div className="resources-container">
        <div className="resource-card">
          <h2>Breathing Exercises</h2>
          <p>Learn simple breathing techniques to calm your mind and body.</p>
          <a href="https://youtube.com/shorts/_fqr8XNubEI?si=olZ9LkqiIkM2Eb6W" target="_blank" rel="noopener noreferrer">
  Try Now
</a>
        </div>
        <div className="resource-card">
          <h2>Meditation Guides</h2>
          <p>Explore guided meditations to reduce stress and improve focus.</p>
          <a href="https://positivepsychology.com/meditation-techniques-beginners/">Learn More</a>
        </div>
        <div className="resource-card">
          <h2>Mindfulness Articles</h2>
          <p>Read articles on how to practice mindfulness in your daily life.</p>
          <a href="https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/mindfulness-exercises/art-20046356">Learn More</a>
        </div>
        <div className="resource-card">
          <h2>Stress Management Tips</h2>
          <p>Discover effective strategies for managing stress and anxiety.</p>
          <a href="https://www.medicalnewstoday.com/articles/145855#management">Learn More</a>
        </div>
        <div className="resource-card">
          <h2>Good Sleep Benefits</h2>
          <p>Improve your sleep quality with these helpful tips and tricks.</p>
          <a href="https://newsinhealth.nih.gov/2021/04/good-sleep-good-health">Learn More</a>
        </div>
        <div className="resource-card">
          <h2>Healthy Eating Habits</h2>
          <p>Learn how nutrition can impact your mental well-being.</p>
          <a href="https://nafc.org/bhealth-blog/21-healthy-habits-to-improve-your-physical-and-mental-health/">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;