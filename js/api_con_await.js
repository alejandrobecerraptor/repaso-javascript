//api_con_await.js
//promises ajax

// const descargarUsuarios = cantidad = new Promise((resolve,reject) =>{
//     //pasar la cantidad a la api

//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     //llamado ajax

//     const xhr = new XMLHttpRequest();

//     //abrir la conexion

//     xhr.open('GET',api,true);

//     //on load

//     xhr.onload = () =>{
//         if(xhr.status === 200){
//             resolve(JSON.parse(xhr.responseText).results)
//         }else{
//             reject(error(xhr.statusText));
//         }
//     }

//     //opcional
//     xhr.onerror = (error) => reject(error);
//     //send
//     xhr.send()

// });

// descargarUsuarios(20)
//     .then(
//         miembros => console.log(miembros),
//         error => console.error(
//             new Error('hubo un error', + error)
//         )
//     )
async function getUserAsync(cantidad) {
    try {
      let response = await fetch(
        `https://randomuser.me/api/?results=${cantidad}&nat=us`
      );
      let data = await response.json();
      return data;
    } catch (error) {
      return "Ocurrio el siguiente error: " + error;
    }
  }
   
  getUserAsync(30)
    .then(
        miembros => imprimirHTML(miembros),
        error =>console.error(
            new Error('hubo un error' + error)
        )
    );

// function imprimirHTML(miembros) {
//     console.log(miembros.results);
    
// }

    function imprimirHTML (usuarios){
        let html='';
        console.log(usuarios.results);
        usuarios.results.forEach(usuario => {

             html+=`
             <li>
                 Nombre: ${usuario.name.first} ${usuario.name.last}
                 Pais: ${usuario.location.country}
                 Imagen: <img src="${usuario.picture.medium}">
             </li>
             `;
     
        });

        const contenedorApp = document.querySelector('#app');
        contenedorApp.innerHTML = html;
    }