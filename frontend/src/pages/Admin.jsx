import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';
import Navbar from '../components/Navbar';

function Admin() {
  // Adicionei 'descricao' no estado inicial
  const [form, setForm] = useState({
    nome: '', marca: '', preco: '', imagemUrl: '', categoria: '', descricao: ''
  });
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    carregarCategorias();
    if (id) {
      carregarDadosProduto();
    }
  }, [id]);

  const carregarCategorias = async () => {
    try {
      const res = await api.get('/categorias');
      setCategorias(res.data);
    } catch (erro) {
      console.error("Erro categorias", erro);
    }
  };

  const carregarDadosProduto = async () => {
    try {
      const res = await api.get(`/produtos/${id}`);
      setForm({
        ...res.data,
        categoria: res.data.categoria?._id || res.data.categoria || '',
        descricao: res.data.descricao || '' // Garante que carregue a descrição
      });
    } catch (erro) {
      alert("Erro ao carregar produto");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/produtos/${id}`, form);
        alert('Atualizado com sucesso!');
      } else {
        await api.post('/produtos', form);
        alert('Cadastrado com sucesso!');
      }
      navigate('/');
    } catch (erro) {
      alert('Erro: ' + erro.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            {id ? 'Editar Equipamento' : 'Novo Equipamento'}
          </h2>
          {/* O ID está escondido na URL e na lógica, não aparece aqui no visual */}
          
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input name="nome" value={form.nome} onChange={handleChange} required />

            <label>Marca:</label>
            <input name="marca" value={form.marca} onChange={handleChange} required />

            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <label>Preço:</label>
                <input name="preco" type="number" value={form.preco} onChange={handleChange} required />
              </div>
              <div style={{ flex: 1 }}>
                <label>Categoria:</label>
                <select name="categoria" value={form.categoria} onChange={handleChange} required>
                  <option value="">Selecione...</option>
                  {categorias.map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.nome}</option>
                  ))}
                </select>
              </div>
            </div>

            <label>Características / Descrição Técnica:</label>
            <textarea 
              name="descricao"
              rows="5"
              placeholder="Ex: Potência de 50W por canal, entradas Phono, ano 1978..."
              value={form.descricao}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }}
            />

            <label>URL da Imagem:</label>
            <input name="imagemUrl" value={form.imagemUrl} onChange={handleChange} />

            <button type="submit" className="btn-primary">Salvar</button>
            <button type="button" className="btn-danger" style={{ width: '100%', marginTop: '10px' }} onClick={() => navigate('/')}>Cancelar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;