const express = require('express');
const app = express();

// Ruta principal opcional (puede evitar el "Cannot GET /")
app.get('/', (req, res) => {
  res.send(index.html);
});

// Ruta requerida por el proyecto
app.get("/api/whoami", (req, res) => {
  const ip = req.headers["x-forwarded-for"]?.split(',')[0] || req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// Escucha en el puerto que Render provee o 3000 localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
