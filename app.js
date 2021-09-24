//COMPLEMENTARIO 4  

//FUNCIONES 
solicitarDatos();

// SOLICITUD PRECIOS DE LIBROS A USUARIO

function solicitarDatos (){
    let num1 = Number (prompt ("Por favor, ingrese precio de su libro o producto a adquirir"));
    let num2 = Number (prompt ("Por favor, ingrese segundo precio de su libro o producto"));
    let operador = prompt ("Por favor, para ver el monto final a abonar, ingrese el simbolo +");

    calcular (num1, num2, operador);
}

// CALCULO
function calcular (a,b,c) {

    let res;

    switch (c) {
        case "+": res= a+b;
        break;
        case "-": res= a-b;
        break;
        case "*": res= a*b;
        break;
        case "/": res= a/b;
        break;
        default: res= "La operación es incorrecta";
        break;
    }
    resultado(res);

    //RESULTADO
    function resultado (a){
        console.log (a)
        alert (a);
    }

}
