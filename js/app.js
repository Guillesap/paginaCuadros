//dark mode

const darkMode = () => {
  document.getElementsByTagName("body")[0].style = "background-color: black"

  for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
      document.getElementsByTagName("h1")[i].style = "color: white"
  }
  for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
      document.getElementsByTagName("p")[i].style = "color: white"
  }
  for (let i = 0; i < document.getElementsByTagName("h2").length; i++) {
    document.getElementsByTagName("h2")[i].style = "color: white"
}


  localStorage.setItem("theme", "dark")
}


const lightMode = () => {
  document.getElementsByTagName("body")[0].style = "background-color: white"

  for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
      document.getElementsByTagName("h1")[i].style = "color: black"
  }
  for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
      document.getElementsByTagName("p")[i].style = "color: black"
  }
  for (let i = 0; i < document.getElementsByTagName("h2").length; i++) {
    document.getElementsByTagName("h2")[i].style = "color: black"
}

  localStorage.setItem("theme", "ligth")
}


document.getElementById("theme").addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
      lightMode()
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
