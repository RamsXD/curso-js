const Cachorro = require("./z/mod2");

const c1 = new Cachorro("Dog");
c1.latir();

const path = require("path");
console.log(path.resolve(__dirname, '../../arquivos/imagens'))
console.log(__filename);
console.log(__dirname);
