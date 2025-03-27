module.exports = (req, res, next) => {
  // if (req.body.cliente) {
  //   req.body.cliente = req.body.cliente.replace('Miranda', 'NAO USE MIRANDA')
  //   console.log(`Vi que você postou ${req.body.cliente}`);
  // }
  next();
};
