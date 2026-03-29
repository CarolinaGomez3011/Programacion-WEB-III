//funcion con promesas
/*function verificar(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Exito");
        },2000);
    });
}

verificar().then(res => console.log(res));*/

//async await 
function verificar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Exito");
        },2000);
    });
}

async function miFuncion(){
    try{
        console.log(await verificar());
    }
    catch(mensaje){
        console.log(mensaje);
    }
}

miFuncion();