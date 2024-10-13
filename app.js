document.getElementById("alertForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    // Aquí va tu API endpoint
    const apiUrl = "http://localhost:3000/send-alert"; // Cambia esto a tu URL de la API

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        alert("Alerta enviada con éxito");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error al enviar la alerta");
    });
});
