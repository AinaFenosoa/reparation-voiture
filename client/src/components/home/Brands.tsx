import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Brands.css';

export default function Brands() {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logosRef.current && logosRef.current.children.length > 0) {
      gsap.fromTo(
        Array.from(logosRef.current.children),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power1.out',
        }
      );
    }
  }, []);

  return (
    <section className="brands container">
      <div ref={logosRef} className="brand-logos">
        <div className="brand-item brand-art-studio">art studio <span>DESIGN STUDIO</span></div>
        <div className="brand-item brand-n3">N<sup>3</sup></div>
        <div className="brand-item brand-vintage">VINTAGE <span>MOTORS</span></div>
        <div className="brand-item brand-old-chapter">OLD CHAPTER <span>SINCE 1992</span></div>
        <div className="brand-item brand-pure">pure <span>AUTO</span></div>
      </div>
    </section>
  );
}

