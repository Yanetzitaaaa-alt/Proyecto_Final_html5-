
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccionId = this.getAttribute('href');
        const seccionObjetivo = document.querySelector(seccionId);
        seccionObjetivo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('¡Bienvenido al sitio turístico de Xalapa, Veracruz! Descubre sus maravillas.');
    }, 500); 
});
document.querySelectorAll('.img-galeria').forEach(imagen => {
    imagen.addEventListener('mouseover', function() {
        this.style.border = '3px solid #3498db'; 
    });

    imagen.addEventListener('mouseout', function() {
        this.style.border = 'none'; 
    });
});


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

  
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }


    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    alert(`¡Gracias por tu mensaje, ${nombre}! Te responderemos a la brevedad.`);
    this.reset();
});
const botonVolverArriba = document.createElement('button');
botonVolverArriba.textContent = '↑ Volver arriba';
botonVolverArriba.id = 'volver-arriba';
botonVolverArriba.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    z-index: 99;
`;


document.body.appendChild(botonVolverArriba);
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botonVolverArriba.style.display = 'block';
    } else {
        botonVolverArriba.style.display = 'none';
    }
});
botonVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
