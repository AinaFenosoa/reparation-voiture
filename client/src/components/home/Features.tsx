import './Features.css';

export default function Features() {
  return (
    <section className="features container">
      <div className="feature-item">
        <div className="feature-icon">🚚</div>
        <div className="feature-text">
          <h4>Free Home Delivery</h4>
          <p>Provide free home delivery for all products over $100</p>
        </div>
      </div>
      
      <div className="feature-item">
        <div className="feature-icon">🏅</div>
        <div className="feature-text">
          <h4>Quality Products</h4>
          <p>We ensure our product quality all times</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🎧</div>
        <div className="feature-text">
          <h4>Online Support</h4>
          <p>To satisfy our customer we try to give support online</p>
        </div>
      </div>
    </section>
  );
}
