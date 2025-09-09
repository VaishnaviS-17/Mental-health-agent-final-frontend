import React from 'react'
import logo from '../assets/Premium_Vector___Mental_health_logo.png'

const Homepage: React.FC = () => {
  return (
    <div className="mh-page">
      <header className="mh-navbar">
        <div className="mh-brand">
          <img src={logo} alt="Mindfull Haven logo" className="mh-logo" />
          <span className="mh-title">Mindfull Haven</span>
        </div>
        <nav className="mh-nav">
          <a href="#about" className="mh-link">About Us</a>
          <a href="#diary" className="mh-link">Diary Writing</a>
          <a href="#resources" className="mh-link">Resources</a>
          <a href="#contact" className="mh-link">Contact Us</a>
          <a href="#login" className="mh-btn">Login</a>
        </nav>
      </header>

      <main className="mh-hero">
        <div className="mh-hero-copy">
          <p className="mh-breadcrumb">Home</p>
          <h1 className="mh-hero-title">
            Find calm, clarity, and support with
            <span className="mh-accent"> Mindfull Haven.</span>
          </h1>
          <p className="mh-hero-sub">
            A compassionate space for students and young adults to build healthy habits,
            reflect through guided journaling, and explore curated mental health resources.
          </p>
          <div className="mh-cta-row">
            <a href="#contact" className="mh-cta-primary">Get In Touch</a>
            <a href="#resources" className="mh-cta-secondary">Our Solutions</a>
          </div>
        </div>

        <div className="mh-hero-art" aria-hidden="true">
          <div className="mh-blob mh-blob-1" />
          <div className="mh-blob mh-blob-2" />
          <div className="mh-grid" />
        </div>
      </main>

      <section id="about" className="mh-section">
        <h2>About Us</h2>
        <p>
          We partner with students, institutions, and communities to make mental wellness
          approachable. Mindfull Haven blends easy daily practices with access to credible
          resources so you can grow at your own pace.
        </p>
      </section>

      <section id="diary" className="mh-section">
        <h2>Diary Writing</h2>
        <p>
          Create a private, reflective diary. Build consistency with gentle prompts, mood
          check-ins, and insights over time.
        </p>
      </section>

      <section id="resources" className="mh-section">
        <h2>Resources</h2>
        <p>
          Explore articles, exercises, and helplines curated by professionals. Learn small
          steps that lead to lasting change.
        </p>
      </section>

      <section id="contact" className="mh-section">
        <h2>Contact Us</h2>
        <p>
          Have a question or need support? Reach out and we will get back to you soon.
        </p>
      </section>
    </div>
  )
}

export default Homepage

