//importar

// import{ nombreTarea } from './tareas.js';
// console.log(nombreTarea);

//otra forma de importar

// import nombre from './tareas.js';
// console.log(nombre);

//importar varias
import {nombreTarea,crearTarea,tareaCompletada} from './tareas.js';

const tarea1 = crearTarea('pasear al perro','alta')
console.log(nombreTarea);
console.log(tarea1);
tareaCompletada();
