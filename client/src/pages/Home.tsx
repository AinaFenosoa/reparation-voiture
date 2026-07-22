import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import FeatureBanners from "../components/home/FeatureBanners";
import Features from "../components/home/Features";
import ProductGrid from "../components/home/ProductGrid";
import ProductCard from "../components/home/ProductCard";
import PromoBanner from "../components/home/PromoBanner";
import FlashDeals from "../components/home/FlashDeals";
import Newsletter from "../components/home/Newsletter";
import Brands from "../components/home/Brands";
import "./Home.css";

import brakePadImg from "../assets/product-brake-pad.png";
import engineImg from "../assets/product-engine.png";
import headlightImg from "../assets/product-headlight.png";
import dashboardImg from "../assets/product-dashboard.png";
import steeringImg from "../assets/product-steering.png";
import bulbsImg from "../assets/product-bulbs.png";
import scannerImg from "../assets/product-scanner.png";

import bannerMechanics from "../assets/banner-mechanics.png";
import bannerInterior from "../assets/banner-interior.png";
import bannerExterior from "../assets/banner-exterior.png";

// Meilleures ventes avec titres en français
const bestSellerProducts = [
  { id: 1, title: 'Plaquettes de frein haute performance', price: 15.00, oldPrice: 20.00, image: brakePadImg, rating: 5, sale: true },
  { id: 2, title: 'Bloc moteur V8 haute puissance', price: 29.00, oldPrice: 39.00, image: engineImg, rating: 5 },
  { id: 3, title: 'Phares LED avant nouvelle génération', price: 34.00, oldPrice: 44.00, image: headlightImg, rating: 5, newProduct: true },
  { id: 4, title: 'Tableau de bord numérique intelligent', price: 15.00, oldPrice: 20.00, image: dashboardImg, rating: 5, sale: true },
];

// Liste de tous les produits avec titres en français
const allProducts = [
  { id: 5, title: 'Volant sport en cuir perforé', price: 29.00, oldPrice: 39.00, image: steeringImg, rating: 5, sale: true },
  { id: 6, title: 'Jeu de plaquettes de frein renforcées', price: 15.00, oldPrice: 20.00, image: brakePadImg, rating: 5, sale: true },
  { id: 7, title: 'Optique de phare LED longue portée', price: 34.00, oldPrice: 44.00, image: headlightImg, rating: 5 },
  { id: 8, title: 'Kit d\'ampoules LED ultra lumineuses', price: 29.00, oldPrice: 39.00, image: bulbsImg, rating: 5, sale: true },
  { id: 9, title: 'Moteur essence préparé', price: 15.00, oldPrice: 20.00, image: engineImg, rating: 5 },
  { id: 10, title: 'Phares avant xénon haute visibilité', price: 34.00, oldPrice: 44.00, image: headlightImg, rating: 5, newProduct: true },
  { id: 11, title: 'Écran de bord tactile universel', price: 15.00, oldPrice: 20.00, image: dashboardImg, rating: 5, sale: true },
  { id: 12, title: 'Scanner de diagnostic auto OBD2', price: 29.00, oldPrice: 39.00, image: scannerImg, rating: 5, newProduct: true },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      <NavBar />
      
      <Hero />
      <FeatureBanners />
      <Features />

      <ProductGrid 
        title="MEILLEURES VENTES" 
        subtitle="Les pièces automobiles Jukas sont recommandées pour vous offrir la meilleure expérience de conduite en toute sécurité."
      >
        {bestSellerProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGrid>

      <div className="container promo-row-single">
        <PromoBanner 
          title="TOUTES LES PIÈCES DONT VOUS AVEZ BESOIN SONT DISPONIBLES ICI"
          buttonText="DÉCOUVRIR"
          dark={false}
          image={bannerMechanics}
        />
      </div>

      <div className="container promo-row-double">
        <PromoBanner 
          title="Dernières Pièces d'Intérieur"
          buttonText="DÉCOUVRIR"
          code="NOMEN"
          dark={true}
          image={bannerInterior}
        />
        <PromoBanner 
          title="Dernières Pièces d'Extérieur"
          buttonText="DÉCOUVRIR"
          code="NOMEN"
          dark={true}
          image={bannerExterior}
        />
      </div>

      <ProductGrid 
        title="TOUS NOS PRODUITS" 
        subtitle="Explorez notre sélection complète de pièces détachées et d'accessoires automobiles haut de gamme."
      >
        {allProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGrid>

      <FlashDeals />
      
      <Newsletter />
      
      <Brands />

      <Footer />
    </div>
  );
}