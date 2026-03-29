const miFuncion = (numeros) => {

    let pares = [];
    let impares = [];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    return { pares: pares, impares: impares };
}

let obj = miFuncion([1,2,3,4,5])
console.log(obj); 
