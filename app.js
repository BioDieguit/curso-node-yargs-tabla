const { crearArchivo} = require('./helpers/multiplicar'); 
const { argv} = require('./Config/yargs'); 

console.clear();

crearArchivo(argv.base,argv.listado,argv.exponente)
                .then(nombreArchivo=>console.log(`El nombre del archivo es: ${nombreArchivo}`))
                .catch(error=>console.log(error));



