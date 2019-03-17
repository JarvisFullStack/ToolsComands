const  argv  = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let base = '5';


let comando = argv._[0];

switch(comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => console.log(`Archivo creado ${String(archivo).inverse.green}`))
        .catch(err => {
            console.log(err);
        });

        
    break;
    case 'listar':
        listarTabla(argv.base, argv.limite = 10);
    break;
    default:
        console.log('comando no reconocido');
}


