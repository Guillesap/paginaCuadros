
window.onload = function () {

    const Cuadros = [
        {
            id: 1,
            nombre: '-Modelo 1-',
            precio: 750,
            imagen: '../multimedia/modelo1.jpg',
        },
        {
            id: 2,
            nombre: '-Modelo 2-',
            precio: 900,
            imagen: '../multimedia/modelo2.jpg',
        },
        {
            id: 3,
            nombre: '-Modelo 3-',
            precio: 750,
            imagen: '../multimedia/modelo3.jpg',
        },
        {
            id: 4,
            nombre: '-Modelo 4-',
            precio: 950,
            imagen: '../multimedia/modelo4.jpg',
        },
        {
            id: 5,
            nombre: '-Modelo 5-',
            precio: 900,
            imagen: '../multimedia/modelo5.jpg',
        },
        {
            id: 6,
            nombre: '-Modelo 6-',
            precio: 850,
            imagen: '../multimedia/modelo6.jpg',
        },
        {
            id: 7,
            nombre: '-Modelo 7-',
            precio: 850,
            imagen: '../multimedia/modelo7.jpg',
        },
        {
            id: 8,
            nombre: '-Modelo 8-',
            precio: 800,
            imagen: '../multimedia/modelo8.jpg',
        },
        {
            id: 9,
            nombre: '-Modelo 9-',
            precio: 750,
            imagen: '../multimedia/modelo9.jpg',
        },
        {
            id: 10,
            nombre: '-Modelo 10-',
            precio: 800,
            imagen: '../multimedia/modelo10.jpg',
        },
        {
            id: 11,
            nombre: '-Modelo 11-',
            precio: 650,
            imagen: '../multimedia/modelo11.jpg',
        },
        {
            id: 12,
            nombre: '-Modelo 12-',
            precio: 800,
            imagen: '../multimedia/modelo12.jpg',
        },

    ];

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Crea productos a partir de los Cuadros 
    */
    function renderizarProductos() {
        Cuadros.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h4');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('h2');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = "$ "+ `${info.precio}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'ME ENCANTA, LO COMPRO!';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
    

            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function añadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = Cuadros.filter((itemCuadros) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemCuadros.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem}  ${miItem[0].nombre} $${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'ELIMINAR';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }


    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        carrito.forEach((item) => {
            // De cada elemento obtenemos su precio
            const miItem = Cuadros.filter((itemCuadros) => {
                return itemCuadros.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        // Renderizamos el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarCarrito();
}
//boton finalizar compra
$('#finalizarComprar').on('click', () => {
    alert("Gracias por su compra. Su pedido está en preparación");
    });


//CONSULTAR COTIZACION DOLAR OFICIAL PARA VENTA CON APPI
const url= "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
$("#busqueda").prepend('<button id="btn"> Click aquí </button>');

$('#btn').click(()=> {
    $.get(url,(respuesta, estado)=>{
        if(estado =="success"){
            console.log(respuesta[0].casa.venta)
            $("#respuesta").prepend(`<p> Dólar oficial para la venta = $   ${respuesta[0].casa.venta}</p>`)
        }

    })

})
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