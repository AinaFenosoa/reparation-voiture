import flashTires from '../../assets/flash-tires.png';
import './FlashDeals.css';

export default function FlashDeals() {
  return (
    <section className="flash-deals">
      <div className="container flash-deals-container">
        <div className="flash-deals-image">
          <img src={flashTires} alt="Flash Deals Tires" className="flash-tires-img" />
        </div>
        
        <div className="flash-deals-content">
          <h2 className="section-title">FLASH DEALS</h2>
          <p className="flash-subtitle">HURRY UP AND GET 25% DISCOUNT</p>
          <button className="btn-primary">SHOP NOW</button>
          
          <div className="countdown">
            <div className="countdown-item">
              <span className="number">20</span>
              <span className="label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="number">13</span>
              <span className="label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="number">24</span>
              <span className="label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="number">48</span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
