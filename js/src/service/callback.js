Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

module.exports = function(){

    var values = ['banana', 'apple' , 'Orange' , 'Coconut' , 'Grenade'];

    module.get = function(callback){
        setTimeout( function(){
            callback(values.sample() );
        } , 1000 );
    };

    return module;
}();