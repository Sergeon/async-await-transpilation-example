var Promise = require('bluebird');

module.exports = function reject(){
    return new Promise( function(resolve , reject){
        reject(new Error('Rejected promise'));
    });
};