// Botón para regresar al inicio
// Botón de acceso al modal del carrito

function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var upBtn = document.querySelector('.upBtn');

        if(scroll > pxPantalla){
            upBtn.style.right = 20 + "px";
        } else {
            upBtn.style.right = -100 + "px";
        }
    })
}

irArriba(300);

function mostrarCarrito(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var carrito = document.querySelector('.modal__open');

        if(scroll > pxPantalla){
            carrito.style.right = 20 + "px";
        } else {
            carrito.style.right = -200 + "px";
        }
    })
}

mostrarCarrito(300);