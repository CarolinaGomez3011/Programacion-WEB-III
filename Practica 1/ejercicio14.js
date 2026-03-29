//promesa
/*function verificar(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Exito");
        },2000);
    });
}

// uso
verificar().then((mensaje)=>{
    console.log(mensaje);
});*/

//callback
function verificarCallback(callback){
    setTimeout(()=>{
        callback("Exito");
    },2000);
}

// uso
verificarCallback((mensaje)=>{
    console.log(mensaje);
});