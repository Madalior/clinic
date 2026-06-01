import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = '0s', style = {} }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); // trigger animation only once
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-element ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: delay }}
    >
      {children}
    </div>
  );
}
