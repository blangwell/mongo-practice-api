const express = require('express');
const app = express();

// QUESTION : this middleware allows us to accept 
// traditional form data as well as json ?
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use('/games', require('./controllers/games'))

app.get('/', (req, res) => {
  res.send('Home route, homeboy')
})

app.listen(3000, () => {
  console.log('List\'nin\' to Port 3000')
})