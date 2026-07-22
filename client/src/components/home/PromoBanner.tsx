import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './PromoBanner.css';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  code?: string;
  dark?: boolean;
}

export default function PromoBanner({
  title,
  subtitle,
  buttonText = 'DÉCOUVRIR',
  buttonLink = '#',
  image,
  code,
  dark = true
}: PromoBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div ref={bannerRef} className={`promo-banner ${dark ? 'promo-dark' : 'promo-light'}`}>
      <div className="promo-content">
        {code && <p className="promo-code">Code <strong>{code}</strong> pour réduction de la décennie</p>}
        <h2 className="promo-title">{title}</h2>
        <a href={buttonLink} className={dark ? 'btn-primary' : 'btn-white'}>{buttonText}</a>
        {subtitle && <p className="promo-subtitle">{subtitle}</p>}
      </div>
      {image && (
        <div className="promo-image-container">
          <img src={image} alt={title} className="promo-image" />
        </div>
      )}
    </div>
  );
}

