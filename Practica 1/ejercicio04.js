const miFuncion = (numeros) => {

    let mayor = numeros[0];
    let menor = numeros[0];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }

    return { mayor: mayor, menor: menor };
}

let obj = miFuncion([3,1,5,4,2])
console.log(obj);
