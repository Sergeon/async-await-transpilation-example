var fruits = require('./service/callback');

var a ,b ,c = null;

//El uso estándar de una función asíncrona: tendremos un poco de 'callback hell'.
fruits.get(function(fruit){
    a = fruit;
    fruits.get( function(fruit){
        b = fruit;
        fruits.get(function(fruit){
            c = fruit;
            console.log(a, b , c);
        });
    });
});



