var Promise = require('bluebird');
var fruits = require('./callback');



module.exports = {

    get : function(){
        return new Promise( function(resolve){
            fruits.get(resolve);
        });
    }
};