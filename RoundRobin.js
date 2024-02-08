let id = 1;
let caracter = 97;
let num1 = 1;
let num2 = 2;
let lista = [];
let contador = 0;

console.log("RoundRobin Algoritmo");
console.log("Cuantos Procesos se Ejecutaran? ");
let numProcesos = process.argv[2] ? parseInt(process.argv[2]) : 1;
console.log("El numero de procesos son: " + numProcesos);

do {
  for (i = 0; i < numProcesos; i++) {
    lista[i] = crearProcesoNuevo();
  }

  switch (contador) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
  }

  contador++;
} while (contador < numProcesos);

function crearProcesoNuevo() {
  let proceso;

  if (id > 1) {
    caracter = caracter + id;
  }

  proceso = {
    numeroProceso: id,

    cadena1: "" + caracter + "=" + num1 + "+" + num2,
    cadena2: "console.log(" + num1 + "+" + num2 + ")",
    cadena3: "console.log(" + caracter + ")",
  }

  return proceso;
}
