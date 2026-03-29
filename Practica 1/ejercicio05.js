const miFuncion = (texto) => {

    let invertido = "";

    for(let i = texto.length - 1; i >= 0; i--){
        invertido += texto[i];
    }

    if(texto === invertido){
        return true;
    } else {
        return false;
    }
}

let band = miFuncion("oruro")
console.log(band); // true

let band2 = miFuncion("hola")
console.log(band2); // false