//2. Crear una función que invierta el orden de las palabras en una frase.
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}
let cad = invertirCadena("abcd");
console.log(cad);
