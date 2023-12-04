// Agregar un listener al evento 'DOMContentLoaded' para asegurarse de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Establecer la URL actual en el cuadro de texto
    document.getElementById('recurso').value = window.location.href;
});