
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

//dark mode
const darkMode = () => {
  $("body").css("background-color", "black")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $("h2").css("color", "white")
  $("h3").css("color", "white")
  $("#muchoEstilo").css("background-color", "black")
  $(".cArteles div").css("background-color", "black")
  localStorage.setItem("oScuro", "dark")
}

const ligthMode = () => {
  $("body").css("background-color", "white")
  $("h1").css("color", "black")
  $("p").css("color", "black")
  $("h2").css("color", "black")
  $("h3").css("color", "black")
  $("#muchoEstilo").css("background-color", "white")
  $(".cArteles div").css("background-color", "white")
  localStorage.setItem("oScuro", "ligth")
}


$("#oScuro").on("click", () => {
  if (localStorage.getItem("oScuro") === "dark") {
      ligthMode()
  } else {
      darkMode()
  }
})