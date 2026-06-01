import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.doctor || !formData.date) {
      alert("Please fill in all details to request an appointment.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Column: Clinic Contact Details */}
        <ScrollReveal className="contact-info-panel" delay="0s">
          <span className="contact-tagline">Connect With Us</span>
          <h2 className="contact-title">Visit Our Sanctuary</h2>
          <p className="contact-subtitle">
            We are here to support your wellness journey. Reach out to coordinate your consultation or clinical visit.
          </p>

          <div className="contact-details">
            <div className="detail-row">
              <div className="detail-icon-box">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div className="detail-text">
                <h4>Clinic Location</h4>
                <p>128 Healthcare Parkway, Suite A, Medical Center</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-icon-box">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div className="detail-text">
                <h4>Telephone Contact</h4>
                <p>+1 (800) 555-0199 / +1 (800) 555-0198</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-icon-box">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div className="detail-text">
                <h4>Support Email</h4>
                <p>care@aakashclinic.com / bookings@aakashclinic.com</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-icon-box">
                <Clock size={20} strokeWidth={1.5} />
              </div>
              <div className="detail-text">
                <h4>Opening Hours</h4>
                <p>Mon - Fri: 8:00 AM - 7:00 PM <br /> Sat: 9:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Appointment Form */}
        <ScrollReveal className="booking-panel" delay="0.2s">
          {isSubmitted ? (
            <div className="booking-success">
              <div className="success-icon-wrapper">
                <Calendar size={36} className="success-icon" />
              </div>
              <h3 className="success-title">Appointment Requested</h3>
              <p className="success-message">
                Thank you, <strong>{formData.name}</strong>. Your request to meet with <strong>{formData.doctor}</strong> on <strong>{formData.date}</strong> has been logged. 
                Our coordinator will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
              </p>
              <button 
                className="btn-new-booking"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', doctor: '', date: '' });
                }}
              >
                Schedule Another Visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <h3 className="form-header-title">Request Appointment</h3>
              <p className="form-header-subtitle">Select a specialist and preferred date below.</p>
              
              <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 (555) 012-3456"
                    required
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="doctor">Choose Specialist</label>
                  <select 
                    id="doctor"
                    name="doctor" 
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Alex (Cardiology)">Dr. Alex (Cardiology)</option>
                    <option value="Dr. Sarah (Neurology)">Dr. Sarah (Neurology)</option>
                    <option value="Dr. Michael (Pediatrics)">Dr. Michael (Pediatrics)</option>
                  </select>
                </div>
                
                <div className="input-group">
                  <label htmlFor="date">Appointment Date</label>
                  <input 
                    type="date" 
                    id="date"
                    name="date" 
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-submit-booking">Submit Request</button>
            </form>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
}
