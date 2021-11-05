
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
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(17, 17, 17) 0%,rgb(13, 14, 13) 51%,rgb(27, 27, 27) 100%)")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $("h2").css("color", "white")
  $("h3").css("color", "white")
  $("#muchoEstilo").css("background-color", "black")
  $(".cArteles div").css("background-color", "black")
  $(".cArteles div").css("border-color", "white")
  localStorage.setItem("oScuro", "dark")
}

const ligthMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(244, 245, 245) 0%,rgb(244, 245, 245) 0%,rgb(244, 245, 245) 0%")
  $("h1").css("color", "black")
  $("p").css("color", "black")
  $("h2").css("color", "black")
  $("h3").css("color", "black")
  $("#muchoEstilo").css("background-color", "white")
  $(".cArteles div").css("background-color", "white")
  $(".cArteles div").css("border-color", "black")
  localStorage.setItem("oScuro", "ligth")
}


$("#oScuro").on("click", () => {
  if (localStorage.getItem("oScuro") === "dark") {
      ligthMode()
  } else {
      darkMode()
  }
})