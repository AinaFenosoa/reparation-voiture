import React from "react";
import NavBar from "../components/NavBar";
import "./Blog.css";

// Interface pour les données du blog
interface BlogPost {
  id: number;
  date: string;
  titre: string;
  contenu: string;
  image: string;
}

// Données factices pour illustrer la page (à remplacer par vos vraies données)
const blogData: BlogPost[] = [
  {
    id: 1,
    date: "20 Juillet 2026",
    titre: "Les 5 vérifications essentielles avant un long trajet",
    contenu: "Découvrez les points cruciaux à inspecter sur votre véhicule pour garantir un voyage en toute sécurité. Des pneus à l'huile moteur, ne négligez rien avant de prendre la route.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    date: "15 Juillet 2026",
    titre: "Comment prolonger la durée de vie de votre moteur ?",
    contenu: "L'entretien régulier est la clé. Apprenez les astuces des professionnels pour garder votre moteur performant et éviter les pannes coûteuses grâce à des gestes simples.",
    image: "https://i.pinimg.com/1200x/a8/aa/be/a8aabeec75ed0459272dfefb27f26da8.jpg",
  },
  {
    id: 3,
    date: "02 Juillet 2026",
    titre: "Quand faut-il vraiment changer ses plaquettes de frein ?",
    contenu: "Le système de freinage est votre premier élément de sécurité. Voici les signes d'usure qui ne trompent pas et qui indiquent qu'il est temps de passer au garage.",
    image: "https://i.pinimg.com/736x/fa/19/b1/fa19b17c12a73bfa824b4e066245f839.jpg",
  },
];

export default function Blog() {
  return (
    <div className="blog-page-container">
      <NavBar />
      
      {/* Section Hero du Blog (s'inspire de l'entête sombre de la maquette) */}
      <header className="blog-hero-section">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h4 className="blog-hero-subtitle">ACTUALITÉS & CONSEILS</h4>
          <h1 className="blog-hero-title">
            NOTRE <span className="blog-highlight">BLOG</span> AUTOMOBILE
          </h1>
          <p className="blog-hero-description">
            Restez informé des dernières technologies et des meilleures pratiques pour l'entretien de votre véhicule.
          </p>
        </div>
      </header>

      {/* Section Contenu Principal */}
      <main className="blog-main-content">
        <div className="blog-grid">
          {blogData.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image-wrapper">
                <img
                  src={post.image}
                  alt={post.titre}
                  className="blog-card-image"
                />
                <div className="blog-card-date-badge">{post.date}</div>
              </div>
              
              <div className="blog-card-body">
                <h2 className="blog-card-title">{post.titre}</h2>
                <p className="blog-card-text">{post.contenu}</p>
                
                <button className="blog-btn-read-more">
                  LIRE LA SUITE
                  <span className="blog-btn-icon">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}