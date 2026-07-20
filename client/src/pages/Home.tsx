import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="page">
      <NavBar />
      <h1>Nos Produits</h1>
      <p>Explorez notre collection complète de bijoux.</p>
      <div className="products-grid">
        <div className="product-card">
          <h3>Bague Or</h3>
          <p>Bague en or 18 carats</p>
        </div>
        <div className="product-card">
          <h3>Collier Argent</h3>
          <p>Collier en argent massif</p>
        </div>
        <div className="product-card">
          <h3>Bracelet Perles</h3>
          <p>Bracelet avec perles naturelles</p>
        </div>
        <div style={{height: "800px"}}>
          <h3>Bracelet Perles</h3>
          <p>Bracelet avec perles naturelles</p>
        </div>
      </div>
    </div>
  );
}