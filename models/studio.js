const mongoose = require('mongoose');

let studioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String
})

module.exports = mongoose.model('Studio', studioSchema)