//Object literal
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
};

console.log(producto);

//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Tablet", 200);
console.log(producto2)
