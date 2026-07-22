import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/"><h2>Jukas</h2></Link>
        </div>
        
        <ul className="navbar-links">
          {/* Le paramètre 'end' évite que 'Accueil' reste actif sur toutes les sous-pages */}
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
              BLOG
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}