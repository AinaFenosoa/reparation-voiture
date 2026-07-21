import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/"><h2>Jukas</h2></Link>
        </div>
        
        <ul className="navbar-links">
          <li><Link to="/" className="active">Accueil</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
        </ul>
      </div>
    </nav>
  );
}