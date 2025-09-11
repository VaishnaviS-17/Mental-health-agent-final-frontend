import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-removebg-preview.png'
import './DiaryPage.css';

interface DiaryEntry {
  date: string;
  content: string;
}

const DiaryPage: React.FC = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState('');

  const handleSaveEntry = () => {
    if (currentEntry.trim() === '') return;

    const newEntry: DiaryEntry = {
      date: new Date().toLocaleDateString(),
      content: currentEntry,
    };

    setEntries([newEntry, ...entries]);
    setCurrentEntry('');
  };

  return (
    <div className="diary-page">
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
      <div className="diary-container">
        <div className="diary-entries-list">
          <h2>My Diary</h2>
          {entries.map((entry, index) => (
            <div key={index} className="diary-entry-item">
              <div className="diary-entry-date">{entry.date}</div>
              <div className="diary-entry-preview">
                {entry.content.substring(0, 50)}...
              </div>
            </div>
          ))}
        </div>
        <div className="diary-editor">
          <textarea
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            placeholder="Write your thoughts..."
          />
          <button onClick={handleSaveEntry}>Save Entry</button>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;