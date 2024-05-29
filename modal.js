// Interactividad del Modal:
const openModal = document.querySelector('.modal-open');
const openModalLateral = document.querySelector('.modal__open')
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.modal-close');
const contacto2 = document.querySelector("#contacto")
const footer2 = document.querySelector(".footer")


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
    contacto2.style.display = "none";
    footer2.style.display = "none";
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
    document.body.style.overflowY = "scroll";
    contacto2.style.display = "none";
    footer2.style.display = "none";
})

// Cerrar modal al clickear fuera del mismo
window.addEventListener('click', function (e) {
    if(e.target == modal) {
        modal.classList.remove('modal-show');
        document.body.style.overflowY = "scroll";
        contacto2.style.display = "block";
        footer2.style.display = "block";
    }
});

// Cerrar modal al hacer scroll
// window.addEventListener('scroll', function (e) {
//     if(scroll) {
//         modal.classList.remove('modal-show');
//     }
// });







