//15. Proporcione un ejemplo para convertir un callback en una promesa.
//leer datos de una persona
//Versión callback
function leerDatos(id, callback) {
  setTimeout(() => {
    if (id === 0) {
      callback(new Error("ID inválido"), null);
    } else {
      callback(null, { id, nombre: "Carlos" });
    }
  }, 1000);
}
//version promesa
function leerDatosPromesa(id) {
  return new Promise((resolve, reject) => {
    leerDatos(id, (error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

//leer con async y await
async function ejecutar() {
  try {
    const datos = await leerDatosPromesa(1);
    console.log("Datos:", datos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

ejecutar();

