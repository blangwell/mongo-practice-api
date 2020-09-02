const mongoose = require('mongoose');

let studioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String
})

let gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  esrb: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10
  },
  year: Number,
  studio: [studioSchema]
})

module.exports = mongoose.model('Game', gameSchema);