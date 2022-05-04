const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const message = "Está vivo!!!";

app.get('/', (_req, res) => {
  return res.send(message);
});

app.listen(PORT, () => {
  console.log(`App escutando na porta ${PORT}`);
});
