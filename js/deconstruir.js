//destructuring de objetos

const aprendiendoJS ={
    version: {
        nueva: 'ES6+',
        vieja: 'ES5'
    },
    framework: ['React','VueJs','AngularJs'],
    creador: 'Ronaldiño'
}

// Destrunturing es extraer valores de un objeto

//forma viejita
// console.log(aprendiendoJS);
// console.log(aprendiendoJS.version.nueva);

//forma nueva
let{version,framework} = aprendiendoJS;
let{vieja} = aprendiendoJS.version; // te voy a decir a donde ir let{vieja} y me lo sacas de aqui aprendiendoJS.version


console.log(version);
console.log(framework);
console.log(`let nueva ${vieja}`);
