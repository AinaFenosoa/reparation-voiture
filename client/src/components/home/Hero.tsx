import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    tl.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2 }
    )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.7'
      )
      .fromTo(
        btnRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1 },
        '-=0.6'
      );
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p ref={subtitleRef} className="hero-subtitle">NOUVELLE TECHNOLOGIE & PERFORMANCE</p>
          <h1 ref={titleRef} className="hero-title">DES MOTEURS PUISSANTS ET INNOVANTS POUR VOTRE VÉHICULE</h1>
          <button ref={btnRef} className="btn-white">DÉCOUVRIR MAINTENANT</button>
        </div>
        <div className="hero-image-placeholder">
          {/* Background image configured in CSS */}
        </div>
      </div>
    </section>
  );
}

