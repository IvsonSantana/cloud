const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  cliente: String,
  hotel: String,
  dataEntrada: Date,
  dataSaida: Date
});

module.exports = mongoose.model('Reserva', ReservaSchema);
