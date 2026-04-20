// Archivo: js/app.js
// Funcionalidades básicas para el sitio turístico de Xalapa, Veracruz

// 1. Efecto de desplazamiento suave para los enlaces del menú de navegación
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        
        // Obtiene el ID de la sección a la que se quiere navegar
        const seccionId = this.getAttribute('href');
        const seccionObjetivo = document.querySelector(seccionId);
        
        // Realiza el desplazamiento suave hasta la sección
        seccionObjetivo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Mensaje de bienvenida al cargar la página
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('¡Bienvenido al sitio turístico de Xalapa, Veracruz! Descubre sus maravillas.');
    }, 500); // Se muestra medio segundo después de cargar la página
});

// 3. Efecto al pasar el ratón sobre las imágenes de la galería
document.querySelectorAll('.img-galeria').forEach(imagen => {
    imagen.addEventListener('mouseover', function() {
        this.style.border = '3px solid #3498db'; // Añade borde azul al pasar el ratón
    });

    imagen.addEventListener('mouseout', function() {
        this.style.border = 'none'; // Quita el borde cuando el ratón se aleja
    });
});

// 4. Validación básica del formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    // Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Verifica que todos los campos estén llenos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    // Verifica que el correo tenga un formato válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Si todo es correcto, muestra un mensaje de éxito
    alert(`¡Gracias por tu mensaje, ${nombre}! Te responderemos a la brevedad.`);
    this.reset(); // Limpia el formulario después de enviarlo
});

// 5. Botón para volver al inicio de la página
// Crea el botón dinámicamente
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

// Agrega el botón al cuerpo de la página
document.body.appendChild(botonVolverArriba);

// Muestra u oculta el botón al desplazarse por la página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botonVolverArriba.style.display = 'block';
    } else {
        botonVolverArriba.style.display = 'none';
    }
});

// Función para volver al inicio al hacer clic en el botón
botonVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
