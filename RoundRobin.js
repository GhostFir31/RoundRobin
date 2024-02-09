
/*Variables*/

let id = 1;
let caracter = 'a';
let num1 = 1;
let num2 = 2;
let lista = [];
let contador = 0;
let numlista=0;
let numProcesos;

/*Programa*/

inicializarSimulacion();
empezarSimulacion();

/*Funciones*/

function crearProcesoNuevo() {
    let proceso;

    if (id > 1) {
        caracter = String.fromCharCode(caracter.charCodeAt(0) + 1);
    }

    proceso = {
        numeroProceso: id,
        cadena1: "" + caracter + "=" + num1 + "+" + num2,
        cadena2: "console.log(" + num1 + "+" + num2 + ")",
        cadena3: "console.log(" + caracter + ")",
    }

    id++;
    num1=num1+2;
    num2=num2+2;

    return proceso;
}

function escogerLinea(contador){

    switch (contador) {

        case 0: console.log(lista[numlista].cadena1); break;
        case 1: console.log(lista[numlista].cadena2); break;
        case 2: console.log(lista[numlista].cadena3); break;
    
    }
}

function inicializarSimulacion(){

    console.log("RoundRobin Algoritmo");
    console.log("Cuantos Procesos se Ejecutaran? ");
    numProcesos = process.argv[2] ? parseInt(process.argv[2]) : 1;
    console.log("El numero de procesos son: " + numProcesos);

    
}

function empezarSimulacion(){

    for (i = 0; i < numProcesos; i++) {
        lista[i] = crearProcesoNuevo();
    }
    
    do{
    
    while(numlista<lista.length){
    
    console.log("Proceso "+lista[numlista].numeroProceso);
    
    escogerLinea(contador); 
    
    numlista++;
    
    }
    
    contador++;
    
    numlista=0;
    
    }while(contador<3);


}