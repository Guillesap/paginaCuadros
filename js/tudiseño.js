//JQUERY

//Agregando titulo con selector  Class
$(".escojeTuDiseño").append("<<h2>Poné tu nombre en tu cuadro y escojé tu modelo!!!</h2>"); 

//agregando frase con selector ID
$("#print").append ('<p> En "Estilo Bruder", confeccionamos tu cuadro a tu elección! </p>');

// respuesta al hacer click al botón para pedir información
$('#btnTutexto').on('click', () => {
    alert("A la brevedad nos contactaremos para más información");
    });

//ANIMACIONES
//agregar un párrafo
$("#cuadrosFamilia").prepend ('<h1>Crea tu cuadro con el nombre de tus hijos! </h1>')
//declarando
$("#cuadrosFamilia").css("font-size","30 cm")
.slideUp(800)
.slideDown(800);

//dark mode
const darkMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(17, 17, 17) 0%,rgb(13, 14, 13) 51%,rgb(27, 27, 27) 100%)")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $("h2").css("color", "white")
  $("h3").css("color", "white")
  $("#muchoEstilo").css("background-color", "black")
  $(".cArteles div").css("background-color", "black")
  localStorage.setItem("oScuro", "dark")
}

const ligthMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(244, 245, 245) 0%,rgb(243, 245, 243) 51%,rgb(245, 241, 244) 100%)")
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