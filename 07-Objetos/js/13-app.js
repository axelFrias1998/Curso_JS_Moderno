const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
};

//Arreglo de llaves. Se puede utilizar para saber si el objeto tiene valores
console.log(Object.keys(producto));

//Arreglo de valores
console.log(Object.values(producto));

//Todo en pares
console.log(Object.entries(producto));