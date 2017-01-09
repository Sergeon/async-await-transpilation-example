var Promise = require('bluebird');
var fruits = require('./service/promise');
var error = require('./service/throw');
var reject = require('./service/reject.js');

//any await call will work as blocking, if inside an async function.
//However, this 'blocking' code doesn't block the javascript animation.
async function getFruits(){
    var a = await fruits.get();
    var b = await fruits.get();
    console.log(a, b);
}


( async function(){
    await getFruits();

    //any error inside a function declared with the keyword 'async' will be 'casted'
    //to a rejected promise instead.
    error().catch(console.log);

    try{
        await reject();
    }catch(error){
        console.log('an error was catched:');
        //Viceversa, any rejected Promise after await is 'casted' to an Error
        console.log(error);
    }
})();

