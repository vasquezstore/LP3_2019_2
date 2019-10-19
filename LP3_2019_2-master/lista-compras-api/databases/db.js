const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/lista-compras-dev';

mongoose
     .connect(dbURI, {useNewUrlparser: true})
     .then(() =>console.log('Mongoose conectado'))
     .catch(erro => console.log(erro));
