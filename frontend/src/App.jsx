import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Vitrine from './pages/vitrine.jsx';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Detalhes from './pages/Detalhes';

// Componente para Proteger Rotas (Só entra se tiver o token no localStorage)
const RotaPrivada = ({ children }) => {
  const isLogado = localStorage.getItem('usuarioLogado');
  return isLogado ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vitrine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produto/:id" element={<Detalhes />} /> {/* Nova Rota de Detalhes */}

        {/* Rotas Protegidas (Só entra com senha) */}
        <Route path="/admin/novo" element={
          <RotaPrivada><Admin /></RotaPrivada>
        } />
        <Route path="/admin/editar/:id" element={
          <RotaPrivada><Admin /></RotaPrivada>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;