function funcion(callback1){
    setTimeout(() => {
        callback1();
    }, 2000);
}

const mensaje = () => {
    console.log("Se ejecutó después de 2 segundos");
}

funcion(mensaje);