const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  res.send('You at GET /games')
})

router.get('/:id', (req, res) => {
  res.send(`You at the GET show route! url params: ${req.params.id}`)
})

module.exports = router;