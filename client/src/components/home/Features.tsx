import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Features.css';

export default function Features() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (itemsRef.current.length > 0) {
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <section className="features container">
      <div 
        ref={(el) => { itemsRef.current[0] = el; }} 
        className="feature-item"
      >
        <div className="feature-icon">🚚</div>
        <div className="feature-text">
          <h4>Livraison Gratuite</h4>
          <p>Livraison gratuite à domicile pour toute commande supérieure à 100€</p>
        </div>
      </div>
      
      <div 
        ref={(el) => { itemsRef.current[1] = el; }} 
        className="feature-item"
      >
        <div className="feature-icon">🏅</div>
        <div className="feature-text">
          <h4>Produits de Qualité</h4>
          <p>Nous garantissons la meilleure qualité sur tous nos articles</p>
        </div>
      </div>

      <div 
        ref={(el) => { itemsRef.current[2] = el; }} 
        className="feature-item"
      >
        <div className="feature-icon">🎧</div>
        <div className="feature-text">
          <h4>Support Client 24/7</h4>
          <p>Assistance et support client réactifs pour votre entière satisfaction</p>
        </div>
      </div>
    </section>
  );
}

