// metodos o funciones en un objeto

const persona ={
    nombre: 'juan',
    trabajo: 'developer',
    experiencia: 43,
    musica: ['metalica','hip-hop'],
    mostrarInformacion: function () {
        console.log(`${this.nombre} es ${this.trabajo}, y su experiencia ${this.experiencia}`);
    }
}

persona.mostrarInformacion();