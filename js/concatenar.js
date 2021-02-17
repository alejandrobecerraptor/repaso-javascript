const nombre = 'alejandro';
const trabajo = 'developer';

console.log(`nombre: ${nombre} y trabajo en ${trabajo}`);
console.log('nombre con comas:', nombre);


const contenedorApp = document.querySelector('#app');

// let html = '<ul>' +
//                 '<li> nombre:' + nombre + '</li>' +
//                 '<li> trabajo:' + trabajo + '</li>' +
//             '</ul>'

let html = `
            <ul>
                <li>nombre: ${nombre} </li>
                <li>trabajo: ${trabajo} </li>
            `;

contenedorApp.innerHTML = html;
