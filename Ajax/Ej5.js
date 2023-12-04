// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento de entrada de texto con el ID 'recurso'
    var inputUrl = document.getElementById('recurso');
    inputUrl.value = window.location.href;// Establecer el valor del elemento de entrada de texto como la URL actual de la ventana

    // Agregar un evento de clic al elemento con ID 'enviar'
    document.getElementById('enviar').addEventListener('click', function () {
        // Crear una nueva instancia de XMLHttpRequest para hacer una solicitud HTTP
        var xhr = new XMLHttpRequest();
        // Obtener la URL ingresada por el usuario desde el elemento de entrada de texto
        var url = inputUrl.value; 
        // Configurar una función que se ejecutará cuando cambie el estado de la solicitud
        xhr.onreadystatechange = function () {
        };
        // Configurar la solicitud HTTP GET para la URL proporcionada
        xhr.open('GET', url, true); 
        // Configurar una función que se ejecutará cuando la solicitud haya cargado
        xhr.onload = function () {
            // Obtener el estado de la respuesta HTTP (código de estado y mensaje)
            var estado = xhr.status + ': ' + xhr.statusText;
            // Mostrar el estado en un elemento HTML con ID 'codigo'
            document.getElementById('codigo').textContent = estado; 

            // Si la respuesta tiene un código de estado HTTP 200 (éxito)
            if (xhr.status === 200) {
                // Mostrar el contenido de la respuesta en un elemento HTML con ID 'contenidos'
                document.getElementById('contenidos').textContent = xhr.responseText;
                // Obtener todas las cabeceras de la respuesta HTTP
                var cabeceras = xhr.getAllResponseHeaders();
                // Mostrar las cabeceras en un elemento HTML con ID 'cabeceras'
                document.getElementById('cabeceras').textContent = cabeceras; 
            } else {
                // Si la respuesta tiene un código de estado diferente a 200, manejar el error
                document.getElementById('contenidos').textContent = 'Error al cargar el contenido: ' + xhr.status; 
            }
        };
        // Configurar una función que se ejecutará en caso de error de red o URL no accesible
        xhr.onerror = function () {
            // Obtener el estado de la respuesta HTTP (código de estado y mensaje)
            var estado = xhr.status + ': ' + xhr.statusText;
            // Mostrar el estado en un elemento HTML con ID 'codigo' 
            document.getElementById('codigo').textContent = estado;
            // Mostrar un mensaje de error en un elemento HTML con ID 'contenidos'
            document.getElementById('contenidos').textContent = 'Error de red o URL no accesible.'; 
        };
        // Enviar la solicitud HTTP
        xhr.send(); 
    });
});
