var express = require('express');

var app = express();

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

app.set('view engine', 'ejs');

app.use( express.static( "public" ) );

app.get('/', function (req, res) {
  res.render('aboutme');
})

app.get('/projects', function (req, res) {
  res.render('projects');
})

app.get('/interests', function (req, res) {
  res.render('interests');
})

app.get('/contact', function (req, res) {
  res.render('contact');
})
