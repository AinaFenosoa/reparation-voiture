import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-col footer-brand">
          <Link to="/"><h2>Jukas</h2></Link>
          <p>Jukas est votre destination privilégiée pour l'achat de vos accessoires et pièces automobiles. Retrouvez toutes les pièces dont vous avez besoin au meilleur prix.</p>
          <div className="footer-socials">
            <a href="#">F</a>
            <a href="#">T</a>
            <a href="#">I</a>
            <a href="#">Y</a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Informations</h3>
          <ul>
            <li><Link to="/">À propos</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/">Pourquoi nous ?</Link></li>
            <li><Link to="/">Carrières</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Liens Rapides</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/">Boutique</Link></li>
            <li><Link to="/">Panier</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/services">Support en ligne</Link></li>
            <li><Link to="/">Politique de retour</Link></li>
            <li><Link to="/">Garantie satisfait</Link></li>
            <li><Link to="/">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h3>Informations Magasin</h3>
          <p>📍 2011, Avenue St, Block Area, Texas</p>
          <p>Magasin Principal, France / International</p>
          <p>📞 Téléphone : +1 234 567 890</p>
          <p>✉️ E-mail : info@jukas.com</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2024 Jukas. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

