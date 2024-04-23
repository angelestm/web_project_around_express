const express = require('express');
const fs = require('fs');
const path = require('path');
const {getAllCards, createCard, deleteCard, likeCard, dislikeCard} = require("../controllers/cards");

const router = express.Router();

router.get('/', getAllCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

// // Lista JSON de todos los usuarios
// router.get('/', (req, res) => {
//   const filePath = path.join(__dirname, '..','data', 'cards.json');
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
//       return;
//     }
//
//     const cards = JSON.parse(data);
//     res.json(cards);
//   });
// });

module.exports = router;
