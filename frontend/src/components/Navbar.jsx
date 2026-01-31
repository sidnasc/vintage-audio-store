import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  // Verifica se está logado para mostrar "Sair" ou "Login"
  const isLogado = localStorage.getItem('usuarioLogado');

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '/';
  };

  return (
    <nav className="navbar container">
      <Link to="/" className="logo">
        🎵 Vintage Audio
      </Link>
      
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/">Vitrine</Link>
        
        {/* Se estiver logado, mostra o acesso ao Admin. Se não, mostra Login */}
        {isLogado ? (
          <>
            <Link to="/admin/dashboard" style={{ color: '#d35400' }}>Gerenciar Loja</Link>
            <button onClick={handleLogout} className="btn-danger" style={{ margin: 0 }}>Sair</button>
          </>
        ) : (
          <Link to="/login" style={{ fontSize: '0.9rem' }}>🔒 Área Restrita</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;