import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percentage = (window.scrollY / totalHeight) * 100;
        setScrollPercent(percentage);
      }
    };
    
    // Trigger once initially
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }}></div>
      <div className="header-container">
        <a href="#" className="logo">AAKASH Clinic</a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact" className="btn-contact btn-contact-desktop">Contact Us</a>
          <a href="tel:+18005550199" className="btn-contact btn-contact-mobile" aria-label="Call Clinic">
            <Phone size={18} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  );
}
