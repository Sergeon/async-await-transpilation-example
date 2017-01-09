Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

var values = ['banana', 'apple' , 'Orange' , 'Coconut' , 'Grenade'];

module.exports = function(){

    module.get = function(){

        var initTime = new Date().getTime();
        while(true){
            var now = new Date().getTime();
            if(now > initTime + 1000)
                return values.sample();
        }
    };

    return module;
}();


