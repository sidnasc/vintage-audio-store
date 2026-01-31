import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../frontend/src/api';

function Admin() {
  const [form, setForm] = useState({
    nome: '', marca: '', preco: '', imagemUrl: '', categoria: ''
  });
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o ID da URL se for edição

  useEffect(() => {
    carregarCategorias();
    if (id) {
      carregarDadosProduto();
    }
  }, [id]);

  const carregarCategorias = async () => {
    const res = await api.get('/categorias');
    setCategorias(res.data);
  };

  const carregarDadosProduto = async () => {
    const res = await api.get(`/produtos/${id}`); // Busca detalhes para edição
    // Ajuste para preencher o form corretamente (depende da estrutura do seu backend)
    setForm({
        ...res.data,
        categoria: res.data.categoria?._id || res.data.categoria // Garante pegar só o ID
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/produtos/${id}`, form); // Update 
        alert('Equipamento atualizado!');
      } else {
        await api.post('/produtos', form); // Create 
        alert('Equipamento cadastrado!');
      }
      navigate('/'); // Volta para a vitrine
    } catch (erro) {
      alert('Erro ao salvar: ' + erro.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>{id ? 'Editar Equipamento' : 'Novo Equipamento'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <input name="nome" placeholder="Nome (ex: Receiver Akai)" value={form.nome} onChange={handleChange} required />
        <input name="marca" placeholder="Marca (ex: Polyvox)" value={form.marca} onChange={handleChange} required />
        <input name="preco" type="number" placeholder="Preço" value={form.preco} onChange={handleChange} required />
        <input name="imagemUrl" placeholder="URL da Imagem" value={form.imagemUrl} onChange={handleChange} />
        
        <select name="categoria" value={form.categoria} onChange={handleChange} required>
          <option value="">Selecione a Categoria</option>
          {categorias.map(cat => (
            <option key={cat._id} value={cat._id}>{cat.nome}</option>
          ))}
        </select>

        <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>
          {id ? 'Salvar Alterações' : 'Cadastrar'}
        </button>
      </form>
      <button onClick={() => navigate('/')} style={{ marginTop: '10px' }}>Cancelar</button>
    </div>
  );
}

export default Admin;