//14. Proporcione un ejemplo para convertir una promesa en un callback.
//obtener un usuario
// Versión con Promesa
function obtenerNombreUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) {
        reject(new Error("Usuario no encontrado"));
      } else {
        resolve("Ana");
      }
    }, 1000);
  });
}

// Versión convertida a Callback
function obtenerNombreUsuarioConCallback(id, callback) {
  obtenerNombreUsuario(id)
    .then(nombre => callback(null, nombre))   // Primer parámetro: error, segundo: resultado
    .catch(error => callback(error));         // En caso de error, se devuelve error
}

// Uso de la versión con Callback
obtenerNombreUsuarioConCallback(1, (error, nombre) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Nombre del usuario:", nombre);
  }
});
