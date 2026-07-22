import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import flashTires from '../../assets/flash-tires.png';
import './FlashDeals.css';

export default function FlashDeals() {
  const tireImgRef = useRef<HTMLImageElement>(null);
  const countdownItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {

    // Animation d'entrée des cases du compte à rebours
    if (countdownItemsRef.current.length > 0) {
      gsap.fromTo(
        countdownItemsRef.current.filter(Boolean),
        { scale: 0.7, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, []);

  return (
    <section className="flash-deals">
      <div className="container flash-deals-container">
        <div className="flash-deals-image">
          <img 
            ref={tireImgRef} 
            src={flashTires} 
            alt="Pneus Ventes Flash" 
            className="flash-tires-img" 
          />
        </div>
        
        <div className="flash-deals-content">
          <h2 className="section-title">VENTES FLASH</h2>
          <p className="flash-subtitle">DÉPÊCHEZ-VOUS ! OBTENEZ 25% DE RÉDUCTION</p>
          <button className="btn-primary">PROFITER DE L'OFFRE</button>
          
          <div className="countdown">
            <div 
              ref={(el) => { countdownItemsRef.current[0] = el; }} 
              className="countdown-item"
            >
              <span className="number">20</span>
              <span className="label">Jours</span>
            </div>
            <div 
              ref={(el) => { countdownItemsRef.current[1] = el; }} 
              className="countdown-item"
            >
              <span className="number">13</span>
              <span className="label">Heures</span>
            </div>
            <div 
              ref={(el) => { countdownItemsRef.current[2] = el; }} 
              className="countdown-item"
            >
              <span className="number">24</span>
              <span className="label">Minutes</span>
            </div>
            <div 
              ref={(el) => { countdownItemsRef.current[3] = el; }} 
              className="countdown-item"
            >
              <span className="number">48</span>
              <span className="label">Secondes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

