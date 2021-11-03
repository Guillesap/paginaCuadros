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

//ANIMACIONES JQUERY

// FRASE CON FADE IN
$("#muchoEstilo").prepend('<h2 style="display: none">"Cuadros con mucho Estilo!"</h2>');
//Mostramos con fadeIn() todos los <h1>
$("h2").fadeIn();

//MODIFICAR CSS CON JQUERY
$("#muchoEstilo").css({
    "background-color": "gold",
    "color": "red",
    "font-family": "Verdana",
})

//Animación frase
$("#variosModelos").animate({ opacity: '0.01',
                              },
                              "slow",
                              function(){
                                console.log("fin de animación");                        
});
