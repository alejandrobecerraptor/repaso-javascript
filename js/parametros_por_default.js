//parametros por default en las funciones
const futbol = 'jugando de defensa';

function actividad(nombre = 'Walter White', actividad = futbol) {
  console.log(`la persona ${nombre} esta realizando la actividad ${actividad}`);
}

const actividad_2 = function(nombre = 'Walter White', actividad = futbol){
    console.log(`la persona ${nombre} esta realizando en la actividad 2 ${actividad}`);
}
actividad('juan',"aprender jv");
actividad();

actividad_2();
