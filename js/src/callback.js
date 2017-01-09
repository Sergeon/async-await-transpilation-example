var fruits = require('./service/callback');

var a ,b ,c = null;
//Here the use of the service is pretty straightforward: you got some callback hell.
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



