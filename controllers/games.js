const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  res.send('You at GET /games')
})

module.exports = router;