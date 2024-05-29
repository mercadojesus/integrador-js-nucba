// const openModal = document.querySelector('.modal-open');
const openModalLateral2 = document.querySelector('.modal__open')
const modal2 = document.querySelector('.modal');

// openModalLateral2.addEventListener('click', (e) => {
//     e.preventDefault();
//     modal2.classList.add('modal-show');

function carritoModal () {


let productosEnElCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));
// productosEnElCarrito = JSON.parse(productosEnElCarrito);
// let productosEnElCarrito = localStorage.getItem("productosEnCarrito");
// productosEnElCarrito = JSON.parse(productosEnElCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {
    if(productosEnElCarrito && productosEnElCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
        
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
            `
            contenedorCarritoProductos.append(div);
        })
    } else {
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
    }

    actualizarBotonesEliminar();
} 

cargarProductosCarrito(); // ---> Carga todos los productos que tenemos en el LS

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) { // ---> Nos quita los items del carrito
    const idBoton = e.currentTarget.id;
    const index = productosEnElCarrito.findIndex(producto => producto.id === idBoton);

    productosEnElCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnElCarrito));
}

}
