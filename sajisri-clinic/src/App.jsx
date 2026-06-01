import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ClinicDescription from './components/ClinicDescription';
import ServicesSection from './components/ServicesSection';
import DoctorsSection from './components/DoctorsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ClinicDescription />
      <ServicesSection />
      <DoctorsSection />
      <ContactSection />
    </div>
  );
}

export default App;
