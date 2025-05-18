const express = require('express');
const router = express.Router();
const Pacote = require('../models/pacote');

router.get('/', async (req, res) => {
  const pacotes = await Pacote.find();
  res.json(pacotes);
});

router.post('/', async (req, res) => {
  const novoPacote = new Pacote(req.body);
  await novoPacote.save();
  res.json(novoPacote);
});

module.exports = router;
