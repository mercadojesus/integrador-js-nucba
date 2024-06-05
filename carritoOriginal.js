// Funcionalidades del modal del carrito
let productosEnElCarrito = localStorage.getItem("productos-en-carrito");
// console.log(productosEnElCarrito);
productosEnElCarrito = JSON.parse(productosEnElCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
let botonesAumentar = document.querySelectorAll(".botones-aumentar")
let botonesReducir = document.querySelectorAll(".botones-reducir")

function cargarProductosCarrito() {
    if(productosEnElCarrito && productosEnElCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        // Creamos los cards de los productos del modal
        productosEnElCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <div>
                        <span class="botones-aumentar" id="${producto.id}">▲</span>
                        <span>${producto.cantidad}</span>
                        <span class="botones-reducir" id="${producto.id}">▼</span>
                    </div>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button
            `;
            
            contenedorCarritoProductos.append(div); 
        })
    
    } else {
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
    }

    actualizarNumeritoModal();
    actualizarBotonesEliminar();
    actualizarCantidadCarrito();
    actualizarTotal();
}

cargarProductosCarrito(); // ---> carga todos los productos que hay en el LS

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}


function eliminarDelCarrito(e) {
    let idBoton = e.currentTarget.id;
    const index = productosEnElCarrito.findIndex(producto => producto.id === idBoton);

    productosEnElCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito); // ---> Función para vaciar el carrito
function vaciarCarrito() {

    productosEnElCarrito.length = 0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito)); // ---> Vaciamos los productos que hay en el LS
    cargarProductosCarrito();
}

// ---> Función para actualizar el total del carrito
function actualizarTotal() {
    const totalCalculado = productosEnElCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

// ---> Función para "comprar" el carrito
botonComprar.addEventListener("click", comprarCarrito); 
function comprarCarrito() {

    productosEnElCarrito.length = 0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito)); // ---> Vaciamos los productos que hay en el LS
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}

// Botones de agregar o quitar productos de los cards del carrito
function actualizarCantidadCarrito() {
    botonesAumentar = document.querySelectorAll(".botones-aumentar")
    botonesReducir = document.querySelectorAll(".botones-reducir")

    botonesAumentar.forEach(boton => {
        boton.addEventListener("click", aumentarEnElCarrito)
    })

    botonesReducir.forEach(boton => {
        boton.addEventListener("click", reducirEnElCarrito)
    })
}

// Función para agregar cantidad de elementos en el carrito
function aumentarEnElCarrito(e) {
    let idBoton = e.currentTarget.id
    // console.log(idBoton) ---> devuelve el id del producto
    const productoAumentado = productosEnElCarrito.find(producto => producto.id === idBoton)
    // console.log(productoAumentado); ---> nos devuelve el objeto completo
    // console.log(productoAumentado.cantidad); // ---> nos devuelve el elemento cantidad del objeto modificado
    productoAumentado.cantidad++
    // console.log(productoAumentado.cantidad) // ---> nos devuelve el elemento cantidad del objeto modificado
    carritoCantidad = productoAumentado
    cargarProductosCarrito() // ---> Llamamos a la función que renderiza los cards de los productos
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito)) // ---> Actualizamos el Local Storage

}

// ---> Función para quitar cantidad de elementos en el carrito
function reducirEnElCarrito(e) {
    let idBoton = e.currentTarget.id
    // console.log(idBoton) ---> devuelve el id del producto
    const productoReducido = productosEnElCarrito.find(producto => producto.id === idBoton)
    // console.log(productoReducido); // ---> nos devuelve el objeto completo
    // console.log(productoReducido.cantidad); // ---> nos devuelve el elemento cantidad del objeto modificado
    productoReducido.cantidad--


    // console.log(productoReducido.cantidad) // ---> nos devuelve el elemento cantidad del objeto modificado
    carritoCantidad = productoReducido

    // Condicional:
    if (productoReducido.cantidad < 1) {

        // Modal de advertencia por producto retirado por falta de unidades
        alert("El producto será retirado del carrito") // ---> mensaje por pantalla
        // console.log("Producto Eliminado");
        let idBoton = e.currentTarget.id
        // console.log(idBoton); ---> devuelve el id del producto
        const index = productosEnElCarrito.findIndex(producto => producto.id === idBoton)
    

        productosEnElCarrito.splice(index, 1)
        cargarProductosCarrito()

        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito))
    }

    cargarProductosCarrito() // ---> Llamamos a la función que renderiza los cards de los productos
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito)) // ---> Actualizamos el Local Storage
}

function actualizarNumeritoModal() {
    let nuevoNumerito = productosEnElCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerHTML = nuevoNumerito;
    numeroCarrito.innerHTML = nuevoNumerito;
}