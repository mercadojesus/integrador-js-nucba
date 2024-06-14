// Interactividad del Modal:
const openModal = document.querySelector('.modal-open');
const openModalLateral = document.querySelector('.modal__open')
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.modal-close');
const contacto2 = document.querySelector("#contacto")
const footer2 = document.querySelector(".footer")
const upBtn = document.querySelector('.upBtn');


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-show');
    carritoModal();
    document.body.style.overflowY = "hidden";
    contacto2.style.display = "none";
    footer2.style.display = "none";
})

openModalLateral.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-show');
    carritoModal();
    document.body.style.overflowY = "hidden";
    // contacto2.style.display = "none";
    // footer2.style.display = "none";
    contacto2.classList.add("disabled");
    footer2.classList.add("disabled");
    openModalLateral.classList.add("disabled");
    upBtn.classList.add("disabled");
})

// Cerrar modal del boton "cerrar"
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
    document.body.style.overflowY = "scroll";
    // contacto2.style.display = "none";
    // footer2.style.display = "none";
    contacto2.classList.remove("disabled");
    footer2.classList.remove("disabled");
    openModalLateral.classList.remove("disabled");
    upBtn.classList.remove("disabled");

})

// Cerrar modal al clickear fuera del mismo
window.addEventListener('click', function (e) {
    if(e.target == modal) {
        modal.classList.remove('modal-show');
        document.body.style.overflowY = "scroll";
        // contacto2.style.display = "block";
        // footer2.style.display = "block";
        contacto2.classList.remove("disabled");
        footer2.classList.remove("disabled");
        openModalLateral.classList.remove("disabled");
        upBtn.classList.remove("disabled");
    }
});

// Cerrar modal al hacer scroll
// window.addEventListener('scroll', function (e) {
//     if(scroll) {
//         modal.classList.remove('modal-show');
//     }
// });







