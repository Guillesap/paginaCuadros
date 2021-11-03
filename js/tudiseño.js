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