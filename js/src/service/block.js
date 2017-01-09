Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

var values = ['Plátano', 'Manzana' , 'Naranja' , 'Coco' , 'Granada'];

//Una función que devuelve una fruta al azar después de un segundo.
//El tiempo de espera de un segundo bloquea javascript mediante un bucle while. 
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


