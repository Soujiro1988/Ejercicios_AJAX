// Agregar un listener al evento 'DOMContentLoaded' para asegurarse de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar un listener al botón 'enviar' para capturar el evento de clic
    document.getElementById('enviar').addEventListener('click', function() {
        // Crear un nuevo objeto XMLHttpRequest para manejar la petición AJAX
        var xhr = new XMLHttpRequest();
        // Obtener la URL introducida por el usuario en el cuadro de texto
        var url = document.getElementById('recurso').value;
        // Establecer una función para manejar los cambios de estado de la petición
        xhr.onreadystatechange = function() {
            var estados = document.getElementById('estados');
            switch(xhr.readyState) {
                case 0:
                    estados.innerHTML = 'Estado: UNSENT (No enviado)';
                    break;
                case 1:
                    estados.innerHTML = 'Estado: OPENED (Abierto)';
                    break;
                case 2:
                    estados.innerHTML = 'Estado: HEADERS_RECEIVED (Cabeceras recibidas)';
                    break;
                case 3:
                    estados.innerHTML = 'Estado: LOADING (Cargando)';
                    break;
                case 4:
                    estados.innerHTML = 'Estado: DONE (Completado)';
                    break;
            }
        };

        xhr.onload = function() {
            if (xhr.status === 200) {
                // Mostrar los contenidos en la página
                document.getElementById('contenidos').textContent = xhr.responseText; 
            } else {
                // Manejar los errores, por ejemplo, mostrar un mensaje
                document.getElementById('contenidos').textContent = 'Error al cargar el contenido: ' + xhr.status; 
            }
        };
        // Configurar la petición con el método GET y la URL proporcionada por el usuario
        xhr.open('GET', url, true);
        // Enviar la petición
        xhr.send(); 
    });
});

