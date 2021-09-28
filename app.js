//CLASE N° 5 INCORPORAR OBJETOS
class Compra{
    constructor(product, quantity, sending){
        this.product = product,
        this.quantity = parseInt(quantity),
        this.sending = sending
    }
    Items(){
        return `Tu compra:  ${this.quantity} cuadro/s, nombre: ${this.product} . Su pedido será enviado a la dirección ubicada en la calle: ${this.sending}. Muchas gracias por comprar en "Estilo Bruder"!!!!`
    }

}
const prod = prompt('Ingrese Nombre de  Cuadro, según Catálogo, que desee adquirir:')
const qt = parseInt(prompt('¿Cuantos desea comprar ?'))
const send = prompt('Indique dirección para envio')

const pedido1 = new Compra(prod, qt, send);

alert(pedido1.Items());

//OTRO EJEMPLO OBJETOS

class Cuadro{
    constructor(titulo, color){
        this.title = titulo;
        this.color = color;
    }
    mirar(){
        console.log ("Este cuadro tiene como título" + " " + (this.title) + " " + "y el marco es de color" + " " + (this.color) );
    }
}
let Cuadro1 = new Cuadro ("Spider Man", "Marrón");
Cuadro1.mirar();
let Cuadro2 = new Cuadro ("Pelota","Blanco");
Cuadro2.mirar();