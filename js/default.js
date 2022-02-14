let POINT_HORA = document.querySelector("#hour");
let POINT_MINUTO = document.querySelector("#minute");
let POINT_SEGUNDO = document.querySelector("#second");

/*var data = new Date();
let h = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()

if(h>12){
    h-=12
}
let horaATT = h*30 + min*0.5
let minutoATT = min*6 + seg*0.1
let segundoATT = seg*6*/

function AtualizarHora(){

    var data = new Date();
    let h = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    if(h>12){
        h-=12
    }
    let horaATT = h*30 + min*0.5
    let minutoATT = min*6 + seg*0.1
    let segundoATT = seg*6 + 6

    //horaATT = horaATT+ 3/360
    //minutoATT = minutoATT+6/60
    //segundoATT = segundoATT +6


    POINT_HORA.style.transform = `rotate(${horaATT}deg)`;
    POINT_MINUTO.style.transform = `rotate(${minutoATT}deg)`;
    POINT_SEGUNDO.style.transform = `rotate(${segundoATT}deg)`;
}
var intervalo = setInterval(AtualizarHora, 1000);

