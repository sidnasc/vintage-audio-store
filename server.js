require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importando Modelos
const Categoria = require('./src/models/Categoria');
const Produto = require('./src/models/Produto');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexão com MongoDB 
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/vintage_audio')
  .then(() => console.log('MongoDB Conectado!'))
  .catch(err => console.error('Erro ao conectar:', err));

// --- ROTAS (CRUD) ---

// 1. Criar Categoria (Necessário existir antes de criar produto)
app.post('/api/categorias', async (req, res) => {
  try {
    const novaCategoria = await Categoria.create(req.body);
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. Listar Produtos (com "populate" para trazer o nome da categoria)
app.get('/api/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find().populate('categoria'); 
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Criar Produto
app.post('/api/produtos', async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4. Atualizar Produto
app.put('/api/produtos/:id', async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5. Deletar Produto
app.delete('/api/produtos/:id', async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ROTA QUE FALTOU: Listar Categorias
app.get('/api/categorias', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ROTA NOVA: Buscar UM produto pelo ID (Para a tela de Detalhes)
app.get('/api/produtos/:id', async (req, res) => {
  try {
    // Busca o produto e traz os dados da categoria juntos (.populate)
    const produto = await Produto.findById(req.params.id).populate('categoria');
    
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Acesse essa rota no navegador UMA VEZ para encher o banco
app.get('/api/criar-categorias-iniciais', async (req, res) => {
  try {
    // 1. Verifica se já existem para não duplicar
    const count = await Categoria.countDocuments();
    if (count > 0) {
      return res.send('⚠️ O banco já possui categorias cadastradas!');
    }

    // 2. Cria as categorias padrão
    await Categoria.insertMany([
      { nome: 'Receivers' },
      { nome: 'Toca-Discos' },
      { nome: 'Caixas Acústicas' },
      { nome: 'Amplificadores' },
      { nome: 'Tape Decks' },
      { nome: 'Acessórios' }
    ]);
    
    res.send('✅ Sucesso! Categorias criadas: Receivers, Toca-Discos, Caixas, etc.');
  } catch (erro) {
    res.status(500).send('❌ Erro ao criar: ' + erro.message);
  }
});

app.get('/', (req, res) => {
  res.send('API da Loja Vintage rodando! 🚀 Acesse /api/produtos para ver os dados.');
})
// Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));