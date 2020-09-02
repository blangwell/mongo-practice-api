const mongoose = require('mongoose');

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
  year: Number

})

module.exports = mongoose.model('Game', gameSchema);