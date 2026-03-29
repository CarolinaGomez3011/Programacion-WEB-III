//La tarea es simple
//Solo necesitas ejecutar una acción después
//No hay muchas operaciones encadenadas
//callback 
function procesarDato(dato, callback){
    setTimeout(() => {
        console.log("Procesando dato...");
        callback(dato);
    }, 2000);
}

function mostrarResultado(resultado){
    console.log("Resultado:", resultado);
}

procesarDato("Hola", mostrarResultado);
//promesas
//Hay varias operaciones asíncronas
//Necesitas encadenar procesos
//Quieres manejar errores fácilmente
function procesarElDato(dato){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Procesando el dato...");
            resolve(dato);
        }, 2000);
    });
}

procesarElDato("Hola")
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(error => {
        console.log("Error:", error);
    });