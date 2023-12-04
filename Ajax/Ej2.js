document.addEventListener('DOMContentLoaded', function () {
    // Asignar directamente la URL actual al valor del input
    document.getElementById('recurso').value = window.location.href; 

    // Añadir el manejador de eventos al botón
    document.getElementById('enviar').addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        // Obtener la URL directamente del cuadro de texto
        var url = document.getElementById('recurso').value; 

        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                // Mostrar los contenidos en la página
                document.getElementById('contenidos').textContent = xhr.responseText; 
            } else {
                // Manejar los errores, por ejemplo, mostrar un mensaje
                document.getElementById('contenidos').textContent = 'Error al cargar el contenido: ' + xhr.status; 
            }
        };

        xhr.onerror = function() {
            // Manejar errores de red
            document.getElementById('contenidos').textContent = 'Error de red o URL no accesible.'; 
        };

        xhr.send();
    });
});




