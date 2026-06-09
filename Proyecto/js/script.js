function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    const tema = document.body.classList.contains('modo-oscuro') ? 'oscuro' : 'claro';
    localStorage.setItem('tema', tema);
}

function cargarTema() {
    const temaguardado = localStorage.getItem('tema');
    if (temaguardado === 'oscuro') {
        document.body.classList.add('modo-oscuro');
    }
}

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('activo');
}

function buscarJuego(termino) {
    const tarjetas = document.querySelectorAll('.tarjeta');
    termino = termino.toLowerCase();
    
    tarjetas.forEach(tarjeta => {
        const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(termino)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function validarFormulario(formulario) {
    const campos = formulario.querySelectorAll('input, textarea');
    let valido = true;
    
    campos.forEach(campo => {
        if (campo.value.trim() === '') {
            campo.style.borderColor = 'red';
            valido = false;
        } else {
            campo.style.borderColor = '';
        }
    });
    
    return valido;
}

let indiceCarrusel = 0;
function cambiarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    indiceCarrusel += n;
    if (indiceCarrusel >= slides.length) indiceCarrusel = 0;
    if (indiceCarrusel < 0) indiceCarrusel = slides.length - 1;
    
    slides.forEach(slide => slide.style.display = 'none');
    slides[indiceCarrusel].style.display = 'block';
}

function mostrarNotificacion(mensaje, tipo = 'exito') {
    const notif = document.createElement('div');
    notif.className = `notificacion ${tipo}`;
    notif.textContent = mensaje;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function scrollSuave(elementoId) {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarTema();
});











