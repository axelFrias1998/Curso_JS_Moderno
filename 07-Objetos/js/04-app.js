const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
};

//OLD
// const nombre = producto.nombre;
// console.log(nombre);

//Object Destructuring. 
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);