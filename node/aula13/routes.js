const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeControler.js");
const contatoController = require("./src/controllers/contatoController.js");

function meuMiddleware(req, res, next) {
  req.session = { nome: "Luiz", sobrenome: "Miranda" };
  console.log();
  // console.log("Passei meu middleware.");
  // console.log(`ultimo middleware' Olha o que tem na req.session.nome ${req.session.nome}`);
  next();
}

// Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
