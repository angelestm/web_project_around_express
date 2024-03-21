const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Lista JSON de todos los usuarios
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..','data', 'cards.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
      return;
    }

    const cards = JSON.parse(data);
    res.json(cards);
  });
});

module.exports = router;
