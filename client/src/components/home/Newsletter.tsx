import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter container">
      <div className="newsletter-box">
        <p className="newsletter-subtitle">SPECIAL OFFER FOR SUBSCRIPTION</p>
        <h2 className="newsletter-title">GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
        <p className="newsletter-desc">Subscribe our newsletter and all latest news of our latest product, promotion and offers</p>
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email Address here..." required />
          <button type="submit" className="btn-primary">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
}
