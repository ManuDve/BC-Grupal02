setInterval(() =>{
    
let fecha = document.querySelector('#year');
let muestraFecha = new Date();
let dia = muestraFecha.getDate();
let mes = muestraFecha.getMonth() + 1;
let ano = muestraFecha.getFullYear();
let hora = ('0' + muestraFecha.getHours()).slice(-2); // anade un 0 como string, y luego recorta a solo dos digitos desde el final en direccion al comienzo
let minutos = ('0' + muestraFecha.getMinutes()).slice(-2);
let segundos = ('0' + muestraFecha.getSeconds()).slice(-2);
let fechaActual = `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`
fecha.textContent = fechaActual;



}, 1000)