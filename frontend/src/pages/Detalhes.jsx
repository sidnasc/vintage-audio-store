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
      <div className="container" style={{ marginTop: '30px' }}>
        
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Lado Esquerdo: Imagem */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img 
              src={produto.imagemUrl || 'https://via.placeholder.com/600x400'} 
              alt={produto.nome} 
              style={{ width: '100%', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* Lado Direito: Informações */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <small style={{ textTransform: 'uppercase', color: '#888', letterSpacing: '1px', fontWeight: 'bold' }}>
              {produto.marca}
            </small>
            
            <h1 style={{ margin: '10px 0', fontSize: '2.5rem', lineHeight: '1.2' }}>
              {produto.nome}
            </h1>
            
            <h2 style={{ color: '#d35400', fontSize: '2rem', margin: '20px 0' }}>
              R$ {Number(produto.preco).toFixed(2)}
            </h2>

            <div style={{ padding: '20px', background: 'white', borderRadius: '8px', border: '1px solid #eee' }}>
              <h3 style={{ marginTop: 0 }}>Especificações Técnicas</h3>
              
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', color: '#555' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Categoria:</strong> {produto.categoria?.nome || 'Geral'}
                </li>
                
                {/* AQUI ESTÁ A MUDANÇA: Tiramos o ID e pusemos a Descrição */}
                <li style={{ whiteSpace: 'pre-wrap' }}>
                  {produto.descricao ? produto.descricao : 'Nenhuma descrição técnica informada para este equipamento.'}
                </li>
              </ul>
            </div>

            <button 
              onClick={() => navigate('/')} 
              className="btn-primary"
              style={{ marginTop: '20px', width: 'auto', padding: '10px 40px' }}
            >
              ← Voltar para a Loja
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detalhes;