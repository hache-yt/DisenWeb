document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formContacto');
    const mensajeExito = document.getElementById('mensajeExito');
   
    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const camposValidos = validarFormulario(formulario);

        if (!camposValidos) {
            mostrarNotificacion('Completa todos los campos antes de enviar.', 'error');
            return;
        }

        const dni = document.getElementById('dni').value.trim();
        if (dni.length !== 8 || isNaN(dni)) {
            document.getElementById('dni').style.borderColor = 'red';
            mostrarNotificacion('El DNI debe tener 8 números.', 'error');
            return;
        }

        const celular = document.getElementById('celular').value.trim();
        if (celular.length !== 9 || isNaN(celular)) {
            document.getElementById('celular').style.borderColor = 'red';
            mostrarNotificacion('El celular debe tener 9 números.', 'error');
            return;
        }

        mensajeExito.style.display = 'block';
        mensajeExito.scrollIntoView({ behavior: 'smooth' });

        formulario.reset();
    });
});
