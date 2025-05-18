const express = require('express');
const router = express.Router();
const Reserva = require('../models/reserva');

router.get('/', async (req, res) => {
  const reservas = await Reserva.find();
  res.json(reservas);
});

router.post('/', async (req, res) => {
  const novaReserva = new Reserva(req.body);
  await novaReserva.save();
  res.json(novaReserva);
});

module.exports = router;
