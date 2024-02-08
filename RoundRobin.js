let id = 1;
let caracter = 'a';
let num1 = 1;
let num2 = 2;
let lista = [];
let contador = 0;

console.log("RoundRobin Algoritmo");
console.log("Cuantos Procesos se Ejecutaran? ");
let numProcesos = process.argv[2] ? parseInt(process.argv[2]) : 1;
console.log("El numero de procesos son: " + numProcesos);


  for (i = 0; i < numProcesos; i++) {

    lista[i] = crearProcesoNuevo();
    
  }

  switch (contador) {

    case 0: console.log(lista[contador].proceso.numeroProceso); break;

    case 1: console.log(lista[contador].proceso.cadena1); break;

    case 2:console.log( lista[contador].proceso.cadena2); break;

    case 3: console.log(lista[contador].proceso.cadena3); break

  }


function crearProcesoNuevo() {
  let proceso;

  if (id > 1) {
    caracter = String.fromCharCode(caracter.charCodeAt(0) + 1);;
  }

  proceso = {

    numeroProceso: id,
    cadena1: "" + caracter + "=" + num1 + "+" + num2,
    cadena2: "console.log(" + num1 + "+" + num2 + ")",
    cadena3: "console.log(" + caracter + ")",

  }

  id++;
  return proceso;
}
