const express = require('express');
const app     = express();

app.set('views', 'views');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.render('home');
})

app.get('/about', (req, res, next) => {
  res.render('about');
})

app.get('/photogallery', (req, res, next) => {
  res.render('foto-gallery');
})

app.listen(3000, () => {
  console.log('basic site running...')
})
