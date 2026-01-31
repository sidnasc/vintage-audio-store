import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar container">
      <Link to="/" className="logo">
        🎵 Vintage Audio
      </Link>
      <div className="nav-links">
        <Link to="/">Vitrine</Link>
        <Link to="/admin">Área Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;