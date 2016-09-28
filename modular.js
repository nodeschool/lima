var modulo=require('./modulo');
var ruta=process.argv[2];
var ext=process.argv[3];

var callback=function(error,data){
    if(error) return console.error(error);
    data.forEach(function(i){
        console.log(i);
    });
};

modulo(ruta,ext,callback);
