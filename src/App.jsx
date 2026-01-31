import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vitrine from './pages/Vitrine';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vitrine />} />        {/* Listagem */}
        <Route path="/admin" element={<Admin />} />     {/* Criar Novo */}
        <Route path="/admin/:id" element={<Admin />} /> {/* Editar Existente */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;