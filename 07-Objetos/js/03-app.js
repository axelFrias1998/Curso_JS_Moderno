const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
};

//Agregar propiedades al objeto
producto.imagen = "imagen.jpg";
delete producto.disponible; 

console.log(producto);