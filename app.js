// EJEMPLO DE FORMULARIO PARA SELECCIONAR UN CUADRO ALMACENAMIENTO EN LOCALSTORAGE

window.onload = iniciar;

// Botón "Click aquí", advierte el click del mouse del usuario.

function iniciar(){
  let btnTexto = document.getElementById("btnTexto");  
  btnTexto.addEventListener ("click", clickBtnTexto);

  //Renderiza notas
  mostrarNotas ();
}

//funcion del boton: usuario escribe nombre de cuadro y  se almacena en el localStorage
function clickBtnTexto() {
 let txtNotas = document.getElementById("txtNotas");

 localStorage.cuadro = txtNotas.value;
 mostrarNotas();
}

 function mostrarNotas() {
 let divNOtas = document.getElementById("divNotas");

 //asigna las notas desde el LocalStarage
 divNOtas.innerHTML = "Tu cuadro seleccionado es:  " + localStorage.cuadro;
}