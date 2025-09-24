//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos
const promesaExito = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Éxito: Promesa resuelta después de 3 segundos");
        }, 3000);
    });
};
promesaExito().then(mensaje => console.log(mensaje));
