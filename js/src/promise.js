var fruits = require('./service/promise');

var a , b, c = null;

//Un simple tren de promesas: nos libramos del 'callback hell' pero es un poco feo
//y puede ser difícil de cambiar.
fruits.get()
.then( function(res){
    a = res;
    return fruits.get();
})
.then(function(res){
    b = res;
    return fruits.get();
}).then(function(res){
    c = res;
})
.then(function(){
    console.log(a,b,c);
});