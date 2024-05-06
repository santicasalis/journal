const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

document.querySelector('.botonHamburguesa').addEventListener('click', function() {
    const lincksElemento = document.querySelector('.lincks');
    const fondoElemento = document.querySelector('.fondoMenu')
    const navlincksElemento =document.querySelector('.navLincks')
    if (lincksElemento && fondoElemento && navlincksElemento) {
        lincksElemento.classList.toggle('active');
        fondoElemento.classList.toggle('active');
        navlincksElemento.classList.toggle('active');
    }
});
