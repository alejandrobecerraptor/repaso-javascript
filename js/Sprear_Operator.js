// Sprear operator ...

// nos permite combinar dos arreglos diferentes

// let lenguajes = ['php','js','python'];
// let frameworks = ['laravel','react','Django'];

//unir los arreglos en 1 solo

// let combinacion = lenguajes.concat(frameworks);

// let combinacionNueva = [...lenguajes,...frameworks];
//duplicar el arreglo:
// let nuevoArreglo = [...lenguajes];


// console.log(combinacion);
// console.log(combinacionNueva);
// console.log(nuevoArreglo);

// let [ultimo] = lenguajes.reverse();

// let [ultimo] = [...lenguajes].reverse();

// console.log(ultimo);

function suma(a,b,c) {
    console.log(a+b+c);
};

const numeros = [1,2,3];

suma(...numeros);
