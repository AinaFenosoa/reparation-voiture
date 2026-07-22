import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import modernHeadlightImg from '../../assets/modern-headlight.png';
import modernEngineImg from '../../assets/modern-engine.png';
import modernDashboardImg from '../../assets/modern-dashboard.png';
import './FeatureBanners.css';

// Structure de données pour les bannières avec les nouvelles images générées
const bannerData = [
  {
    id: 1,
    type: 'dark',
    tag: 'Nouveauté 2024',
    title: 'Phares Performants & Design',
    link: '/shop',
    img: modernHeadlightImg,
  },
  {
    id: 2,
    type: 'red',
    tag: 'Nouveau Design 2024',
    title: 'Capots Moteur Exclusifs',
    link: '/shop',
    img: modernEngineImg,
  },
  {
    id: 3,
    type: 'dark',
    tag: 'Intérieur Moderne',
    title: 'Tableaux de Bord Élégants',
    link: '/shop',
    img: modernDashboardImg,
  },
];

export default function FeatureBanners() {
  const bannersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animation d'entrée GSAP (Staggered Fade-in)
    if (bannersRef.current.length > 0) {
      gsap.fromTo(
        bannersRef.current.filter(Boolean),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2, // Délai entre chaque bannière
          ease: 'power3.out', // Ease plus fluide
        }
      );
    }
  }, []);

  return (
    <section className="feature-banners container">
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          ref={(el) => { bannersRef.current[index] = el; }}
          className={`banner banner-${banner.type}`}
        >
          <div className="banner-content">
            <p>{banner.tag}</p>
            <h3>{banner.title}</h3>
            <a href={banner.link} className="btn-white btn-small">
              VOIR LES OFFRES
            </a>
          </div>
          <img src={banner.img} alt={banner.title} className="banner-img" />
        </div>
      ))}
    </section>
  );
}