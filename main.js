// Array de Productos:
const productos = [
    // 1° - Abrigos:
    {   // 1°
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./assets/imgs/01 - abrigos/01.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 12000
    },
    {   // 2°
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./assets/imgs/01 - abrigos/10.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 16000
    },
    {   // 3°
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./assets/imgs/01 - abrigos/12.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 13000 
    },
    {   // 4°
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./assets/imgs/01 - abrigos/14.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 55000
    },
    {   // 5°
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./assets/imgs/01 - abrigos/13.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 75000
    },
    {   // 6°
        id: "abrigo-06",
        titulo: "Abrigo 06",
        imagen: "./assets/imgs/01 - abrigos/06.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 92000
    },
    {   // 7°
        id: "abrigo-07",
        titulo: "Abrigo 07",
        imagen: "./assets/imgs/01 - abrigos/08.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 83000
    },
    {   // 8°
        id: "abrigo-08",
        titulo: "Abrigo 08",
        imagen: "./assets/imgs/01 - abrigos/09.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    
    // 2° - Remeras
    {
        id: "remera-01",
        titulo: "Remera 01",
        imagen: "./assets/imgs/02 - remeras/13.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 12000
    },
    {
        id: "remera-02",
        titulo: "Remera 02",
        imagen: "./assets/imgs/02 - remeras/12.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 16000
    },
    {
        id: "remera-03",
        titulo: "Remera 03",
        imagen: "./assets/imgs/02 - remeras/10.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 19000
    },
    {
        id: "remera-04",
        titulo: "Remera 04",
        imagen: "./assets/imgs/02 - remeras/11.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 10000
    },
    {
        id: "remera-05",
        titulo: "Remera 05",
        imagen: "./assets/imgs/02 - remeras/05.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 12000
    },
    {
        id: "remera-06",
        titulo: "Remera 06",
        imagen: "./assets/imgs/02 - remeras/06.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 17000
    },
    {
        id: "remera-07",
        titulo: "Remera 07",
        imagen: "./assets/imgs/02 - remeras/07.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 11000
    },
    {
        id: "remera-08",
        titulo: "Remera 08",
        imagen: "./assets/imgs/02 - remeras/08.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 19000
    },

    // 3° - Chombas
    {
        id: "chomba-01",
        titulo: "Chomba 01",
        imagen: "./assets/imgs/03 - chombas/01.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 18000
    },
    {
        id: "chomba-02",
        titulo: "Chomba 02",
        imagen: "./assets/imgs/03 - chombas/02.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 21000
    },
    {
        id: "chomba-03",
        titulo: "Chomba 03",
        imagen: "./assets/imgs/03 - chombas/03.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 25000
    },
    {
        id: "chomba-04",
        titulo: "Chomba 04",
        imagen: "./assets/imgs/03 - chombas/04.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 19000
    },
    {
        id: "chomba-05",
        titulo: "Chomba 05",
        imagen: "./assets/imgs/03 - chombas/05.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 16000
    },
    {
        id: "chomba-06",
        titulo: "Chomba 06",
        imagen: "./assets/imgs/03 - chombas/06.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 17000
    },
    {
        id: "chomba-07",
        titulo: "Chomba 07",
        imagen: "./assets/imgs/03 - chombas/07.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 23000
    },
    {
        id: "chomba-08",
        titulo: "Chomba 08",
        imagen: "./assets/imgs/03 - chombas/08.png",
        categoria: {
            nombre: "Chombas",
            id: "chombas"
        },
        precio: 15000
    },

    // 4° - Pantalones:
    {
        id: "pantalon-01",
        titulo: "Pantalon 01",
        imagen: "./assets/imgs/04 - pantalones/01.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 55000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalon 02",
        imagen: "./assets/imgs/04 - pantalones/02.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 70000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalon 03",
        imagen: "./assets/imgs/04 - pantalones/03.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 65000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalon 04",
        imagen: "./assets/imgs/04 - pantalones/04.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 85000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalon 05",
        imagen: "./assets/imgs/04 - pantalones/05.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 95000
    },
    {
        id: "pantalon-06",
        titulo: "Pantalon 06",
        imagen: "./assets/imgs/04 - pantalones/06.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 75000
    },
    {
        id: "pantalon-07",
        titulo: "Pantalon 07",
        imagen: "./assets/imgs/04 - pantalones/07.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 105000
    },
    {
        id: "pantalon-08",
        titulo: "Pantalon 08",
        imagen: "./assets/imgs/04 - pantalones/08.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 125000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")
const numeroCarrito = document.querySelector("#numero-carrito")

function cargarProductos(productosElegidos) { // ---> Función que carrga los productos del Shop

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <div class="producto">
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            </div> 
        `
        contenedorProductos.append(div)
        
    })
    
    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => { // ---> Filtramos las categorías del Shop
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active")); 
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }
        

    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

// let productosEnCarrito;

// let productosEnElCarritoLS = localStorage.getItem("productos-en-carrito");

// if (productosEnElCarritoLS) {
//     productosEnCarrito = JSON.parse(productosEnElCarritoLS);
//     actualizarNumerito();
// } else {
//     productosEnCarrito = [];
// }


// ---> Nos traemos el LS  
let productosEnCarrito;

// const productosEnElCarritoLS = JSON.parse(localStorage.getItem("productosEnCarrito"));
let productosEnElCarritoLS = localStorage.getItem("productosEnCarrito");

if(productosEnElCarritoLS) {
    // productosEnCarrito = productosEnElCarritoLS;
    productosEnCarrito = JSON.parse(productosEnElCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) { // ---> Función que agrega los items al array productosEnCarrito

    // const id = e.currentTarget.id;
    // console.log(id);

    const idBoton = e.currentTarget.id;
    // console.log(idBoton);
    const productoAgregado = productos.find(producto => producto.id === idBoton); // ---> Creamos el elemento productoAgregado
    //console.log(productoAgregado);
    
    // ---> Preguntamos si el producto ya está en el carrito
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1; // ---> a productoAgregado le incorporamos la propiedad cantidad
        productosEnCarrito.push(productoAgregado); // ---> Agregamos el elemento al array de productos
        // console.log(productosEnCarrito);
        // localStorage.setItem("productosEnCarrito ", JSON.stringify(productosEnCarrito)); // ---> guardamos el array productosEnCarrito en el LS
    }

    // console.log(productosEnCarrito);
    // console.log(productosEnElCarrito);
    
    actualizarNumerito();
    // console.log(productosEnCarrito); 

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito)); // ---> guardamos el array productosEnCarrito en el LS
    // console.log(productosEnCarrito); 
}

function actualizarNumerito() { // ---> actualiza el número del carrito
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    // console.log(nuevoNumerito);
    numerito.innerHTML = nuevoNumerito;
    numeroCarrito.innerHTML = nuevoNumerito;
}
