"use strict";
//Para habilitar los object methods y uso estricto del script

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
};

const medidas = {
    peso : "1kg",
    medida : "1m"
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Spread Operator o Rest Operator
//Los dos puntos significa que "copie" el objeto
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);