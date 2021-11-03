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