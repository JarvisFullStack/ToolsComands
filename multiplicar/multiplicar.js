const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`${base} No es un numero`);
            return;

        }
        let data = '';
        for(let i =1;i<=limite;i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-to-${limite}.txt`, data, (err) => {
            if(err)    reject(err)
            else
                resolve(`tabla-${base}-to-${limite}.txt`);
        });
    });
}
let listarTabla = (base, limite) => {
    console.log('=========================================='.green);
    console.log(`====Tabla de ${base}====`.green);
    console.log('=========================================='.green);
        for(let i =1;i<=limite;i++) {
            
            console.log(`${base} * ${i} = ${base*i} \n`);
        }
}


module.exports = {
    crearArchivo,
    listarTabla
}