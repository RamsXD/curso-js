const express = require("express");
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET    PUT   DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000);
