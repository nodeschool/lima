var http=require('http');
var contador=1;
var callback=function(){
    contador++;
    if(contador<process.argv.length){
        var ruta=process.argv[contador];
        http.get(ruta,function(response){
            var data='';
            response.setEncoding('utf8');
            response.on('data',function(c){
                data+=c;
            });
            response.on('end',function(){
                console.log(data);
                callback();
            });
        });
    }else{
        return;
    }
};
callback();