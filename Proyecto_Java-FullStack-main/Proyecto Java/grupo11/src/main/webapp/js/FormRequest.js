document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("createCourseForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
    
        const formData = new FormData(form);
        fetch('/cursos?action=add', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);  // Mensaje de éxito
            window.location.href = '/home.html';  // Redirige a home.html
        })
        .catch(error => console.error('Error:', error));
    });
  });