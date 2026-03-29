//callback anidado
/*function paso1(callback){
    setTimeout(()=>{
        console.log("Paso 1");
        callback();
    },1000);
}

function paso2(callback){
    setTimeout(()=>{
        console.log("Paso 2");
        callback();
    },1000);
}

function paso3(){
    setTimeout(()=>{
        console.log("Paso 3");
    },1000);
}

paso1(()=>{
    paso2(()=>{
        paso3();
    });
});*/
//promesa 
function ejecutar(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Paso " + num);
            resolve();
        },1000);
    });
}

async function miFuncion(){
    await ejecutar(1);
    await ejecutar(2);
    await ejecutar(3);
}

miFuncion();


