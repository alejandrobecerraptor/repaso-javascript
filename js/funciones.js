// creando una funcion

//Function declaration : se puede llamar en cualquier sitio , porque primero
// lee todas las funciones y luego las llama
saludar('Miguel')

function saludar(variable){
    console.log('bienvenido',variable);
    console.log(`Bienvenido NUEVO ${variable}`);
}

saludar('alejandro')

//Function expression: no se puede llamar antes de crearla, Genera un error.

const cliente = function(nombreCliente){
    console.log(`mostrando datos del cliente: ${nombreCliente}`);
}

cliente('juan')