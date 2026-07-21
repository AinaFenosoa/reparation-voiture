import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { TireSVG } from "../components/TireSVG";
import gsap from "gsap";
import { blogService } from "../services/blogService";
import type { Post } from "../types/blog";
import { formatDate } from "../utils/formatDate";
import "./Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const tireRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const titleTireSvgRef = useRef<SVGSVGElement>(null);

  // Stockage des refs par ligne pour le loader 3D
  const linesRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const charsPerLineRef = useRef<(HTMLSpanElement | null)[][]>([[], [], [], []]);

  // 1. Récupération des données avec un délai minimal de 2.5 secondes pour la fluidité
  useEffect(() => {
    const fetchPosts = async () => {
      const startTime = Date.now();
      try {
        setLoading(true);
        const data = await blogService.getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Erreur chargement des articles:", err);
        setError("Impossible de charger les articles du blog.");
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(2500 - elapsedTime, 0);

        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      }
    };

    fetchPosts();
  }, []);

  // 2. Animation 3D du loader (4 lignes répétées)
  useEffect(() => {
    if (loading) {
      const transformOrigin = `50% 50% -40px`;
      const animTime = 0.9;
      const tl = gsap.timeline({ repeat: -1 });

      gsap.set(linesRef.current, { perspective: 700, transformStyle: "preserve-3d" });

      charsPerLineRef.current.forEach((chars, index) => {
        if (chars && chars.length > 0) {
          tl.fromTo(
            chars.filter(Boolean), // Filtre les éléments valides pour éviter les erreurs
            { rotationX: -90 },
            {
              rotationX: 90,
              stagger: 0.08,
              duration: animTime,
              ease: "none",
              transformOrigin,
            },
            index * 0.45
          );
        }
      });
    }
  }, [loading]);

  // 3. Animations GSAP principales
  useEffect(() => {
    gsap.to(titleTireSvgRef.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    if (!loading && posts.length > 0) {
      cardsRef.current = cardsRef.current.slice(0, posts.length);
      const tl = gsap.timeline();

      gsap.set(cardsRef.current, { x: "100vw", opacity: 0 });

      tl.to(tireRef.current, {
        x: "120vw",
        rotation: 1080,
        duration: 2.5,
        ease: "power2.inOut",
      }).to(
        cardsRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=1.5"
      );
    }
  }, [loading, posts]);

  const addToCardsRef = (el: HTMLElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const fullText = "CHARGEMENT DES ARTICLES";
  const shortText = "CHARGEMENT";
  const repeatedLines = [0, 1, 2, 3];

  return (
    <div className="blog-page-container">
      <NavBar />

      <header className="blog-hero-section">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h4 className="blog-hero-subtitle">ACTUALITÉS & CONSEILS</h4>
          <h1 className="blog-hero-title">
            NOTRE{" "}
            <span className="blog-highlight">
              BL
              <div className="blog-title-tire">
                <TireSVG ref={titleTireSvgRef} />
              </div>
              G
            </span>{" "}
            AUTOMOBILE
          </h1>
          <p className="blog-hero-description">
            Restez informé des dernières technologies et des meilleures pratiques pour l'entretien de votre véhicule.
          </p>
        </div>
      </header>

      <main className="blog-main-content">
        {loading && (
          <div className="blog-loader-wrapper">
            <div className="blog-loader-tube">
              {repeatedLines.map((lineIndex) => (
                <h2
                  key={lineIndex}
                  ref={(el) => {
                    if (el) linesRef.current[lineIndex] = el;
                  }}
                  className={`blog-loader-line line${lineIndex + 1}`}
                >
                  {/* Version bureau / grands écrans */}
                  <span className="loader-text-full">
                    {fullText.split("").map((char, charIndex) => (
                      <span
                        key={`full-${charIndex}`}
                        ref={(el) => {
                          if (el) {
                            if (!charsPerLineRef.current[lineIndex]) {
                              charsPerLineRef.current[lineIndex] = [];
                            }
                            charsPerLineRef.current[lineIndex][charIndex] = el;
                          }
                        }}
                        className="blog-loader-char"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>

                  {/* Version mobile / petits écrans */}
                  <span className="loader-text-short">
                    {shortText.split("").map((char, charIndex) => (
                      <span
                        key={`short-${charIndex}`}
                        ref={(el) => {
                          if (el) {
                            const offsetIndex = fullText.length + charIndex; // Décale l'index pour éviter les conflits de ref
                            if (!charsPerLineRef.current[lineIndex]) {
                              charsPerLineRef.current[lineIndex] = [];
                            }
                            charsPerLineRef.current[lineIndex][offsetIndex] = el;
                          }
                        }}
                        className="blog-loader-char"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </h2>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <p>Aucun article trouvé pour le moment.</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="blog-animation-wrapper">
              <div className="blog-tire-container" ref={tireRef}>
                <TireSVG className="blog-tire-svg" />
              </div>
            </div>

            <div className="blog-grid">
              {posts.map((post) => {
                const imageSrc =
                  post.imageBlog ||
                  post.image ||
                  "https://images.unsplash.com/photo-1486006920555-c77dce18193b";
                const dateAffichee = formatDate(
                  post.datePublication || post.created_at
                );

                return (
                  <article key={post.id} className="blog-card" ref={addToCardsRef}>
                    <div className="blog-card-image-wrapper">
                      <img src={imageSrc} alt={post.titre} className="blog-card-image" />
                      <div className="blog-card-date-badge">{dateAffichee}</div>
                    </div>
                    <div className="blog-card-body">
                      <h2 className="blog-card-title">{post.titre}</h2>
                      <p className="blog-card-text">
                        {post.extrait || post.contenu}
                      </p>
                      <button className="blog-btn-read-more">
                        LIRE LA SUITE <span className="blog-btn-icon">→</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </main>
      <Footer/>
    </div>
  );
}