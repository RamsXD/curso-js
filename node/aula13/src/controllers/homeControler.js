exports.paginaInicial = (req, res) => {
  res.render("index");
  // console.log(`'paginaInicial' Olha o que tem na req.session.nome ${req.session.nome}`)
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
