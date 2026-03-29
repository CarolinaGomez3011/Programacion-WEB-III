//callback
/*function verificarCallback(callback){
    setTimeout(()=>{
        callback("Exito");
    },2000);
}
verificarCallback((mensaje)=>{
    console.log(mensaje);
});*/
//promesa
function verificar(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Exito");
        },2000);
    });
}

// uso
verificar().then((mensaje)=>{
    console.log(mensaje);
});