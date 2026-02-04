import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Login() {
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Senha simples para o trabalho acadêmico
    if (senha === 'admin123') {
      localStorage.setItem('usuarioLogado', 'true'); // Salva que está logado
      navigate('/admin/dashboard'); // Manda para o cadastro (agora rota protegida)
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
        <div className="form-container" style={{ textAlign: 'center' }}>
          <h2>Acesso Restrito</h2>
          <p style={{ marginBottom: '20px', color: '#666' }}>Área exclusiva para gerentes.</p>
          
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Digite a senha de administrador" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ textAlign: 'center' }}
            />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;