let numeros = [10, 20, 30, 40, 50];

// desestructuración
let [a, b, ...resto] = numeros;

console.log(a);      // mustra el 10
console.log(b);      // muestra el 20
console.log(resto);  // muestra el resto