function calificar(){
    let num = parseInt(document.getElementById("nota").value);

    let text;
    switch (true){
        case num>= 0 && num<3 :
            text = "muy deficiente";
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
    document.getElementById("result").innerText= "Nuestro servicio está: " + text;
    document.getElementById("numresult").innerText = "Tu calificación fue de: " + num;
}
