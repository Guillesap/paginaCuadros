// Encuesta para que el Usuario, escriba el nombre del cuadro de su agrado y quede almacenado en LocalStorage, hacienco click en botón.

window.onload = iniciar;

// Botón "Click aquí", advierte el click del mouse del usuario.

function iniciar(){
  let btnTexto = document.getElementById("btnTexto");  
  btnTexto.addEventListener ("click", clickBtnTexto);

  //Renderiza lo escrito
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

 //asigna lo escrito desde el LocalStarage
 divNOtas.innerHTML = "Tu cuadro seleccionado es:  " + localStorage.cuadro;
}
