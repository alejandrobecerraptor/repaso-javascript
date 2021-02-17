//metodos en arreglos:

const personas = [
    {nombre:'juan',edad:23,aprendiendo:'js'},
    {nombre:'alejandr',edad:233,aprendiendo:'javascript'},
    {nombre:'miguel',edad:234,aprendiendo:'php'},
    {nombre:'tomas',edad:25,aprendiendo:'phyton'},
    {nombre:'el chinga',edad:263,aprendiendo:'php'},
]

console.log(personas);

//filtrar quienes son mayores de 28 años

const mayores = personas.filter(persona =>{
    return persona.edad >28;
});

console.log(mayores);

//que aprende alejandra

const alejandra = personas.find(persona =>{
    return persona.nombre == 'alejandr';
});

console.log(alejandra);
console.log(`Alejandra esta aprendiendo ${alejandra.aprendiendo} y tiene ${alejandra.edad} años`);

let total = personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
},0);

console.log(personas.length);
console.log(`la suma de las edades es ${total} y su promedio entre todos es ${total / personas.length}`);