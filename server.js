const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/penaestrada');

app.use('/api/pacotes', require('./routes/pacoteRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
