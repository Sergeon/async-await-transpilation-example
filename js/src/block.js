
var fruit = require('./service/block');

//Aquí, la llamada a fruit.get() desde block.js bloquea la animación de
//fadeOut del cuadrado.
console.log(fruit.get());
console.log(fruit.get());
console.log(fruit.get());


