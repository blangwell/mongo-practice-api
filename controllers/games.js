const router = require('express').Router();
const db = require('../models');

let statusCode = (status, message) => {
  res.status(status).send({message: message})
}

router.get('/', (req, res) => {
  db.Game.find()
  .then(games => {
    console.log(games)
    res.send(games)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({message: 'Database sleep'}) // 503 service unavailable 
  })
})

router.get('/:id', (req, res) => {
  db.Game.findById({
    _id: req.params.id
  })
  .then(game => {
    game ? res.send(game) 
    : res.status(404).send({message: 'Resource not located'})
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({message: 'Service Unavailable'})
  })
  // res.send(`You at the GET show route! url params: ${req.params.id}`)
})

router.post('/', (req, res) => {
  db.Game.create(req.body)
  .then(game => {
    console.log(game)
    res.status(201).send(game)
  })
  .catch(err => {
    console.log('ERROR CREATING ', err)
    err.name === 'Validation Error' 
    ? res.status(406).send({message: 'Validation Error'})
    : res.status(503).send({message: 'Database or server error'})
  })
})

router.put('/:id', (req, res) => {
  db.Game.findOneAndUpdate({
    _id: req.params.id
  },
  req.body,
  {
    new: true
  })
  .then(game => {
    console.log(game)
    res.send(game)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({message: 'Server Error'})
  })
})

router.delete('/:id', (req, res) => {
  db.Game.findByIdAndDelete(req.params.id)
  .then(() => res.status(204).send({message: 'Deleted it'})
  )
  .catch(err => res.status(503).send({message: 'Server Error'}))
})

module.exports = router;