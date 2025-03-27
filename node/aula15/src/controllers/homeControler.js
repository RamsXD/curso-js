exports.paginaInicial = (req, res) => {
  req.flash("info", "ola");
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
