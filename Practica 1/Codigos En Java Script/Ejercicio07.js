/*7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos
primeros elementos de un arreglo, mediante desestructuración*/
 let numeros = [10, 20, 30, 40, 50];
// Desestructurando los dos primeros, y el resto en otro arreglo
let [a, b, ...resto] = numeros;
console.log(a);
console.log(b);
console.log(resto);
