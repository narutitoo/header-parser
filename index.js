require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

// Ruta principal
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Ruta obligatoria para FreeCodeCamp
app.get('/api/whoami', function (req, res) {
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Puerto
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
