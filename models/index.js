const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vibeogane', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to DB at ${db.host}: ${db.port}`);
})

db.on('error', (err) => {
  console.log(`DB error ${err}`);
})

module.exports.Game = require('./game');
