const express = require('express');
const fs = require('fs');
const path = require('path');
const {getAllUsers, getUser, createUser, updateProfile, updateAvatar} = require("../controllers/users");

const router = express.Router();

const filePath = path.join(__dirname, '..','data', 'users.json');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/me', updateProfile);
router.patch('/me/avatar', updateAvatar);

// Lista JSON de todos los usuarios
// router.get('/', (req, res) => {
//
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
//       return;
//     }
//
//     const users = JSON.parse(data);
//     res.json(users);
//   });
// });
//
// router.get('/:id', (req, res) => {
//   const userId = req.params.id;
//
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
//       return;
//     }
//
//     const users = JSON.parse(data);
//     const user = users.find(user => user._id === userId);
//
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'ID de usuario no encontrado' });
//     }
//   });
// });

module.exports = router;