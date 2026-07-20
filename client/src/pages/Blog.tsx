import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import gsap from "gsap";
import { blogData } from "../data/blog.data";
import "./Blog.css";

const TireSVG = React.forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => (
    <svg ref={ref} viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#111" strokeWidth="5" />
      <circle cx="50" cy="50" r="28" fill="#e0e0e0" />
      <circle cx="50" cy="50" r="23" fill="#1a1a1a" />
      <line x1="50" y1="27" x2="50" y2="73" stroke="#e0e0e0" strokeWidth="6" />
      <line x1="27" y1="50" x2="73" y2="50" stroke="#e0e0e0" strokeWidth="6" />
      <line x1="33" y1="33" x2="67" y2="67" stroke="#e0e0e0" strokeWidth="6" />
      <line x1="33" y1="67" x2="67" y2="33" stroke="#e0e0e0" strokeWidth="6" />
      <circle cx="50" cy="50" r="8" fill="#f6b72a" />
    </svg>
  )
);

export default function Blog() {
  const tireRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const titleTireSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // 1. Animation infinie du pneu dans le titre (indépendante du reste)
    gsap.to(titleTireSvgRef.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 3,
      repeat: -1, // Tourne à l'infini
      ease: "linear",
    });

    // 2. Timeline pour l'introduction (Gros pneu + Articles)
    const tl = gsap.timeline();

    gsap.set(cardsRef.current, { x: "100vw", opacity: 0 });

    tl.to(tireRef.current, {
      x: "120vw",
      rotation: 1080,
      duration: 2.5,
      ease: "power2.inOut",
    })
    .to(cardsRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "back.out(1.2)",
    }, "-=1.5"); // Les cartes commencent à arriver un peu plus tôt

  }, []);

  const addToCardsRef = (el: HTMLElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="blog-page-container">
      <NavBar />
      
      <header className="blog-hero-section">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h4 className="blog-hero-subtitle">ACTUALITÉS & CONSEILS</h4>
          <h1 className="blog-hero-title">
            NOTRE <span className="blog-highlight">
              BL
              {/* Le pneu remplace directement le O dès le début */}
              <div className="blog-title-tire">
                <TireSVG ref={titleTireSvgRef} />
              </div>
              G
            </span> AUTOMOBILE
          </h1>
          <p className="blog-hero-description">
            Restez informé des dernières technologies et des meilleures pratiques pour l'entretien de votre véhicule.
          </p>
        </div>
      </header>

      <main className="blog-main-content">
        
        {/* Animation du gros pneu de présentation (sans la trace) */}
        <div className="blog-animation-wrapper">
          <div className="blog-tire-container" ref={tireRef}>
            <TireSVG className="blog-tire-svg" />
          </div>
        </div>

        <div className="blog-grid">
          {blogData.map((post) => (
            <article key={post.id} className="blog-card" ref={addToCardsRef}>
              <div className="blog-card-image-wrapper">
                <img src={post.image} alt={post.titre} className="blog-card-image" />
                <div className="blog-card-date-badge">{post.date}</div>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">{post.titre}</h2>
                <p className="blog-card-text">{post.contenu}</p>
                <button className="blog-btn-read-more">
                  LIRE LA SUITE <span className="blog-btn-icon">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}