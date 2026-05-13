import { useState, useEffect } from 'react';
import './EventPopup.css';

const PHONE_NUMBER = '+917396957557';
const WHATSAPP_LINK = `https://wa.me/917396957557?text=Hi%20Anni%20Abroad!%20I%20want%20to%20register%20for%20the%20Education%20Fair%202026`;
const CALL_LINK = `tel:${PHONE_NUMBER}`;

const countries = [
  { code: '🇺🇸', name: 'USA' },
  { code: '🇦🇪', name: 'UAE' },
  { code: '🇬🇧', name: 'UK' },
  { code: '🇦🇺', name: 'AUS' },
  { code: '🇲🇹', name: 'MT' },
  { code: '🇮🇪', name: 'IE' },
  { code: '🇪🇸', name: 'ESP' },
  { code: '🇬🇪', name: 'GA' },
  { code: '🇨🇭', name: 'CH' },
  { code: '🇫🇷', name: 'FR' },
  { code: '🇩🇪', name: 'DE' },
];

const highlights = [
  'Free IELTS Training',
  'Zero Processing Fee',
  'Scholarship & Profile Guidance',
  'Education Loan Assistance',
  'Spot Assessment & Guidance',
  'Career Counselling by Experts',
  'Application & Visa Support',
];

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setIsAnimating(true), 50);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 400);
  };

  const handleRegister = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const handleMoreEvents = () => {
    window.open(CALL_LINK, '_self');
  };

  if (!isOpen) return null;

  return (
    <div
      className={`ep-overlay ${isAnimating ? 'ep-overlay--active' : ''}`}
      onClick={handleClose}
      id="event-popup-overlay"
    >
      <div
        className={`ep-modal ${isAnimating ? 'ep-modal--active' : ''}`}
        onClick={(e) => e.stopPropagation()}
        id="event-popup-modal"
      >
        {/* Close button */}
        <button className="ep-close" onClick={handleClose} aria-label="Close popup" id="event-popup-close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Decorative top accent */}
        <div className="ep-accent-bar" />

        {/* Header */}
        <div className="ep-header">
          <span className="ep-badge">🎓 Vijayawada's Biggest</span>
          <h2 className="ep-title">Education Fair 2026</h2>
          <p className="ep-subtitle">
            Register &amp; get a chance for <strong>FREE Education</strong> for <span className="ep-highlight-text">3 Lucky Winners!</span>
          </p>
        </div>

        {/* Event details strip */}
        <div className="ep-details-strip">
          <div className="ep-detail-item">
            <span className="ep-detail-icon">📅</span>
            <div>
              <span className="ep-detail-label">Date</span>
              <span className="ep-detail-value">Friday, 29 May 2026</span>
            </div>
          </div>
          <div className="ep-detail-item">
            <span className="ep-detail-icon">📍</span>
            <div>
              <span className="ep-detail-label">Venue</span>
              <span className="ep-detail-value">Lemon Tree Premier, Vijayawada</span>
            </div>
          </div>
          <div className="ep-detail-item">
            <span className="ep-detail-icon">🕙</span>
            <div>
              <span className="ep-detail-label">Time</span>
              <span className="ep-detail-value">10:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Scholarship banner */}
        <div className="ep-scholarship-banner">
          <span className="ep-scholarship-icon">🏆</span>
          <span>Win scholarships upto <strong>₹10 Lakhs</strong></span>
        </div>

        {/* Countries */}
        <div className="ep-countries">
          <p className="ep-countries-title">Meet Global University Representatives From</p>
          <div className="ep-flags-row">
            {countries.map((c) => (
              <div key={c.name} className="ep-flag-chip">
                <span className="ep-flag-emoji">{c.code}</span>
                <span className="ep-flag-name">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="ep-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="ep-highlight-item">
              <span className="ep-check">✓</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="ep-cta-group">
          <button className="ep-btn ep-btn-primary" onClick={handleRegister} id="event-popup-register">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.337 0-4.498-.793-6.222-2.122l-.355-.283-3.68 1.233 1.233-3.68-.283-.355A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            Register Now
          </button>
          <button className="ep-btn ep-btn-secondary" onClick={handleMoreEvents} id="event-popup-more-events">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Know About More Events
          </button>
        </div>

        {/* Contact info */}
        <div className="ep-contact-bar">
          <a href={CALL_LINK} className="ep-contact-link">
            📞 +91 7396957557
          </a>
          <span className="ep-contact-divider">|</span>
          <a href="https://www.anniabroad.co" target="_blank" rel="noopener noreferrer" className="ep-contact-link">
            🌐 www.anniabroad.co
          </a>
        </div>
      </div>
    </div>
  );
}
