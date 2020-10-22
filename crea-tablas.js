const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

//si bien por yarg limite recibe un valor, también lo podemos indicar en la signature gracias a EMACScript6 
let listarTabla = (base, limite = 10) => {
    //Lo implemento sin promesa, simplemente callback
    let data = '';

    console.log('======================================================='.red);
    console.log(`================== Tabla del ${base} ======================`.white);
    console.log('======================================================='.red);

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base*i} \n`;
    }
    console.log(data.green);
};




//otra forma de exportar seria module.export.creaTaba...pero se prefiere como está abajor
let crearTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('No es un número, por favor indique la base de la multiplicación');
            return; //Recordar que el reject devuelve el control, sino sigue la ejecución, por eso el return
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i} \n`;
        }

        fs.writeFile(`./tablas/tabla_del_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                resolve(`./tablas/tabla_del_${base}.txt`);
            }
            console.log('El archivo ha sido creado');
        });

    })
}

module.exports = {
    crearTabla,
    listarTabla
}