const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  preco: { type: Number, required: true },
  
  especificacoes: {
    potencia: String,
    impedancia: String,
    ano: Number
  },
  
  imagemUrl: String,
  

  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria'
  }, 

  descricao: String, // Agora ele está no lugar certo (na raiz do produto)

  dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produto', ProdutoSchema);