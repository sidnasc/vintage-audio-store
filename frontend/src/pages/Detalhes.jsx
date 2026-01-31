import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import Navbar from '../components/Navbar';

function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/produtos/${id}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error("Erro ao carregar", err));
  }, [id]);

  if (!produto) return <div className="container">Carregando...</div>;

  return (
    <>
      <Navbar />
      <div className="container" style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
        
        {/* Lado Esquerdo: Imagem Grande */}
        <div style={{ flex: 1 }}>
          <img 
            src={produto.imagemUrl || 'https://via.placeholder.com/600x400'} 
            alt={produto.nome} 
            style={{ width: '100%', borderRadius: '8px', border: '1px solid #ddd' }}
          />
        </div>

        {/* Lado Direito: Informações */}
        <div style={{ flex: 1 }}>
          <small style={{ textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>
            {produto.marca}
          </small>
          <h1 style={{ margin: '10px 0', fontSize: '2.5rem' }}>{produto.nome}</h1>
          <h2 style={{ color: '#d35400', fontSize: '2rem' }}>
            R$ {Number(produto.preco).toFixed(2)}
          </h2>

          <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '8px' }}>
            <h3>Ficha Técnica</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><strong>Categoria:</strong> {produto.categoria?.nome || 'Geral'}</li>
              {/* Se você adicionou especificações no banco, mostraria aqui. 
                  Como é MVP, vamos mostrar dados estáticos ou o que tiver. */}
              <li><strong>ID do Produto:</strong> {produto._id}</li>
            </ul>
          </div>

          <button 
            onClick={() => navigate('/')} 
            style={{ marginTop: '20px', padding: '10px 30px', background: 'transparent', border: '1px solid #333' }}
          >
            ← Voltar para a Loja
          </button>
        </div>
      </div>
    </>
  );
}

export default Detalhes;