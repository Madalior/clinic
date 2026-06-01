import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Heart, 
  Activity, 
  HeartPulse, 
  Brain, 
  Sparkles, 
  Zap, 
  Baby, 
  Smile, 
  Sun,
  Pill,
  Stethoscope,
  Syringe,
  Thermometer
} from 'lucide-react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    firstName: "ALEX",
    doctorName: "Dr. Alex",
    specialty: "CARDIOLOGY",
    image: "/images/doctor_1.png",
    bgColor: "#4A1525", // Dark red
    textColor: "#FBD5D5",
    description: "Explore a realm of heart wellness with Dr. Alex, our leading expert in advanced cardiovascular solutions and preventative cardiac care.",
    floatingItems: [
      { id: 1, Icon: Heart, size: 48, top: '22%', left: '16%', delay: '0s', rotation: '15deg', zIndex: 3 },
      { id: 2, Icon: Activity, size: 54, top: '65%', left: '20%', delay: '1.5s', rotation: '-10deg', zIndex: 1, blur: true },
      { id: 3, Icon: Stethoscope, size: 46, top: '30%', right: '12%', delay: '0.5s', rotation: '40deg', zIndex: 3 },
      { id: 4, Icon: HeartPulse, size: 44, top: '18%', right: '22%', delay: '0.8s', rotation: '25deg', zIndex: 1 },
      { id: 5, Icon: Pill, size: 36, top: '50%', left: '10%', delay: '2s', rotation: '-30deg', zIndex: 3 },
      { id: 6, Icon: Heart, size: 32, top: '55%', right: '24%', delay: '2.5s', rotation: '-5deg', zIndex: 1 }
    ]
  },
  {
    id: 2,
    firstName: "SARAH",
    doctorName: "Dr. Sarah",
    specialty: "NEUROLOGY",
    image: "/images/doctor_3.png",
    bgColor: "#0F3A4A", // Dark teal/blue
    textColor: "#C8E6C9",
    description: "Experience premium neurological care with Dr. Sarah, specializing in cognitive recovery, brain health, and advanced therapies.",
    floatingItems: [
      { id: 1, Icon: Brain, size: 50, top: '20%', left: '15%', delay: '0.5s', rotation: '-15deg', zIndex: 3 },
      { id: 2, Icon: Sparkles, size: 38, top: '68%', left: '24%', delay: '1.8s', rotation: '10deg', zIndex: 1 },
      { id: 3, Icon: Syringe, size: 40, top: '32%', right: '14%', delay: '1s', rotation: '15deg', zIndex: 3 },
      { id: 4, Icon: Zap, size: 42, top: '24%', right: '20%', delay: '1.2s', rotation: '30deg', zIndex: 1 },
      { id: 5, Icon: Pill, size: 34, top: '55%', left: '12%', delay: '2.2s', rotation: '45deg', zIndex: 3 },
      { id: 6, Icon: Brain, size: 32, top: '52%', right: '16%', delay: '2.7s', rotation: '-20deg', zIndex: 1, blur: true }
    ]
  },
  {
    id: 3,
    firstName: "MICHAEL",
    doctorName: "Dr. Michael",
    specialty: "PEDIATRICS",
    image: "/images/doctor_2.png",
    bgColor: "#3A1C4A", // Dark purple
    textColor: "#E1BEE7",
    description: "Provide the best care for your child with Dr. Michael, dedicated to comprehensive pediatric health and developmental support.",
    floatingItems: [
      { id: 1, Icon: Baby, size: 46, top: '20%', left: '18%', delay: '0.2s', rotation: '12deg', zIndex: 3 },
      { id: 2, Icon: Smile, size: 38, top: '64%', left: '15%', delay: '1.6s', rotation: '-15deg', zIndex: 1 },
      { id: 3, Icon: Thermometer, size: 42, top: '34%', right: '12%', delay: '0.8s', rotation: '-10deg', zIndex: 3 },
      { id: 4, Icon: Sun, size: 52, top: '26%', right: '16%', delay: '1s', rotation: '20deg', zIndex: 1 },
      { id: 5, Icon: Pill, size: 32, top: '52%', left: '10%', delay: '2.4s', rotation: '25deg', zIndex: 3 },
      { id: 6, Icon: Smile, size: 34, top: '56%', right: '24%', delay: '2.9s', rotation: '5deg', zIndex: 1, blur: true }
    ]
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Minimum swipe/drag distance in pixels to trigger switch
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Automatically scroll slides every 6 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const getSlideClass = (index) => {
    if (index === currentSlide) return 'active';
    if (currentSlide === 0 && index === slides.length - 1) return 'prev';
    if (currentSlide === slides.length - 1 && index === 0) return 'next';
    if (index < currentSlide) return 'prev';
    return 'next';
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse drag handlers for desktop swipe feel
  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return; // ignore clicks on links/buttons
    if (e.button !== 0) return; // left click only
    setDragEnd(null);
    setDragStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !dragStart || !dragEnd) {
      setIsDragging(false);
      return;
    }
    const distance = dragStart - dragEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const active = slides[currentSlide];

  return (
    <section 
      className={`hero-section transition-colors ${isDragging ? 'grabbing' : ''}`} 
      style={{ backgroundColor: active.bgColor, color: active.textColor }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-container">
        {/* Background Large Text */}
        <div className="bg-text-container" key={active.id}>
           <h1 
             className="bg-text" 
             style={{ 
               color: active.textColor,
               '--bg-text-size': active.firstName.length > 5 ? '16vw' : '22vw'
             }}
           >
             {active.firstName.split('').map((char, index) => (
               <span 
                 key={index} 
                 className="bg-text-letter" 
                 style={{ animationDelay: `${index * 0.05}s` }}
               >
                 {char}
               </span>
             ))}
           </h1>
           <h2 className="bg-subtext" style={{ color: active.textColor }}>
             {active.specialty}
           </h2>
        </div>

        {/* Floating Medical Elements */}
        <div className="floating-elements-container" key={`float-${active.id}`}>
          {active.floatingItems.map((item, idx) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={item.id}
                className={`floating-icon float-anim-${idx} ${item.blur ? 'blur-effect' : ''}`}
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  zIndex: item.zIndex,
                  animationDelay: item.delay,
                  transform: `rotate(${item.rotation || '0deg'})`
                }}
              >
                <IconComponent size={item.size} strokeWidth={1.2} />
              </div>
            );
          })}
        </div>

        {/* Doctor Image */}
        <div className="image-container">
          {slides.map((slide, index) => (
            <img 
              key={slide.id}
              src={slide.image} 
              alt={slide.doctorName}
              className={`doctor-image ${getSlideClass(index)}`}
              draggable="false"
            />
          ))}
        </div>
      </div>

      {/* Curved White Footer */}
      <div className="hero-footer">
        <div className="curve-container">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="curve-svg">
            <path d="M0,80 C360,20 1080,20 1440,80 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="footer-content">
          <div className="footer-left">
            <p className="doctor-description" key={`desc-${active.id}`}>{active.description}</p>
          </div>
          <div className="footer-center">
            <button 
              className="btn-book-appointment" 
              style={{ backgroundColor: active.bgColor }}
              onClick={() => alert(`Booking appointment with ${active.doctorName}...`)}
            >
              Book Appointment
            </button>
          </div>
          <div className="footer-right">
            <div className="footer-nav">
              <button onClick={prevSlide} className="nav-arrow" aria-label="Previous Doctor">
                <ArrowLeft size={20} />
              </button>
              <div className="slide-counter">
                <span className="current-index">0{currentSlide + 1}</span>
                <span className="total-slides">/0{slides.length}</span>
              </div>
              <button onClick={nextSlide} className="nav-arrow" aria-label="Next Doctor">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
