var Promise = require('bluebird');
var fruits = require('./service/promise');
var error = require('./service/throw');
var reject = require('./service/reject.js');

/*Cualquier llamada precedida por 'await' dentro de una función declarada con 'async'
se comporta como código bloqueante:
la segunda llamada sólo empezará cuando la primera promesa se haye satisfecha.
Sin embargo, este código 'bloqueante' no es verdaderamente tal, y no bloqueará
animaciones en curso o interacciones del usuario.
*/
async function getFruits(){
    var a = await fruits.get();
    var b = await fruits.get();
    console.log(a, b);
}


( async function(){
    await getFruits();

    /*Cualquier error dentro de una función declarada con 'async' se transforma
    automáticamente en una promesa rechazada*/
    error().catch(console.log);

    try{
        await reject();
    }catch(error){
        console.log('an error was catched:');
        //Viceversa, cualquier promesa rechazada después de 'await' se transforma en un Error
        console.log(error);
    }
})();

