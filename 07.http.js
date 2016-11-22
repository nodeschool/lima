var http= require("http");
var ruta=process.argv[2];
var subcallback=function(data){
    var valor=data;
    console.log(valor);
};
var callback= function(response){
    response.setEncoding("utf8").on("data",subcallback)
    /*var valor= response.setEncoding("utf8");
    console.log(valor);*/
};
http.get(ruta, callback);