"use strict";
//Para habilitar los object methods y uso estricto del script

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto);
console.log(Object.isFrozen(producto));

producto.imagen = "imagen.jpg";
producto.disponible = false;

console.log(producto);