function funcion(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Éxito después de 3 segundos");
        }, 3000);
    });
}

funcion()
    .then((mensaje) => {
        console.log(mensaje);
    });