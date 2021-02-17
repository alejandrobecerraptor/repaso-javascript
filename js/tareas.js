//exportar estas variables,funciones etc

export const nombreTarea = 'pasear al perro';

//otra forma de exportar, solo se puede tener un export default por documento

// const nombre = 'juan';
// const edad = 20;
// export default {
//     nombre:nombre,
//     tarea: edad
// }

//exportar una funcion

export const crearTarea = (tarea,urgencia) =>{
    return `la tarea ${tarea} tiene una urgencia ${urgencia}`
}

export const tareaCompletada = () =>{
    console.log('se completo la tarea');
}

//exportar clases
export default class Tarea {
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        console.log( `${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){ // reescribimos el metodo de la clase tarea, aqui en compras pendientes
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
    hola(){
        return 'hola';
    }
}