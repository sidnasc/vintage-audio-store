const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },   // Ex: "Receiver Akai AA-A35"
  marca: { type: String, required: true },  // Ex: "Akai"
  preco: { type: Number, required: true },
  especificacoes: {                         // Dados flexíveis (típico de NoSQL)
    potencia: String,
    impedancia: String,
    ano: Number
  },
  imagemUrl: String,                        // Link da foto
  categoria: {                              // RELACIONAMENTO
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  }
});

module.exports = mongoose.model('Produto', ProdutoSchema);