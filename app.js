
//CLASE 5
class Compra{
    constructor(product, quantity, sending){
        this.product = product,
        this.quantity = parseInt(quantity),
        this.sending = sending
    }
    Items(){
        return `Deseas comprar 1 cuadro: ${this.quantity} ${this.product} , de la tienda de Cuadros Online. Su pedido será enviado a la dirección ubicada en la calle: ${this.sending}. Muchas gracias por comprar en "Estilo Bruder"!!!!`
    }

}
const prod = prompt('Ingrese Nombre de  cuadro  que desee adquirir:')
const qt = parseInt(prompt('Cuantos desea comprar ?'))
const store = prompt('Indique dirección para envio')

const pedido1 = new Compra(prod, qt, store);

alert(pedido1.Items());
