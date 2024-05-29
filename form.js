// Formulario de Contacto

// Referenciamos los elementos:
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const parrafo = document.querySelector("#advertencia")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    let advertencia = ""
    let entrar = false
    let regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    parrafo.innerHTML = ""
    if(nombre.value === null || nombre.value === ''){
        advertencia += `Ingresar Nombre <br>`
        entrar = true
    }
    if(apellido.value === null || apellido.value === ''){
        advertencia += `Ingresar Apellido <br>`
        entrar = true
    }
    if(telefono.value.length < 6){
        advertencia += `Ingresar Teléfono válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        advertencia += `El Email no es válido <br>`
        entrar = true
    }
    if(mensaje.value === null || mensaje.value === ''){
        advertencia += `Ingrese su consulta, pedido o mensaje <br>`
        entrar = true
    }

    if(entrar) {
        parrafo.innerHTML = advertencia
    }else{
        parrafo.innerHTML = "Formulario Enviado"
    }
})