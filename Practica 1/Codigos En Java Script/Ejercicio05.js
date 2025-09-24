/*5. Crear una función que determine si una cadena es palíndromo
(se lee igual al derecho y al revés).*/
function miFuncion(cadena) {
    //convertir a minusculas
    cadena = cadena.toLowerCase();
    // Invertimos la cadena
    let invertida = cadena.split('').reverse().join('');
    return cadena === invertida;
}
let band1 = miFuncion("oruro");
console.log(band1);
let band2 = miFuncion("hola");
console.log(band2);
