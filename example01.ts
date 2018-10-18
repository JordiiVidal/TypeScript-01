window.addEventListener('load',inicio,false);

console.log('dsd');

var nom:string = 'pepe';
//const dni = '7712676G';//no se puede volver a assignar
var comentario:any;
comentario = 10;
comentario = 'sasa';

for (let k:number = 0; k<5; k++){//var declarada en todo el documento
    console.log(nom+" "+k);
}

function muestraMSN(comentarios:string){
    let myDiv = window.document.getElementById('mensaje');
    myDiv.innerHTML = comentarios;
}

function inicio(){
    muestraMSN('sdsds');
    let miBoton = window.document.getElementById('btn');
    miBoton.addEventListener('click',clickBoton,false);
}

function clickBoton(){

    let miInput:HTMLInputElement = <HTMLInputElement> window.document.getElementById('txt');
    let texto = miInput.value;



    let result:number = 10+parseInt(texto);
    if(isNaN(result)){
        result=10;
    }
    let miDiv = window.document.getElementById('mensaje');
    miDiv.innerHTML = texto;

    let d:Date = new Date();
    miDiv.innerHTML += "<br>"+d.getDate()+"-"+d.getMonth();

    //eval(texto);
}


//nom = 90;
//console.log(dni
