import type { ReactNode } from 'react';
import './ProductGrid.css';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ProductGrid({ title, subtitle, children }: ProductGridProps) {
  return (
    <section className="product-grid-section container">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="product-grid">
        {children}
      </div>
    </section>
  );
}
