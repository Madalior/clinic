import React from 'react';
import { Shield, Users, HeartPulse, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './ClinicDescription.css';

export default function ClinicDescription() {
  const features = [
    {
      id: "01",
      icon: Shield,
      title: "Advanced Technology",
      description: "Equipped with state-of-the-art medical instruments and digital laboratories for rapid, precision diagnostics."
    },
    {
      id: "02",
      icon: Users,
      title: "Expert Specialists",
      description: "Our sanctuary is home to highly qualified medical consultants, surgeons, and specialists in diverse clinical fields."
    },
    {
      id: "03",
      icon: HeartPulse,
      title: "Patient-Centric Care",
      description: "We prioritize your recovery, comfort, and peace of mind through bespoke healthcare plans and 24/7 professional guidance."
    }
  ];

  const stats = [
    { value: "15+", label: "Specialists" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "12K+", label: "Happy Patients" },
    { value: "24/7", label: "Care Support" }
  ];

  return (
    <section className="description-section" id="about">
      <div className="description-container">
        
        {/* Left Column: Narrative Content */}
        <ScrollReveal className="description-content" delay="0s">
          <span className="section-tagline">The AAKASH Philosophy</span>
          <h2 className="description-title">Experience the Pinnacle of Modern Healthcare</h2>
          <p className="description-subtitle">
            At AAKASH Clinic, we believe in a holistic, empathetic approach to your well-being. 
            Our modern sanctuary combines clinical excellence with luxurious comfort, ensuring your path to 
            recovery is as calming as it is scientifically effective.
          </p>
          
          <div className="features-list">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.id} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <IconComponent size={20} strokeWidth={1.5} className="feature-icon" />
                  </div>
                  <div className="feature-text">
                    <div className="feature-header">
                      <span className="feature-index">{feature.id}</span>
                      <h3 className="feature-title">{feature.title}</h3>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
        
        {/* Right Column: Visuals and Metrics */}
        <ScrollReveal className="description-visuals" delay="0.2s">
          <div className="description-image-wrapper">
            <img src="/images/clinic_interior.png" alt="AAKASH Clinic Interior" className="clinic-image" />
            <div className="image-overlay-badge">
              <Award size={18} strokeWidth={2} />
              <span>Accredited Care Sanctuary</span>
            </div>
          </div>
          
          {/* Statistics Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
