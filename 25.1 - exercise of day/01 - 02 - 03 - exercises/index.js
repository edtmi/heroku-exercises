const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

//2- Modifique o código da sua API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.
const message = process.env.NEW_TEXT || "Está vivo!!!";

app.get('/', (_req, res) => {
  return res.send(message);
});

app.listen(PORT, () => {
  console.log(`App escutando na porta ${PORT}`);
});
