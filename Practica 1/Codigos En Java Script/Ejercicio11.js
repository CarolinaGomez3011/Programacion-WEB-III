/*11. Proporcione un ejemplo concreto de encadenamiento de promesas. Y haga un código*/

//Obtener los datos de un usuario desde una "base de datos"
//obtener un usuario
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: id, nombre: "Ana" });
    }, 1000);
  });
}
//obtener las ordenes del usuario
function obtenerOrdenesDeUsuario(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Órdenes obtenidas para ${usuario.nombre}`);
      resolve(["orden1", "orden2", "orden3"]);
    }, 1000);
  });
}
// Procesamiento de órdenes
function procesarOrdenes(ordenes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Órdenes procesadas:", ordenes);
      resolve("Procesamiento completo");
    }, 1000);
  });
}
// Encadenamiento de promesas
obtenerUsuario(1)
  .then(usuario => obtenerOrdenesDeUsuario(usuario))
  .then(ordenes => procesarOrdenes(ordenes))
  .then(resultadoFinal => console.log(resultadoFinal))
  .catch(error => console.error("Ocurrió un error:", error));
