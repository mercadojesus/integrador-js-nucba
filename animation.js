// Animación al hacer scroll

window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(rev => {
        const windowHeight = window.innerHeight;
        const revTop = rev.getBoundingClientRect().top;

        if (revTop < windowHeight - 200) {
            rev.classList.add('animate');
        } else {
            rev.classList.remove('animate');
        }
    })
})
