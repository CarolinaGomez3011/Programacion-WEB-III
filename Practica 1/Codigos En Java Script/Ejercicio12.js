/*12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.*/
//Obtener un usuario, Obtener los posts del usuario. Y mostrar los resultados.
//Funcion con anidacion
/*function obtenerUsuario(id, callback) {
  setTimeout(() => {
    console.log("Usuario obtenido");
    callback(null, { id, nombre: "Laura" });
  }, 1000);
}
function obtenerPostsDelUsuario(usuario, callback) {
  setTimeout(() => {
    console.log(`Posts obtenidos para ${usuario.nombre}`);
    callback(null, ["post1", "post2", "post3"]);
  }, 1000);
}
function mostrarPosts(posts, callback) {
  setTimeout(() => {
    console.log("Mostrando posts:", posts);
    callback(null, "Proceso completado");
  }, 1000);
}
// Anidamiento de callbacks o Callback Hell
obtenerUsuario(1, (err, usuario) => {
  if (err) return console.error(err);
  obtenerPostsDelUsuario(usuario, (err, posts) => {
    if (err) return console.error(err);
    mostrarPosts(posts, (err, resultado) => {
      if (err) return console.error(err);
      console.log(resultado);
    });
  });
});*/
//Este código tiene mucha anidación, lo cual se hará más difícil de mantener si se siguen con este.
//Por lo que se utiliza este otro código 
function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id, nombre: "Laura" });
    }, 1000);
  });
}
function obtenerPostsDelUsuario(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Posts obtenidos para ${usuario.nombre}`);
      resolve(["post1", "post2", "post3"]);
    }, 1000);
  });
}
function mostrarPosts(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mostrando posts:", posts);
      resolve("Proceso completado");
    }, 1000);
  });
}

// Código limpio con async/await
async function ejecutarProceso() {
  try {
    const usuario = await obtenerUsuario(1);
    const posts = await obtenerPostsDelUsuario(usuario);
    const resultado = await mostrarPosts(posts);
    console.log(resultado);
  } catch (error) {
    console.error("Error en el proceso:", error);
  }
}
ejecutarProceso();
