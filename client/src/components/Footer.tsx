import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-col footer-brand">
          <Link to="/"><h2>Jukas</h2></Link>
          <p>Jukas is the best place to shop for your car accessories. What kinds of parts do you need you can get here at an affordable price.</p>
          <div className="footer-socials">
            <a href="#">F</a>
            <a href="#">T</a>
            <a href="#">I</a>
            <a href="#">Y</a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><Link to="/about">About Company</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/services">Our Service</Link></li>
            <li><Link to="/faq">Why Us?</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quicklink</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/return">Return Policy</Link></li>
            <li><Link to="/support">Online Support</Link></li>
            <li><Link to="/faq">Money Back</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h3>Store Information</h3>
          <p>📍 2011, Avenue St, Block Area, Texas</p>
          <p>Main Local Los Angeles, USA</p>
          <p>📞 Phone: +1 234 567 890</p>
          <p>✉️ Email: info@jukas.com</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2024 Jukas All right Reserved.</p>
      </div>
    </footer>
  );
}
