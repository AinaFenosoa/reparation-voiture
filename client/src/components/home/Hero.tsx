import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" >
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">NEW TECHNOLOGY & BUILD</p>
          <h1 className="hero-title">LATEST POWERFUL ENGINE FOR YOU</h1>
          <button className="btn-white">SHOP NOW</button>
        </div>
        <div className="hero-image-placeholder">
          {/* We will use a CSS background or a placeholder img here */}
        </div>
      </div>
    </section>
  );
}
