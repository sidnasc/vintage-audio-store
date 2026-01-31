import { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);

  // Busca os dados ao carregar a página
  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const resposta = await api.get('/produtos'); // Consumo da API 
      setProdutos(resposta.data);
    } catch (erro) {
      alert('Erro ao buscar produtos: ' + erro.message);
    }
  };

  const deletarProduto = async (id) => {
    if (confirm('Tem certeza que deseja excluir este equipamento?')) {
      await api.delete(`/produtos/${id}`); // Delete 
      carregarProdutos(); // Atualiza a lista
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vintage Audio Store</h1>
      <Link to="/admin">
        <button>➕ Cadastrar Novo Equipamento</button>
      </Link>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {produtos.map((prod) => (
          <div key={prod._id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            {prod.imagemUrl && <img src={prod.imagemUrl} alt={prod.nome} style={{ width: '100%' }} />}
            <h3>{prod.nome}</h3>
            <p><strong>Marca:</strong> {prod.marca}</p>
            <p><strong>Preço:</strong> R$ {prod.preco}</p>
            <p><strong>Categoria:</strong> {prod.categoria?.nome || 'Geral'}</p>
            
            <div style={{ marginTop: '10px' }}>
              {/* Botão de Edição vai para a rota admin com o ID */}
              <Link to={`/admin/${prod._id}`}>
                <button style={{ marginRight: '5px' }}>Editar</button>
              </Link>
              <button onClick={() => deletarProduto(prod._id)} style={{ backgroundColor: '#ff4d4d' }}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vitrine;