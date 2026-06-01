import React from 'react';
import ScrollReveal from './ScrollReveal';
import './DoctorsSection.css';

export default function DoctorsSection() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Alex",
      specialty: "Cardiology Specialist",
      role: "Chief Cardiologist",
      image: "/images/doctor_1.png",
      color: "#4A1525", // Dark red
      bgTint: "#4A1525" // Matching dark wine red backdrop
    },
    {
      id: 2,
      name: "Dr. Sarah",
      specialty: "Neurology Specialist",
      role: "Senior Neurologist",
      image: "/images/doctor_3.png", // Correct female image
      color: "#0F3A4A", // Dark teal
      bgTint: "#0F3A4A" // Matching dark teal backdrop
    },
    {
      id: 3,
      name: "Dr. Michael",
      specialty: "Pediatrics Specialist",
      role: "Lead Pediatrician",
      image: "/images/doctor_2.png", // Correct male image
      color: "#3A1C4A", // Dark purple
      bgTint: "#3A1C4A" // Matching dark purple backdrop
    }
  ];

  return (
    <section className="doctors-section" id="doctors">
      <div className="doctors-container">
        
        <ScrollReveal className="doctors-header" delay="0s">
          <span className="doctors-tagline">Clinical Leaders</span>
          <h2 className="doctors-title">Meet Our Medical Specialists</h2>
          <p className="doctors-subtitle">
            Our team comprises board-certified practitioners holding extensive experience in advanced diagnostics and surgical care.
          </p>
        </ScrollReveal>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <ScrollReveal 
              key={doctor.id} 
              className="doctor-card"
              delay={`${index * 0.15}s`}
              style={{ 
                '--doctor-accent': doctor.color,
                '--doctor-accent-glow': `${doctor.color}26`
              }}
            >
              {/* Doctor Portrait backdrop */}
              <div 
                className="doctor-card-visual" 
                style={{ backgroundColor: doctor.bgTint }}
              >
                <span className="doctor-role-badge">{doctor.role}</span>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="doctor-card-img" 
                  draggable="false"
                />
              </div>
              
              <div className="doctor-card-info">
                <span className="doctor-card-specialty" style={{ color: doctor.color }}>{doctor.specialty}</span>
                <h3 className="doctor-card-name">{doctor.name}</h3>
                <p className="doctor-card-bio">
                  Highly dedicated to developing customized, preventative wellness plans to support your journey to health.
                </p>
                <a 
                  href="#contact" 
                  className="btn-book-doctor"
                  style={{ '--btn-doctor-accent': doctor.color }}
                >
                  Schedule Visit
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
