const mongoose = require('mongoose');

const PacoteSchema = new mongoose.Schema({
  destino: String,
  preco: Number,
  dataSaida: Date,
  dataRetorno: Date
});

module.exports = mongoose.model('Pacote', PacoteSchema);
