// arrow functions

let viajando = (destino, duracion = '5 dias') => {
    return `Viajando a la ciudad de ${destino} por ${duracion}`;
}

let viaje = viajando('paris')

console.log(viaje);

// arrow functions solo con un argumento
let volviendo = destino => {
    return `estamos volviendo de ${destino}`;
}

console.log(volviendo('armenia'));

//arrow functions con un argumento sin llaves, 
//toma por hecho que devuelve  algo se da por implicito

let encesto = canastas => `haz encestado ${canastas} canastas`;
console.log(encesto('43'));