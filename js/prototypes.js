//prototypes
//sirve para ligar funciones a objetos , significa que esa funcion solo va a servir a Tarea.

//object constructor
function Tarea(nombre,urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//agregar prototype a tarea

Tarea.prototype.mostrarInformacionTarea = function () {
    return `la tarea ${this.nombre}, tiene una priodidad de ${this.urgencia}`
}

// crear una nueva tarea
const tarea1 = new Tarea('aprender Jv y React','urgente')

// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre,tarea1.urgencia);

console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
