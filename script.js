// script.js - Agregar al inicio del archivo

// Función para cargar header y footer
function loadComponents() {
    // Cargar Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setActiveLink(); // Marcar link activo
        });

    // Cargar Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Cargar Header de formularios
    fetch('header_forms.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-forms-placeholder').innerHTML = data;
            setActiveLink(); // Marcar link activo
        });

    // Cargar Footer de formularios
    fetch('footer_forms.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-forms-placeholder').innerHTML = data;
        });
}

// Función para marcar el enlace activo
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav__link');

    // links.forEach(link => {
    //     if (link.getAttribute('href') === currentPage) {
    //         link.classList.add('active');
    //     }
    // });
    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPage === currentPage) {
            link.classList.add('nav__link--active');
        }
    });
}

// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadComponents);

// ... resto del código existente

// Toggle del menú móvil
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    const btn = document.querySelector('.header__menu-btn');
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', !isExpanded);
}