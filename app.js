alert ("Bienvenido a Estilo Bruder, Cuadros con Estilo");

let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("Bienvenido"  + " " + nombreUsuario);
}

class Producto {
    constructor (nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseInt (precio);
        this.cantidad = cantidad;
        this.disponible = true;
    }
sumarIva(){
    return this.precio * 1.21;
}
Vender(){
    this.disponible = false;
}
}
var arrayProductos = [];
    do {
    var comprobacion = prompt ('Ingrese nombre del Cuadro y una vez ingresada la cantidad de cuadros a adquirir, coloque la palabra FIN para terminar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
    break;
        }else{
            nombreP = comprobacion;
            var precioP = prompt ('Ingrese el precio del cuadro que desea adquirir');
            var cantidadP = prompt ('Ingrese la cantidad de cuadros que desea adquirir');
            arrayProductos.push(new Producto(nombreP, precioP, cantidadP));
            }
        }
while (comprobacion != "fin"|| comprobacion != "FIN"|| comprobacion != "Fin")
    
console.log (arrayProductos);
    
for (var producto of arrayProductos) {
alert(" El Cuadro seleccionado es el llamado: "+producto.nombre+ "");
alert(" La cantidad solicitada es: "+producto.cantidad +"");
alert(" El precio  con IVA es $ "+producto.sumarIva() + "");

console.log(producto.nombre);
console.log(producto.cantidad);
console.log(producto.sumarIva());
}

class Compra{
    constructor(product, quantity, shop){
    return {
    product : product,
    quantity : parseInt(quantity),
    shop : shop,
    Items: () => {
    return `Su pedido es el siguiente:  ${quantity} cuadro/s, cuyo/s nombre/s es/son: ${product} que será/n retirado/s de la Sucursal del Barrio ${shop}. Su pedido ha sido tomado. Gracias por Comprar en Estilo Bruder!`
            }
        }
    }
}
        
let cantidadProductos = parseInt(prompt('Cuantos cuadros diferentes desea adquirir?'))
        
let counter = 0;
const listadoPedidos = [];
        
while(isNaN(cantidadProductos)){
    cantidadProductos = parseInt(prompt('Debe ingresar un valor numerico. Cuantos cuadros diferentes desea comprar?'))
}
while(counter < cantidadProductos){
    const prod = prompt('Ingrese el nombre del cuadro que desea comprar:')
    const qt = parseInt(prompt('Cuantos de ese cuadro  desea comprar?'))
    const store = prompt('En que sucursal de la Tienda desea retira?')
        
const producto = new Compra(prod, qt, store);  
    listadoPedidos.push(producto)
    console.log(producto.Items())
    counter++;
}

listadoPedidos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)
console.log(listadoPedidos)

