import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import './Services.css';
import { InfiniteSlider } from "../components/InfiniteSlider";
import { motion, type Variants } from 'framer-motion';
import Card from "../components/CardService";
import Footer from "../components/Footer";
import { servicesService } from "../services/serviceService";
import type { serviceInterface } from "../types/service";

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

export default function Services() {
  // États séparés pour chaque catégorie de services
  const [services, setAllServices] = useState<serviceInterface[]>([]);
  const [featuredServices, setFeaturedServices] = useState<serviceInterface[]>([]);
  const [dealsOfDay, setDealsOfDay] = useState<serviceInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Données de secours en cas d'erreur ou d'API vide
  const initializeDev = () => {
    setAllServices([
      { id: 1, nom: "Vidange & Filtres", description: "Changement d'huile synthétique et remplacement des filtres", prix: "20.000 Ar", image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&auto=format&fit=crop&q=60' },
      { id: 2, nom: "Système de Freinage", description: "Remplacement des plaquettes et vérification des disques", prix: "30.000 Ar", image: 'https://media.istockphoto.com/id/2247184602/fr/photo/m%C3%A9canicien-r%C3%A9parant-le-syst%C3%A8me-de-freinage-dune-voiture-dans-le-garage.webp?a=1&b=1&s=612x612&w=0&k=20&c=8nUBrHitX1bYdtbGaNPJWdFyZTVdc9Iw8J3U5W1ool4=' },
      { id: 3, nom: "Diagnostic Électronique", description: "Analyse complète des calculateurs et effacement des défauts", prix: "25.000 Ar", image: 'https://media.istockphoto.com/id/2257647353/fr/photo/chauffeur-de-camion-effectuant-de-la-maintenance-sur-un-camion-rouge-%C3%A0-un-quai-de-chargement.webp?a=1&b=1&s=612x612&w=0&k=20&c=9xF_shOiqDUcvnGvZDAzo9P7uJ28ETBBxRSPR3w7-iQ=' }
    ]);

    setFeaturedServices([
      { id: 4, nom: "Réparation Portières & Vitres", description: "Remise en état des mécanismes et lève-vitres électriques", prix: "45.000 Ar", image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&auto=format&fit=crop&q=60', is_featured: true }
    ]);

    setDealsOfDay([
      { id: 5, nom: "Recharge Climatisation", description: "Contrôle d'étanchéité et recharge en gaz R134a", prix: "15.000 Ar", image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=60', is_deal: true, reduction: "-30%" }
    ]);
  };

  // Récupération globale de tous les services depuis l'API Laravel
  const fetchAllServiceData = async () => {
    setLoading(true);
    try {
      const [allRes, featuredRes, dealsRes] = await Promise.allSettled([
        servicesService.getAll(),
        servicesService.getFeaturedServices(),
        servicesService.getDealsOfDay()
      ]);

      let hasData = false;

      if (allRes.status === "fulfilled" && Array.isArray(allRes.value) && allRes.value.length > 0) {
        setAllServices(allRes.value);
        hasData = true;
      }
      if (featuredRes.status === "fulfilled" && Array.isArray(featuredRes.value) && featuredRes.value.length > 0) {
        setFeaturedServices(featuredRes.value);
        hasData = true;
      }
      if (dealsRes.status === "fulfilled" && Array.isArray(dealsRes.value) && dealsRes.value.length > 0) {
        setDealsOfDay(dealsRes.value);
        hasData = true;
      }

      if (!hasData) {
        initializeDev();
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des services :", error);
      initializeDev();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllServiceData();
  }, []);

  const message = [
    { img: "https://www.svgrepo.com/show/156881/mechanic-tools.svg", message: "Technologie de pointe" }, 
    { img: "https://www.svgrepo.com/show/28884/premium.svg", message: "Service premium" },
    { img: "https://www.svgrepo.com/show/501120/calendar-clock.svg", message: "Disponible 7/7 jours" },
    { img: "https://www.svgrepo.com/show/477401/trophy-material-2.svg", message: "Équipe professionnelle" }
  ];

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
            <p className="hero-title">Nous avons une large</p>
            <p className="hero-title">gamme de services</p>
          </motion.div>
        </div>
      </section>

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
  {(() => {
    // 1. Fusion dans l'ordre de priorité : Featured -> Deals -> Normal
    const rawList = [...featuredServices, ...dealsOfDay, ...services];

    // 2. Dédoublonnage par ID (garde la première occurrence prioritaire)
    const combinedServices = rawList.reduce<serviceInterface[]>((acc, current) => {
      if (!acc.some((item) => item.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);

    return combinedServices.map((service, index) => (
      <motion.div 
        key={service.id} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={index * 0.15}
        variants={fadeInVariants}
      >
        <Card 
          id={index} 
          nom={service.nom} 
          description={service.description} 
          prix={service.prix} 
          image={service.image || service.photoService} 
          reduction={service.reduction}
          is_featured={Boolean(service.is_featured)}
          is_deal={Boolean(service.is_deal || service.is_deal_of_the_day)}
        />
      </motion.div>
    ));
  })()}
</div>

          {/* Carrousel infini */}
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
                    <img src={s.img} alt={s.message} className="slider-icon" />
                    <h3>{s.message}</h3>
                  </div>
                ))}
              </InfiniteSlider>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}