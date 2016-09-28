var fs=require('fs');
var ruta=process.argv[2];
var ext=process.argv[3];
fs.readdir(ruta,function(error,lista){
    if(error!=null){
        console.log(error);
    }
    else{
        lista.filter(function(i){
            return i.endsWith('.'+ext);
        }).forEach(function(j){
            console.log(j);
        });
    }
});