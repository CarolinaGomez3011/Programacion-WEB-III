/*4. Crear una función que reciba un arreglo de números y devuelva el número mayor y
el menor, en un objeto.*/
function miFuncion(arreglo) {
    let mayor = Math.max(...arreglo);
    let menor = Math.min(...arreglo);
    return { mayor: mayor, menor: menor };
}
let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj);
