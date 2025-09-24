//1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto. 
function miFuncion(texto) {
    let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    texto = texto.toLowerCase();
    const vocales = "aeiou";
    for (let char of texto) {
        if (vocales.includes(char)) {
            resultado[char]++;
        }
    }
    return resultado;
}
let obj = miFuncion("mariana");
console.log(obj);
