require('dotenv').config();
var express = require('express');
var cors = require('cors');
var app = express();

// ✅ Permite que la API sea accesible desde cualquier origen (necesario para FCC tests)
app.use(cors({ optionsSuccessStatus: 200 }));

// ✅ Sirve archivos estáticos de la carpeta "public"
app.use(express.static('public'));

// ✅ Muestra el HTML principal cuando se accede a la raíz "/"
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// ✅ Ruta de prueba
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// ✅ Ruta principal solicitada por freeCodeCamp
app.get('https://github.com/narutitoo/header-parser/api/whoami', (req, res) => {
  res.json({
    // ✅ Punto 2: Devuelve la IP del cliente en la clave "ipaddress"
    ipaddress: req.ip,

    // ✅ Punto 3: Devuelve el idioma preferido del cliente en la clave "language"
    language: req.headers['accept-language'],

    // ✅ Punto 4: Devuelve información del software/navegador en la clave "software"
    software: req.headers['user-agent']
  });
});

// ✅ Arranca el servidor
var listener = app.listen(process.env.PORT || 1000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
