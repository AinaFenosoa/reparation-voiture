import headlightImg from '../../assets/product-headlight.png';
import engineImg from '../../assets/product-engine.png';
import dashboardImg from '../../assets/product-dashboard.png';
import './FeatureBanners.css';

export default function FeatureBanners() {
  return (
    <section className="feature-banners container">
      <div className="banner banner-dark">
        <div className="banner-content">
          <p>New 2024</p>
          <h3>Latest & Beauty Headlights</h3>
          <a href="/shop" className="btn-white btn-small">SHOP NOW</a>
        </div>
        <img src={headlightImg} alt="Latest & Beauty Headlights" className="banner-img" />
      </div>
      
      <div className="banner banner-red">
        <div className="banner-content">
          <p>New Design 2024</p>
          <h3>Exclusive Car Bonnets</h3>
          <a href="/shop" className="btn-white btn-small">SHOP NOW</a>
        </div>
        <img src={engineImg} alt="Exclusive Car Bonnets" className="banner-img" />
      </div>

      <div className="banner banner-dark">
        <div className="banner-content">
          <p>Latest Interior</p>
          <h3>Attractive Car Dashboard</h3>
          <a href="/shop" className="btn-white btn-small">SHOP NOW</a>
        </div>
        <img src={dashboardImg} alt="Attractive Car Dashboard" className="banner-img" />
      </div>
    </section>
  );
}
