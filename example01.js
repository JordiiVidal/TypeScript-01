window.addEventListener('load', inicio, false);
console.log('dsd');
var nom = 'pepe';
//const dni = '7712676G';//no se puede volver a assignar
var comentario;
comentario = 10;
comentario = 'sasa';
for (var k = 0; k < 5; k++) { //var declarada en todo el documento
    console.log(nom + " " + k);
}
function muestraMSN(comentarios) {
    var myDiv = window.document.getElementById('mensaje');
    myDiv.innerHTML = comentarios;
}
function inicio() {
    muestraMSN('sdsds');
    var miBoton = window.document.getElementById('btn');
    miBoton.addEventListener('click', clickBoton, false);
}
function clickBoton() {
    var miInput = window.document.getElementById('txt');
    var texto = miInput.value;
    var result = 10 + parseInt(texto);
    if (isNaN(result)) {
        result = 10;
    }
    var miDiv = window.document.getElementById('mensaje');
    miDiv.innerHTML = texto;
    var d = new Date();
    miDiv.innerHTML += "<br>" + d.getDate() + "-" + d.getMonth();
    //eval(texto);
}
//nom = 90;
//console.log(dni
