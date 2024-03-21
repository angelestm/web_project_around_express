const express = require('express');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
// detecta el puerto 3000
const { PORT = 3000 } = process.env;

app.use('/users', users);
app.use('/cards', cards);

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
})