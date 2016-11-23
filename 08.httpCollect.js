var http=require('http');
var ruta=process.argv[2];
http.get(ruta,function(response){
    response.setEncoding('utf8');
    var data='';
    response.on('data',function(c){
        data+=c;
    });
    response.on('end',function(){
        console.log(data.length);
        console.log(data);
    });
});