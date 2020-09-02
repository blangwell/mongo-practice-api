const express = require('express');
const app = express();
require('dotenv');

const port = process.env.PORT || 3000;
const hostname = process.env.HOST || 'localhost';

// QUESTION : this middleware allows us to accept 
// traditional form data as well as json ?
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use('/games', require('./controllers/games'))

app.get('/', (req, res) => {
  res.send('Home route, homeboy')
})

app.listen(port, hostname, () => {
  console.log(`List\'nin\' to Port ${port}`)
})