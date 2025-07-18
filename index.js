const express = require('express');
const requestIp = require('request-ip');
const app = express();

// Middleware para detectar IP real
app.use(requestIp.mw());

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.clientIp || 'unknown',
    language: req.headers['accept-language'] || 'unknown',
    software: req.headers['user-agent'] || 'unknown'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});