/**
 * Vamos a ver como recibir parámetros de la linea de comandos con el objeto process
 * Utilizamos yargs
 */
const { crearTabla, listarTabla } = require('./crea-tablas'); //js es opcional y en general no seusa
//Toma la configuración de los parámetros
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0]; //obtiene el primer comando

switch (comando) {
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado es: ${colors.red(archivo)}`))
            .catch(error => console.log(error));
        break;
    case 'listar':
        //no se usa promesa
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}