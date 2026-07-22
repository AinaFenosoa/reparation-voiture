import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Newsletter.css';

export default function Newsletter() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className="newsletter container">
      <div ref={boxRef} className="newsletter-box">
        <div className="newsletter-badge">
          <span className="badge-icon">⚡</span>
          <span>OFFRE SPÉCIALE D'ABONNEMENT</span>
        </div>
        
        <h2 className="newsletter-title">
          OBTENEZ UNE <span className="highlight-text">RÉDUCTION IMMÉDIATE</span> EN REJOINANT NOTRE CLUB
        </h2>
        
        <p className="newsletter-desc">
          Abonnez-vous à notre newsletter pour recevoir toutes les dernières nouveautés, offres exclusives et promotions réservées aux membres.
        </p>
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper">
            <span className="mail-icon">✉️</span>
            <input type="email" placeholder="Entrez votre adresse e-mail..." required />
          </div>
          <button type="submit" className="btn-modern">
            <span>S'ABONNER</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}


