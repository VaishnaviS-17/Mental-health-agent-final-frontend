import { Link } from "react-router-dom";
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mh-footer">
      <div className="mh-footer-wrap">
        <div className="mh-footer-brand">
          <div className="mh-footer-title">Mindfull Haven</div>
          <p className="mh-footer-tag">A friendly space to share, reflect, and feel better.</p>
        </div>

        <nav className="mh-footer-links" aria-label="Footer">
         <Link to="/about" className="mh-link">About Us</Link>
         <Link to="/resources" className="mh-link">Resources</Link>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
        </nav>

        {/* No social profiles for now */}
      </div>

      <div className="mh-footer-meta">
        <p className="mh-footer-disclaimer">
          Mindfull Haven offers supportive guidance and self‑care tools. We do not provide
          medical advice, diagnosis, or prescriptions. If you are in crisis, seek local emergency help.
        </p>
        <p className="mh-footer-copy">© {new Date().getFullYear()} Mindfull Haven. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer


