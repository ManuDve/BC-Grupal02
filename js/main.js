// Funcion de Jquery para boton back to top

$(document).ready(function () {
  jQuery.goup({
    hideUnderWidth: 0,
    containerColor:'#00ad91',
    goupSpeed:'fast',
  });
});

// Funcion del tiempo con intervalos de 1000ms

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

// Funcion para calificar

function calificar(){
    let num = parseInt(document.getElementById("nota").value);

    let text;
    switch (true){
        case num>= 0 && num<3 :
            text = "Muy deficiente";
            break;
        case num>= 3 && num<5:
            text = "Insuficiente";
            break; 
        case num>= 5 && num<6:
            text = "Suficiente" ;
            break; 
        case num>= 6 && num<7:
            text = "Bien";
            break; 
        case num>= 7 && num<9:
            text = "Notable";
            break; 
        case num>= 9 && num<=10:
            text = "Sobresaliente";
            break;   
        default: 
            text = "Ingrese un número válido";
    }
    
    if (num >= 0 && num <= 10) { // Condicional para el texto
        document.querySelector(".result").textContent= "Nuestro servicio está: " + text;
        document.querySelector(".numresult").textContent = "Tu calificación fue de: " + num;
    } else { // Elimina el resultado anterior si se ingresa un número fuera del rango o algo que no sea un número
        document.querySelector(".numresult").textContent = "";
        document.querySelector(".result").textContent= "Ingrese un número válido";
    }
}
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });