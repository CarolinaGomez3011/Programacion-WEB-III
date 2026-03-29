//promesa
/*function paso(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Hecho");
        },1000);
    });
}

paso()
.then(()=>paso())
.then(()=>paso())
.then(()=>console.log("Fin"));*/

//async await
function paso(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hecho");
        },1000);
    });
}

async function miFuncion(){
    try{
        console.log(await paso());
        console.log(await paso());
        console.log(await paso());
        console.log("Fin");
    }
    catch(e){
        console.log(e);
    }
}

miFuncion();