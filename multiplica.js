const { creaTabla } = require('./crea-tablas.js'); //js es opcional y en general no seusa

let tablaDel = '3';

//VERSION CON REJECT
//creaTabla(tablaDel).then(archivo => {
//   console.log(`El archivo creado es el: ${archivo}`);
//}, err => {
//    console.log(`El archivo NO creado: ${err}`);
//});

//Versión con catch
creaTabla(tablaDel)
    .then(archivo => console.log(`El archivo creado es el: ${archivo}`))
    .catch(error => console.log(error));