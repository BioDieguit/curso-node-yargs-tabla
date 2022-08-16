const argv=require('yargs')
                          .option('b',{
                            alias:'base',
                            type:'number',
                            demandOption:true,
                            describe:"Es la base de la tabla de multiplicar"
                          })
                          .option('l',{
                            alias:'listado',
                            type:'boolean',
                            default:false,
                            describe:"Muestra la tabla en la consola"
                          })
                          .option('e',{
                            alias:'exponente',
                            type:'number',
                            default:10,
                            describe:"Numero de veces que se repetira"
                          })
                          .check((argv,options)=>{
                            if(isNaN (argv.base)) {
                            throw ("No es un numero");
                            }
                            return true;  
                        })
                          .argv;

module.exports = {
                argv
               }