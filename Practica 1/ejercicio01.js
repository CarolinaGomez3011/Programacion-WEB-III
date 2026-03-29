const miFuncion = (texto) => {
//se crean contabilizadores
    let cont_a=0, cont_e=0, cont_i=0, cont_o=0, cont_u=0;

    for(let i=0;i<texto.length;i++){
        if(texto[i]==="a") cont_a++;
        if(texto[i]==="e") cont_e++;
        if(texto[i]==="i") cont_i++;
        if(texto[i]==="o") cont_o++;
        if(texto[i]==="u") cont_u++;
    }

    return {a:cont_a, e:cont_e, i:cont_i, o:cont_o, u:cont_u};
}

let obj = miFuncion("euforia")
console.log(obj);