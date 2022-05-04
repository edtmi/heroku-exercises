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

/*
Exercício 3. Simule o deploy em multi-ambientes (produção e homologação). Para isso:

Renomeie o remote do deploy dos exercícios anteriores para homolog;
RESP: git remote rename heroku homolog

Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod;
RESP: heroku create --remote prod
      git remote rename heroku prod
Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.
RESP: heroku config:set NEW_TEXT="texto do HOMOLOG" --app stormy-chamber-32594
      heroku config:set NEW_TEXT="texto do PROD" --app intense-oasis-66481  
*/
