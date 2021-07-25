"use strict";
//Para habilitar los object methods y uso estricto del script

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//No permite agregar ni eliminar propiedades
Object.seal(producto);
console.log(Object.isSealed(producto));

producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);