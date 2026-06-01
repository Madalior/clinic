import React from 'react';
import { Heart, Brain, Smile, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './ServicesSection.css';

export default function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology Care",
      desc: "Advanced screening, ECG testing, blood pressure regulation, and personalized heart disease preventative treatments.",
      color: "#4A1525" // Matches Dr. Alex's theme color
    },
    {
      icon: Brain,
      title: "Neurology Care",
      desc: "Comprehensive diagnostic scans, cognitive recovery plans, sleep analysis, and neurodegenerative symptom management.",
      color: "#0F3A4A" // Matches Dr. Sarah's theme color
    },
    {
      icon: Smile,
      title: "Pediatric Wellness",
      desc: "Developmental health checkups, infant vaccinations, child health consulting, and emergency pediatric counseling.",
      color: "#3A1C4A" // Matches Dr. Michael's theme color
    },
    {
      icon: Activity,
      title: "Diagnostics & Labs",
      desc: "High-resolution ultrasound, blood panel checks, general physical diagnostics, and health wellness certificates.",
      color: "#2c3e50"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        <ScrollReveal className="services-header" delay="0s">
          <span className="services-tagline">Clinical Specialties</span>
          <h2 className="services-title">World-Class Medical Specialties</h2>
          <p className="services-subtitle">
            We offer expert diagnostics and treatments across specialized medical sectors, combining clinical precision with empathetic guidance.
          </p>
        </ScrollReveal>

        <div className="services-list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const indexStr = `0${index + 1}`;
            return (
              <ScrollReveal 
                key={index} 
                className="service-row"
                delay={`${index * 0.1}s`}
                style={{ 
                  '--service-accent': service.color,
                  '--service-accent-glow': `${service.color}26`
                }}
              >
                <div className="service-row-number">{indexStr}</div>
                <div className="service-row-header">
                  <div className="service-icon-box">
                    <IconComponent size={22} strokeWidth={1.5} className="service-icon" />
                  </div>
                  <h3 className="service-row-title">{service.title}</h3>
                </div>
                <p className="service-row-desc">{service.desc}</p>
                <div className="service-row-action">
                  <a href="#contact" className="service-learn-more">
                    <span className="cta-text">Book Consultation</span>
                    <span className="arrow">➔</span>
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
