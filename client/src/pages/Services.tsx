import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import './Services.css';
import { InfiniteSlider } from "../components/InfiniteSlider";
import { motion, type Variants } from 'framer-motion';

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
      { id: 1, nom: "Vidange", description: "Changement d'huile et filtre", prix: "20.000Ar", image: 'yo' },
      { id: 2, nom: "Freinage", description: "Remplacement des plaquettes", prix: "30.000Ar", image: 'ok' },
      { id: 3, nom: "Diagnostic", description: "Analyse électronique complète", prix: "25.000Ar", image: 'diag' }
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
          <h2 className="section-title">NOS SERVICES DISPONIBLES</h2>

          {/* Grille de cartes animées */}
          <div className="cards-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="card-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index * 0.15}
                variants={fadeInVariants}
              >
                <span className="card-id">0{service.id}</span>
                <h3>{service.nom}</h3>
                <p>{service.description}</p>
                <span className="card-price">{service.prix}</span>
              </motion.div>
            ))}
          </div>

          {/* Carrousel infini en bas des cartes */}
          <div className="slider-wrapper">
            <InfiniteSlider width="200px" height="60px" duration="15s">
              {services.map((s) => (
                <div key={s.id} className="slider-badge">{s.nom}</div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </section>

      {/* 4. BAS : FOOTER NOIR */}
      <section className="bg-black">
        <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
          variants={fadeInVariants}
        >
          <span className="headerTitle">Reparation voiture
          </span>
          <p className="headerText">Reparation Portiere et vente de piece electronique
          </p>
        </motion.div>
      </section>

    </div>
  );
}