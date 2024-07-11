document.addEventListener("DOMContentLoaded", function() {

    const cursosSection = document.getElementById("cursos");

    function CargarListaDeCursos() {
        console.log("Entro a CargarListaDeCursos");
        fetch("/grupo11/cursos?action=getAll")
            .then(response => response.json())
            .then(data => {
                data.forEach(curso =>{
                    cursosSection.innerHTML += `
                        <div class="cards">
                            <img src="${curso.img}" class="card-img-top custom-img" alt="${curso.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${curso.nombre}</h5>
                                <p class="card-text">${curso.descripcion}</p>
                                <p class="card-text"><strong>Instructor:</strong> ${curso.instructor}</p>
                                <p class="card-text"><strong>Valoración:</strong> ${curso.valoracion}</p>
                            </div>
                        </div>
                    `;
                });
            });
    }
    CargarListaDeCursos();
});