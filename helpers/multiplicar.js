const fs=require('fs');

const crearArchivo = async (base , lista , limite) =>{

    try {
        let salida='';

           for(let i=1; i<=limite; i++){
                let resultado = base * i;
                salida+=`${base} x ${i} = ${resultado}\n`;
             }
     
    if(lista) { 
        console.log("===========")
        console.log(`Tabla del ${base}`)
        console.log("===========")
        console.log(salida);
    } 

    fs.writeFileSync(`./Tablas-impresas/tabla-${base}.txt`, salida);
         return (`tabla-${base}.txt` )
    } catch (error) {
        throw error    ;
    }  

}

module.exports = {
             crearArchivo
}