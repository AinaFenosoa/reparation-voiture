import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import './ProductGrid.css';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ProductGrid({ title, subtitle, children }: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(
        Array.from(gridRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, [children]);

  return (
    <section className="product-grid-section container">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div ref={gridRef} className="product-grid">
        {children}
      </div>
    </section>
  );
}

