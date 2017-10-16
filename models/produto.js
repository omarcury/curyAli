var mongoose = require('mongoose');

var Produto = mongoose.model('Produto', {
  codigo: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  vigencia: {
    type: Number
  }
})

module.exports = {Produto};
