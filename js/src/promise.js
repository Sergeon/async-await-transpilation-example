var fruits = require('./service/promise');

var a , b, c = null;

//simple promise train: get rid of callback hell but still pretty ugly.
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