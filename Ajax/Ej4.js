// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar un evento de clic al elemento con ID 'enviar'
    document.getElementById('enviar').addEventListener('click', function() {
        // Crear una nueva instancia de XMLHttpRequest para hacer una solicitud HTTP
        var xhr = new XMLHttpRequest();
        // Obtener la URL ingresada por el usuario desde un elemento de entrada de texto
        var url = document.getElementById('recurso').value; 
        // Configurar una función que se ejecutará cuando cambie el estado de la solicitud
        xhr.onreadystatechange = function() {
            // Verificar si la solicitud ha sido completada
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // Si la respuesta tiene un estado exitoso (código de estado HTTP 200)
                if (xhr.status === 200) {
                    // Obtener todas las cabeceras de la respuesta HTTP
                    var headers = xhr.getAllResponseHeaders();
                    // Mostrar las cabeceras en un elemento HTML con ID 'cabeceras'
                    document.getElementById('cabeceras').textContent = headers; 
                } else {
                    // Si la respuesta tiene un código de estado diferente a 200, manejar el error
                    document.getElementById('cabeceras').textContent = 'Error al cargar el contenido: ' + xhr.status; 
                }
            }
        };
        // Configurar la solicitud HTTP GET para la URL proporcionada
        xhr.open('GET', url, true);
        // Enviar la solicitud HTTP
        xhr.send(); 
    });
});
