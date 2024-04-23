const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');
const bodyParser = require('body-parser');

const app = express();
// detecta el puerto 3000
const {PORT = 3000} = process.env;

mongoose.connect('mongodb://localhost:27017/aroundb').then(() => {
  console.log('Conexión a MongoDB establecida con éxito');
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err.message);
});

// Configurar body-parser para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());
app.use('/users', users);
app.use('/cards', cards);
app.use((req, res, next) => {
  req.user = {_id: '661c478ebd5153d27f90c829'};
  next();
});
app.use((req, res) => {
  console.log("testing", req);
  res.status(404).json({message: 'Recurso solicitado no encontrado'});
});
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
})