

//declaro la variable para hacer el EventListener del boton 'Calcular'
var botonCalcular = document.getElementById('calcular');
//recibe 1 parametro y 1 funcion... Callback?
botonCalcular.addEventListener('click', funcionResumen);

function funcionResumen() {
    //declaro la variable en la que se va a guardar el dato que se ingresa en cada input
    var paseVier = document.getElementById('pase_dia').value;
    var paseCompleto = document.getElementById('pase_completo').value;
    var paseVierSab = document.getElementById('pase_dosdias').value;

    //declaro la variable en la que se va a guardar el precio de los pases
    var paseVierPrecio = 30;
    var paseCompletoPrecio = 50;
    var paseVierSabPrecio = 45;

    //declaro la variable en la que se va a hacer el calculo de los precios de cada pase solicitado y la suma total
    var subTotal =  paseVier*paseVierPrecio + 
                    paseCompleto*paseCompletoPrecio + 
                    paseVierSab*paseVierSabPrecio;
    
    //texto para mostrar como resumen
    textoResumen =  paseVier  +" boletos Pase por día <br/>"  + 
                    paseCompleto +" boletos pase todos los dias <br/>" +
                    paseVierSab +" boletos pase viernes y sabados";
                    
    document.getElementById("lista-productos").innerHTML = textoResumen;

    document.getElementById("suma-total").innerHTML = subTotal;  
}


/*


function.resumen(){
    

    if (paseVier>0) {

    }

}

var botonCalcular = document.getElementById('pase_dia');
    console.log (valorBoton.value);
    console.log('probando si funciona el click');


    var subTotal=0;

    if (paseVier>0){
        subTotal = subTotal+paseVier;
    }
    else if (paseCompleto>0){
        subTotal = subTotal+paseCompleto;
    }
    else (paseVierSab>0){
        subTotal = subTotal+paseVierSab;
    }
    else {
        alert('Debe elegir al menos un pase.')
    }

    if (paseVier>0 ||  paseCompleto>0 || paseVierSab>0){
        subTotal=paseVier+paseCompleto+paseVierSab;
    }
    else {
        alert('Debe elegir al menos un pase.')
    }
*/
