var net=require('net');

Number.prototype.aDos=function(){
    var retorno='00'+this;
    retorno=retorno.substr(retorno.length-2);
    return retorno;
};

var server=net.createServer(function(socket){
    var date=new Date();
    var año=date.getFullYear();
    var mes=(date.getMonth()+1).aDos();
    var dia=date.getDate().aDos();
    var hora=date.getHours().aDos();
    var minuto=date.getMinutes().aDos();

    var resultado=año+'-'+mes+'-'+dia+' '+hora+':'+minuto+'\n';
    socket.end(resultado);
});
server.listen(process.argv[2]);