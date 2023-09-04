document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura los datos del formulario
        const nombre = document.getElementById('nombre').value;
        // Captura otros campos del formulario aquí

        // Crea un objeto con los datos capturados
        const datosCliente = {
            nombre: nombre,
            // Agrega otros campos y valores aquí
        };

        // Envía los datos al servidor para guardar en MongoDB
        fetch('/api/guardar-datos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosCliente),
        })
        .then(response => response.json())
        .then(data => {
            // Procesa la respuesta del servidor, muestra un mensaje, etc.
            console.log('Datos guardados en MongoDB:', data);
            // Puedes mostrar un mensaje de éxito aquí
        })
        .catch(error => {
            console.error('Error al guardar los datos en MongoDB:', error);
            // Puedes mostrar un mensaje de error aquí
        });
    });
});

