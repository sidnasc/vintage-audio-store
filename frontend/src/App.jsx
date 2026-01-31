import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vitrine from '../../src/pages/vitrine';
import Admin from '../../src/pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vitrine />} />        {/* Tela Principal */}
        <Route path="/admin" element={<Admin />} />     {/* Tela de Cadastro */}
        <Route path="/admin/:id" element={<Admin />} /> {/* Tela de Edição */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;