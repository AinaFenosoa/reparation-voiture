import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import './Services.css';
import { InfiniteSlider } from "../components/InfiniteSlider";
import { motion, type Variants } from 'framer-motion';
import Card  from "../components/CardService";
import { Link } from "react-router-dom";

const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

interface serviceState {
  id: number;
  nom: string;
  description: string;
  prix: string;
  image: string;
}



export default function Services() {
  const baseUrl = 'something/';
  const [services, setServices] = useState<serviceState[]>([]);

  const initializeDev = () => {
    setServices([
      { id: 1, nom: "Vidange", description: "Changement d'huile et filtre", prix: "20.000Ar", image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bSVDMyVBOWNhbmljaWVufGVufDB8fDB8fHwy' },
      { id: 2, nom: "Freinage", description: "Remplacement des plaquettes", prix: "30.000Ar", image: 'https://media.istockphoto.com/id/2247184602/fr/photo/m%C3%A9canicien-r%C3%A9parant-le-syst%C3%A8me-de-freinage-dune-voiture-dans-le-garage.webp?a=1&b=1&s=612x612&w=0&k=20&c=8nUBrHitX1bYdtbGaNPJWdFyZTVdc9Iw8J3U5W1ool4=' },
      { id: 3, nom: "Diagnostic", description: "Analyse électronique complète", prix: "25.000Ar", image: 'https://media.istockphoto.com/id/2257647353/fr/photo/chauffeur-de-camion-effectuant-de-la-maintenance-sur-un-camion-rouge-%C3%A0-un-quai-de-chargement.webp?a=1&b=1&s=612x612&w=0&k=20&c=9xF_shOiqDUcvnGvZDAzo9P7uJ28ETBBxRSPR3w7-iQ=' }
    ]);
  };

  const initializeService = async () => {
    try {
      const res = await axios.get(`${baseUrl}`);
      const data: serviceState[] = res.data;
      if (!Array.isArray(data) || data.length === 0) {
        initializeDev();
      } else {
        setServices(data);
      }
    } catch (error) {
      console.log(error);
      initializeDev();
    }
  };

  useEffect(() => {
    initializeService();
  }, []);

  const message = [
    { img: "https://www.svgrepo.com/show/156881/mechanic-tools.svg", message: "Technologie de pointe"}, 
    {img :"https://www.svgrepo.com/show/28884/premium.svg", message: "service premium"},
    {img: "https://www.svgrepo.com/show/501120/calendar-clock.svg", message: "disponible 7/7 jours"},
    {img : "https://www.svgrepo.com/show/477401/trophy-material-2.svg", message:"equipe professionnelle"}
  ]

  return (
    <div className="services-page">
      <NavBar />
      <section className="bg-hero">
        <div className="service-hero-overlay">
        <motion.div 
          className="hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInVariants}
        >
          <h1 className="service-hero-subtitle">Nos services</h1>
          <p className="hero-title">
            Nous avons une large
          </p>
          <p className="hero-title">
            gamme de services
          </p>
        </motion.div>
        </div>
      </section>

      {/* 3. CARTES : GRIS CLAIR AVEC DOUBLE DÉCOUPE */}
      <section className="bg-grey">
        <div className="section-container">
          <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
          variants={fadeInVariants}
        >
          <h2 className="section-title">NOS SERVICES DISPONIBLES</h2>
          </motion.div>
          {/* Grille de cartes animées */}
          <div className="cards-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index * 0.15}
                variants={fadeInVariants}
              >
                {/* <span className="card-id">0{service.id}</span>
                <h3>{service.nom}</h3>
                <p>{service.description}</p>
                <span className="card-price">{service.prix}</span> */}
                <Card nom={service.nom} id={service.id} description={service.description} prix={service.prix} image={service.image}/>

              </motion.div>
            ))}
          </div>

          {/* Carrousel infini en bas des cartes */}
          <div className="slider-wrapper">
            <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
          variants={fadeInVariants}
        >
            <InfiniteSlider width="300px" height="250px" duration="15s">
              {message.map((s, index) => (
                <div key={index} className="slider-card">
                  <img src={s.img} alt={s.message} className="slider-icon" /> {/* Remplace par une vraie balise <img> ou <svg> si besoin */}
                  <h3>{s.message}</h3>
                </div>
              ))}
            </InfiniteSlider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BAS : FOOTER NOIR STANDARD */}
<footer className="bg-black footer-section">
  <motion.div 
    className="footer-container"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    custom={0}
    variants={fadeInVariants}
  >
    <div className="footer-grid">
      {/* Colonne 1 : À propos */}
      <div className="footer-col">
        <h3 className="footer-logo">GARAGE REPAS</h3>
        <p className="footer-text">
          Spécialiste de la réparation automobile, entretien complet, portières et vente de pièces électroniques de haute qualité.
        </p>
      </div>

      {/* Colonne 2 : Navigation */}
      <div className="footer-col">
        <h4 className="footer-title">Navigation</h4>
        <ul className="footer-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Nos Services</Link></li>
          <li><Link to="/blog">À Propos</Link></li>
        </ul>
      </div>

      {/* Colonne 3 : Prestations */}
      <div className="footer-col">
        <h4 className="footer-title">Nos Prestations</h4>
        <ul className="footer-links">
          {services.map((service, index)=>(
            <li><span>{service.nom}</span></li>
          ))}
        </ul>
      </div>

      {/* Colonne 4 : Contact & Horaires */}
      {/* <div className="footer-col">
        <h4 className="footer-title">Contact</h4>
        <p className="footer-info">📍 Antananarivo, Madagascar</p>
        <p className="footer-info">📞 +261 34 00 000 00</p>
        <p className="footer-info">✉️ contact@garage.mg</p>
        <p className="footer-badge">Disponible 7/7j (8h - 18h)</p>
      </div> */}
    </div>

    {/* Copyright */}
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Garage Auto. Tous droits réservés.</p>
    </div>
  </motion.div>
</footer>

    </div>
  );
}