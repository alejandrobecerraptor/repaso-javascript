//Escribir clases

class Tarea {
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

// crear los objetos

let tarea1 = new Tarea('Aprender Javascript','Alta');
let tarea2 = new Tarea('preparar cafe','baja');
let tarea3 = new Tarea('conocer a mis suegros','media');



// console.log(tarea1.mostrar());
// console.log(tarea2);


//compras 
let compra1= new ComprasPendientes('jabon','alta','2');
compra1.mostrar();
console.log(compra1.hola()); 