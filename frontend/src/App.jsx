import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Vitrine from './pages/Vitrine';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Detalhes from './pages/Detalhes';
import Dashboard from './pages/Dashboard';

// Componente para Proteger Rotas
const RotaPrivada = ({ children }) => {
  const isLogado = localStorage.getItem('usuarioLogado');
  return isLogado ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Vitrine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produto/:id" element={<Detalhes />} />

        {/* Rotas Privadas (Admin) */}
        <Route path="/admin/dashboard" element={
          <RotaPrivada><Dashboard /></RotaPrivada>
        } />
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