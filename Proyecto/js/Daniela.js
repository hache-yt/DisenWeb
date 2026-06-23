/* ===========================================
   Daniela.js
   Validación del formulario en contactos.html
   Reutiliza la función validarFormulario()
   que ya está definida en js/script.js
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formContacto');
    const mensajeExito = document.getElementById('mensajeExito');

    // Si esta página no tiene formulario (ej. juego2.html), no hacemos nada
    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        // Usamos la función del equipo (script.js) que ya revisa
        // que ningún input/textarea esté vacío
        const camposValidos = validarFormulario(formulario);

        if (!camposValidos) {
            mostrarNotificacion('Completa todos los campos antes de enviar.', 'error');
            return;
        }

        // Validación extra: DNI debe tener 8 números
        const dni = document.getElementById('dni').value.trim();
        if (dni.length !== 8 || isNaN(dni)) {
            document.getElementById('dni').style.borderColor = 'red';
            mostrarNotificacion('El DNI debe tener 8 números.', 'error');
            return;
        }

        // Validación extra: Celular debe tener 9 números
        const celular = document.getElementById('celular').value.trim();
        if (celular.length !== 9 || isNaN(celular)) {
            document.getElementById('celular').style.borderColor = 'red';
            mostrarNotificacion('El celular debe tener 9 números.', 'error');
            return;
        }

        // Si todo está correcto, mostramos el mensaje de éxito
        mensajeExito.style.display = 'block';
        mensajeExito.scrollIntoView({ behavior: 'smooth' });

        // Limpiamos el formulario
        formulario.reset();
    });
});
