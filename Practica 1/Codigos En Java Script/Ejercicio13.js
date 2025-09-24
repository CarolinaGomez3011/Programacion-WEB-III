/*13. Proporcione un ejemplo concreto donde el anidamiento de promesas se
puede reescribir mejor con async/await haciendo el código más limpio y mantenible.*/
//obtener usuario y sus pedidos
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id, nombre: "Carlos" });
    }, 1000);
  });
}
function obtenerPedidos(usuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Pedidos obtenidos para ${usuario.nombre}`);
      resolve([
        { producto: "Libro", precio: 20 },
        { producto: "Lápiz", precio: 2 },
        { producto: "Mochila", precio: 35 }
      ]);
    }, 1000);
  });
}
function calcularTotal(pedidos) {
  return new Promise(resolve => {
    setTimeout(() => {
      const total = pedidos.reduce((suma, pedido) => suma + pedido.precio, 0);
      console.log("Total calculado");
      resolve(total);
    }, 1000);
  });
}
// Promesas encadenadas con anidamiento
/*obtenerUsuario(1)
  .then(usuario => {
    return obtenerPedidos(usuario)
      .then(pedidos => {
        return calcularTotal(pedidos)
          .then(total => {
            console.log(`Total de pedidos: $${total}`);
          });
      });
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });*/
//Versión con async y await
async function procesarPedidosDeUsuario(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const pedidos = await obtenerPedidos(usuario);
    const total = await calcularTotal(pedidos);
    console.log(`Total de pedidos: $${total}`);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}
procesarPedidosDeUsuario(1);
