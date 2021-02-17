//promises
// resolve, llamado al promise es correcto y Reject, cuando hubo un error
const aplicarDescuento = new Promise((resolve,reject) =>{
    setTimeout(() => {
        let descuento = true;

        if(descuento){
            resolve('Descuento aplicado');
        }else{
            reject('no se pudo aplicar el descuento');
        }
    },3000);
});

aplicarDescuento.then( resultado => {
    console.log(resultado);
});