const HomeModel = require("../models/HomeModel");

HomeModel.find()
  // .create({
  //   titulo: "Outra coisa qualquer",
  //   descricao: "Outra descrição.",
  // })
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
  // console.log(`'paginaInicial' Olha o que tem na req.session.nome ${req.session.nome}`)
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
