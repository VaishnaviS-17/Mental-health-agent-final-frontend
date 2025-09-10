import React, { useState } from 'react'
import Footer from './Footer'
import logo from '../assets/icon-removebg-preview.png'
import mentalHealthImage from '../assets/mental-health.png'
import chatSupport from '../assets/chat-support-removebg-preview.png'
import peaceImage from '../assets/peace.jpg'

const Homepage: React.FC = () => {
  const [resOpen, setResOpen] = useState(false)
  const [activeRes, setActiveRes] = useState<'box' | 'ground' | 'study' | null>(null)
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="mh-page">
      <header className="mh-navbar">
        <a href="#" className="mh-brand" onClick={handleLogoClick} aria-label="Go to top">
          <img src={logo} alt="Mindfull Haven logo" className="mh-logo" />
          <span className="mh-title">Mindfull Haven</span>
        </a>
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
          <p className="mh-eyebrow"><img src={chatSupport} alt="chat" className="mh-eyebrow-icon" /> Friendly chat support</p>
          <h1 className="mh-hero-title">
            Find calm, clarity, and support with
            <span className="mh-accent"> Mindfull Haven.</span>
          </h1>
          <p className="mh-hero-sub">
            A compassionate space for students and young adults to build healthy habits,
            reflect through guided journaling, and explore curated mental health resources.
          </p>
          <div className="mh-cta-row">
            <a href="#contact" className="mh-cta-primary">Get in Touch<span className="mh-arrow">→</span></a>
            <a href="#resources" className="mh-cta-secondary">Our Solutions</a>
          </div>
        </div>

        <div className="mh-hero-art">
          <div className="mh-hero-card">
            <img src={mentalHealthImage} alt="Mental health illustration" className="mh-hero-image" />
            <div className="mh-tag mh-tag-top-right">You’re heard</div>
            <div className="mh-tag mh-tag-bottom-left">Safe & Private</div>
          </div>
        </div>
      </main>

      {/* Key Features */}
      <section className="mh-features">
        <div className="mh-features-head">
          <h3>Key Features</h3>
          <p>Friendly, judgment-free conversations and practical guidance — no prescriptions.</p>
        </div>
        <ul className="mh-feature-grid">
          <li className="mh-feature-item">
            <span className="mh-badge mh-ic-chat" aria-hidden="true">💬</span>
            Empathetic, non‑judgmental chat support
          </li>
          <li className="mh-feature-item">
            <span className="mh-badge mh-ic-shield" aria-hidden="true">🛡️</span>
            Private & confidential — your space to open up
          </li>
          <li className="mh-feature-item">
            <span className="mh-badge mh-ic-book" aria-hidden="true">📘</span>
            Guided exercises, journaling prompts, and coping strategies
          </li>
          <li className="mh-feature-item">
            <span className="mh-badge mh-ic-clock" aria-hidden="true">⏰</span>
            24×7 access when you need someone to listen
          </li>
          <li className="mh-feature-item">
            <span className="mh-badge mh-ic-heart" aria-hidden="true">💙</span>
            Mood check‑ins and gentle habit building
          </li>
          <li className="mh-feature-item">
            <span className="mh-badge mh-ic-humane" aria-hidden="true">🤝</span>
            No medical prescriptions — just human‑centric support
          </li>
        </ul>
      </section>

      {/* Wave separator under banner */}
      <section className="mh-separator" aria-hidden="true">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,96 C240,24 480,24 720,72 C960,120 1200,120 1440,72 L1440,120 L0,120 Z" fill="#a7e6ff" opacity="0.8"/>
          <path d="M0,72 C240,0 480,0 720,48 C960,96 1200,96 1440,48 L1440,120 L0,120 Z" fill="#0a66c2" opacity="0.95"/>
        </svg>
      </section>

      {/* Conditions grid */}
      <section className="mh-conditions">
        <div className="mh-conditions-wrap">
          <h3 className="mh-cond-title">Mental health concerns we care for</h3>
          <p className="mh-cond-sub">Explore common concerns and how Mindfull Haven supports you—friendly guidance, not prescriptions.</p>
          <ul className="mh-cond-grid">
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🧠</span>
              <div className="mh-cond-head">Anxiety</div>
              <div className="mh-cond-text">Worry, racing thoughts, or restlessness—we offer grounding tips and gentle routines.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🌧️</span>
              <div className="mh-cond-head">Depression</div>
              <div className="mh-cond-text">Feeling low or stuck? Build small, doable steps and supportive check‑ins.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">😵‍💫</span>
              <div className="mh-cond-head">Stress</div>
              <div className="mh-cond-text">Academic or life pressure—learn brief resets, boundaries, and self‑care prompts.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🔁</span>
              <div className="mh-cond-head">OCD</div>
              <div className="mh-cond-text">Intrusive thoughts or rituals—practice compassionate awareness and paced strategies.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🌗</span>
              <div className="mh-cond-head">Bipolar</div>
              <div className="mh-cond-text">Mood ups/downs—track patterns and steady daily rhythms with support.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🔥</span>
              <div className="mh-cond-head">Burnout</div>
              <div className="mh-cond-text">Exhausted or numb? Recover with rest cues, pacing, and values‑aligned actions.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🌙</span>
              <div className="mh-cond-head">Sleep</div>
              <div className="mh-cond-text">Wind‑down rituals and simple habits to sleep better over time.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">✨</span>
              <div className="mh-cond-head">Self‑esteem</div>
              <div className="mh-cond-text">Build kind self‑talk and confidence through small, consistent wins.</div>
            </li>
            <li className="mh-cond-card">
              <span className="mh-cond-ico" aria-hidden="true">🫂</span>
              <div className="mh-cond-head">Loneliness</div>
              <div className="mh-cond-text">Feel heard and find connection—start with safe, compassionate chats.</div>
            </li>
          </ul>
        </div>
      </section>

      
      {/* Mood Check-In */}
      <section className="mh-mood">
        <h3 className="mh-mood-title">How is your mood today?</h3>
        <div className="mh-mood-row" role="group" aria-label="Select mood">
          <button className="mh-mood-btn" aria-label="Very Happy">😁</button>
          <button className="mh-mood-btn" aria-label="Happy">🙂</button>
          <button className="mh-mood-btn" aria-label="Neutral">😐</button>
          <button className="mh-mood-btn" aria-label="Sad">😔</button>
          <button className="mh-mood-btn" aria-label="Angry">😡</button>
        </div>
        <p className="mh-mood-hint">Your mood helps us suggest the right exercises and prompts.</p>
      </section>

      {/* Quick Actions */}
      <section className="mh-quick">
        <h3 className="mh-quick-title">What would you like to do next?</h3>
        <div className="mh-quick-grid">
          <a href="#contact" className="mh-quick-card">
            <span className="mh-quick-emoji" aria-hidden="true">💬</span>
            <div>
              <div className="mh-quick-head">Start a chat</div>
              <div className="mh-quick-sub">Share what’s on your mind—no judgement</div>
            </div>
          </a>
          <a href="#diary" className="mh-quick-card">
            <span className="mh-quick-emoji" aria-hidden="true">📝</span>
            <div>
              <div className="mh-quick-head">Write in your diary</div>
              <div className="mh-quick-sub">Guided prompts to reflect and unwind</div>
            </div>
          </a>
          <a href="#resources" className="mh-quick-card">
            <span className="mh-quick-emoji" aria-hidden="true">📚</span>
            <div>
              <div className="mh-quick-head">Explore resources</div>
              <div className="mh-quick-sub">Exercises, articles, and coping strategies</div>
            </div>
          </a>
        </div>
      </section>

      

      {/* Large visual section with image + overlaid copy */}
      <section className="mh-banner" style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 48, 71, 0.55), rgba(2, 48, 71, 0.15)), url(${peaceImage})`
      }}>
        <div className="mh-banner-content">
          <h3 className="mh-banner-title">Care that adapts to your life, your pace.</h3>
          <p className="mh-banner-sub">We meet you where you are. Mindfull Haven blends warm conversations with practical guidance rooted in your day‑to‑day life.</p>
          <div className="mh-banner-points">
            <div className="mh-point">
              <span>🧩</span>
              <div>
                <div className="mh-point-head">Support shaped around you</div>
                <div className="mh-point-text">Your mood and chats inform suggestions—no prescriptions, just what’s helpful.</div>
              </div>
            </div>
            <div className="mh-point">
              <span>🤝</span>
              <div>
                <div className="mh-point-head">Support those who support you</div>
                <div className="mh-point-text">Optionally share tips with a friend or mentor so they can encourage healthy habits.</div>
              </div>
            </div>
            <div className="mh-point">
              <span>🌐</span>
              <div>
                <div className="mh-point-head">Care in your language & context</div>
                <div className="mh-point-text">Simple, friendly wording and resources tailored for students and young adults.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="mh-resources">
        <div className="mh-res-wrap">
          <h3 className="mh-res-title">Featured resources</h3>
          <p className="mh-res-sub">Quick tools you can try right now—practical, calming, and student‑friendly.</p>
          <ul className="mh-res-list">
            <li className="mh-res-item">
              <span className="mh-res-ico" aria-hidden="true">🌬️</span>
              <div className="mh-res-content">
                <div className="mh-res-head">Box breathing (4‑4‑4‑4)</div>
                <p className="mh-res-text">Breathe in 4, hold 4, out 4, hold 4. Repeat 4 cycles to reset stress.</p>
              </div>
              <button className="mh-res-link" onClick={(e) => { e.preventDefault(); setActiveRes('box'); setResOpen(true); }}>Start</button>
            </li>
            <li className="mh-res-item">
              <span className="mh-res-ico" aria-hidden="true">🖐️</span>
              <div className="mh-res-content">
                <div className="mh-res-head">5‑4‑3‑2‑1 Grounding</div>
                <p className="mh-res-text">Notice senses to come back to the present moment calmly.</p>
              </div>
              <button className="mh-res-link" onClick={(e) => { e.preventDefault(); setActiveRes('ground'); setResOpen(true); }}>Try it</button>
            </li>
            <li className="mh-res-item">
              <span className="mh-res-ico" aria-hidden="true">📚</span>
              <div className="mh-res-content">
                <div className="mh-res-head">Study stress toolkit</div>
                <p className="mh-res-text">Focus timers, break ideas, and kind prompts for exam weeks.</p>
              </div>
              <button className="mh-res-link" onClick={(e) => { e.preventDefault(); setActiveRes('study'); setResOpen(true); }}>Open</button>
            </li>
          </ul>
        </div>
      </section>

      {/* Resource Modal */}
      {resOpen && (
        <div className="mh-modal" role="dialog" aria-modal="true" aria-label="Resource">
          <div className="mh-modal-card">
            <button className="mh-modal-close" onClick={() => setResOpen(false)}>✕</button>
            {activeRes === 'box' && (
              <div>
                <h4>Box breathing (4‑4‑4‑4)</h4>
                <ol>
                  <li>Inhale through your nose for 4 seconds</li>
                  <li>Hold for 4 seconds</li>
                  <li>Exhale through your mouth for 4 seconds</li>
                  <li>Hold for 4 seconds</li>
                </ol>
                <p>Repeat 4 cycles. Sit comfortably, shoulders relaxed. Use daily to reduce stress.</p>
              </div>
            )}
            {activeRes === 'ground' && (
              <div>
                <h4>5‑4‑3‑2‑1 Grounding</h4>
                <ol>
                  <li>5 things you can see</li>
                  <li>4 things you can touch</li>
                  <li>3 things you can hear</li>
                  <li>2 things you can smell</li>
                  <li>1 thing you can taste</li>
                </ol>
                <p>Move slowly. Breathe naturally. Return to any step as needed.</p>
              </div>
            )}
            {activeRes === 'study' && (
              <div>
                <h4>Study stress toolkit</h4>
                <ul>
                  <li>Use a 25‑min focus + 5‑min break cycle (Pomodoro)</li>
                  <li>Stand, stretch, sip water each break</li>
                  <li>Write one kind sentence to yourself before resuming</li>
                </ul>
                <p>Tip: mute notifications and put your phone out of reach during focus blocks.</p>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Homepage

