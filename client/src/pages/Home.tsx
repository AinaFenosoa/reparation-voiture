import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="page-container">
      <NavBar/>
      <h1>Accueil - Réparation Voiture</h1>
      <p>Bienvenue chez votre expert en mécanique. Nous prenons soin de votre véhicule.</p>
      <div className="features">
        <div className="feature-card">
          <h3>Expertise</h3>
          <p>Des mécaniciens qualifiés à votre service.</p>
        </div>
        <div className="feature-card">
          <h3>Rapidité</h3>
          <p>Intervention rapide et efficace.</p>
        </div>
      </div>
    </div>
  );
}
