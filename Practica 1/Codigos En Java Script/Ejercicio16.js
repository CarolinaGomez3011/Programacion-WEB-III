//16. Proporcione un ejemplo para migrar una función con promesas a async/await.
//obtener el total de pedidos
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, nombre: "María" });
    }, 500);
  });
}
function obtenerPedidos(usuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { producto: "Libro", precio: 20 },
        { producto: "Cuaderno", precio: 10 }
      ]);
    }, 500);
  });
}
function calcularTotal(pedidos) {
  return new Promise(resolve => {
    setTimeout(() => {
      const total = pedidos.reduce((suma, p) => suma + p.precio, 0);
      resolve(total);
    }, 500);
  });
}
//Versión con promesas
function procesarPedidos(id) {
  obtenerUsuario(id)
    .then(usuario => {
      return obtenerPedidos(usuario);
    })
    .then(pedidos => {
      return calcularTotal(pedidos);
    })
    .then(total => {
      console.log(`Total: $${total}`);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
//migrado con async y await 
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, nombre: "María" });
    }, 500);
  });
}
function obtenerPedidos(usuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { producto: "Libro", precio: 20 },
        { producto: "Cuaderno", precio: 10 }
      ]);
    }, 500);
  });
}
function calcularTotal(pedidos) {
  return new Promise(resolve => {
    setTimeout(() => {
      const total = pedidos.reduce((suma, p) => suma + p.precio, 0);
      resolve(total);
    }, 500);
  });
}
async function procesarPedidos(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const pedidos = await obtenerPedidos(usuario);
    const total = await calcularTotal(pedidos);
    console.log(`Total: $${total}`);
  } catch (error) {
    console.error("Error:", error);
  }
}
procesarPedidos(1);
