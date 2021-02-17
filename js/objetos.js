//objetos

//object literal

const persona = {
    nombre:'juan',
    profesion: 'desarrollador web',
    experiencia: 5
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona['profesion']);

//object constructor

function Tarea(nombre,urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// crear una nueva tarea
const tarea1 = new Tarea('aprender Jv y React','urgente')
const tarea2 = new Tarea('aprender crosfit','mañana')

console.log(tarea1);
console.log(tarea2);


