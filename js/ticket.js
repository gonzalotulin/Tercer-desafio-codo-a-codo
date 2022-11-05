<<<<<<< HEAD
/* 
Definicion de variables
*/

let nombreUsuario = document.getElementById("nombre");
let apellidoUsuario = document.getElementById("apellido");
let emailUsuario = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets")
let categoria = document.getElementById("categoriaSelect");

const btnResumen = document.getElementById("btnResumen");
/* Defino los descuentos para cada categoria */
const valorSinDescuento = 200;
const descuentoEstudiante = 0.2
const descuentoTrainee = 0.5
const descuentoJunior = 0.85

/* 
Funcion y manipulacion del DOM
*/

function totalAPagar() {
    
    /* Validaciones del formulario */

    let total = cantidadTickets.value

    if (categoria.value == 0){
        total *= valorSinDescuento;
    } 
    else if (categoria.value == 1){
        total *= valorSinDescuento*descuentoEstudiante;
    } 
    else if (categoria.value == 2){
        total *= valorSinDescuento*descuentoTrainee;
    }
    else if(categoria.value == 3){
        total *= valorSinDescuento*descuentoJunior;
    }
    else {};

    totalPago.innerHTML = total
}

btnResumen.onclick = totalAPagar;
=======
/* 
Definicion de variables
*/

let nombreUsuario = document.getElementById("nombre");
let apellidoUsuario = document.getElementById("apellido");
let emailUsuario = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets")
let categoria = document.getElementById("categoriaSelect");

const btnResumen = document.getElementById("btnResumen");
const valorSinDescuento = 200;
const descuentoEstudiante = 0.2
const descuentoTrainee = 0.5
const descuentoJunior = 0.85

/* 
Funcion y manipulacion del DOM
*/

function totalAPagar() {
   
    let total = cantidadTickets.value

    if (categoria.value == 0){
        total *= valorSinDescuento;
    } 
    else if (categoria.value == 1){
        total *= valorSinDescuento*descuentoEstudiante;
    } 
    else if (categoria.value == 2){
        total *= valorSinDescuento*descuentoTrainee;
    }
    else if(categoria.value == 3){
        total *= valorSinDescuento*descuentoJunior;
    }
    else {};

    totalPago.innerHTML = total
}

btnResumen.onclick = totalAPagar;
>>>>>>> b3579a9a4e7803c0b8b9d7b513659c91221e859d
