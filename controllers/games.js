const router = require('express').Router();
const db = require('../models');

let statusCode = (status, message) => {
  res.status(status).send({message: message})
}

router.get('/', (req, res) => {
  res.send('You at GET /games')
  db.Game.find()
  .then(games => {
    console.log(games)
    res.send(games)
  })
  .catch(err => {
    console.log(err)
    statusCode(503, 'Database SLEEP 😴')
  })
})

router.get('/:id', (req, res) => {
  db.Game.findById({
    _id: req.params.id
  })
  .then(game => {
    game ? res.send(game) : statusCode(404, 'resource not located')
  })
  .catch(err => {
    console.log(err)
    statusCode(503, 'service unavailable ☹️')
  })
  // res.send(`You at the GET show route! url params: ${req.params.id}`)
})

router.post('/', (req, res) => {
  db.Game.create(req.body)
  .then(game => {
    console.log(game)
    res.status(201).send(createdBounty)
  })
  .catch(err => {
    console.log('ERROR CREATING ', err)
    err.name === 'Validation Error' ? statusCode(406, 'validation error')
    : statusCode(503, 'DB or server error')
  })
  // res.send(`You at the POST route. You must be lost`)
})

router.put('/:id', (req, res) => {
  res.send(`Back up in that PUT route with the resurrection`)
})

router.delete('/:id', (req, res) => {
  res.send(`DELETE route 🔫`)
})

module.exports = router;