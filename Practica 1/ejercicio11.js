function paso1(){
    return new Promise(resolve => {
        setTimeout(() => resolve(5), 1000); //se establece el numero 5 para operar
    });
}

function paso2(num){
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 2), 1000);
    });
}

paso1()
    .then(res => paso2(res))
    .then(res => console.log(res)); // resultado