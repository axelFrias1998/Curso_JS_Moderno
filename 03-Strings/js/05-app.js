const producto = "Monitor 20 pulgadas";

console.log(producto);
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor curvo"));

//Slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(5));
console.log(producto.slice(2, 1));

//Substring es alternativa de slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "Axel";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));