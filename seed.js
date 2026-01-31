require('dotenv').config();
const mongoose = require('mongoose');
const Categoria = require('./src/models/Categoria');

// Conexão com o Banco (Mesma string do server.js)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/vintage_audio')
  .then(() => console.log('MongoDB Conectado para Carga Inicial...'))
  .catch(err => console.log(err));

const seedCategorias = async () => {
  const categoriasIniciais = [
    { nome: 'Receivers', descricao: 'Receptores de áudio estéreo vintage' },
    { nome: 'Caixas de Som', descricao: 'Monitores de áudio e caixas acústicas' },
    { nome: 'Toca-Discos', descricao: 'Turntables e vitrolas' },
    { nome: 'Amplificadores', descricao: 'Power amps e pré-amplificadores' }
  ];

  try {
    // Limpa categorias antigas para não duplicar (opcional)
    await Categoria.deleteMany({});
    
    // Insere as novas
    await Categoria.insertMany(categoriasIniciais);
    console.log('✅ Categorias criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar categorias:', error);
  } finally {
    mongoose.connection.close(); // Fecha a conexão
  }
};

seedCategorias();