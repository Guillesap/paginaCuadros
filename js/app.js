//dark mode
const darkMode = () => {
  $("body").css("background-color", "black")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $("h2").css("color", "white")
  localStorage.setItem("theme", "dark")
}

const ligthMode = () => {
  $("body").css("background-color", "white")
  $("h1").css("color", "black")
  $("p").css("color", "black")
  $("h2").css("color", "black")
  localStorage.setItem("theme", "ligth")
}


$("#theme").on("click", () => {
  if (localStorage.getItem("theme") === "dark") {
      ligthMode()
  } else {
      darkMode()
  }
})


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
