// URL base de la API de Reqres
const baseUrl = 'https://reqres.in/api/';

// Variable para seguir la página actual
let currentPage = 1;

// Variable para el total de tarjetas mostradas
let totalCards = 0;

// Función para obtener la lista de usuarios
function getUsers(page) {
    axios.get(`${baseUrl}users?page=${page}`)
        .then(response => {
            // Maneja la respuesta exitosa
            const users = response.data.data;
            let usersCards = document.getElementById('users-cards');

            users.forEach((user, index) => {
                if (totalCards < 8) {
                    let userCard = document.createElement('div');
                    userCard.className = 'col-md-3'; // Cambia a col-md-3 para tener 4 por fila
                    userCard.innerHTML = `
                        <div class="card mb-4 shadow-sm">
                            <img src="${user.avatar}" class="card-img-top" alt="${user.first_name} ${user.last_name}">
                            <div class="card-body">
                                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                                <p class="card-text">${user.email}</p>
                            </div>
                        </div>
                    `;
                    usersCards.appendChild(userCard);
                    totalCards++;
                }
            });

            // Si no se han mostrado todas las tarjetas, solicita la siguiente página
            if (totalCards < 8) {
                currentPage++;
                getUsers(currentPage);
            }
        })
        .catch(error => {
            // Maneja cualquier error
            console.error('There was a problem with the Axios operation:', error);
        });
}

// Llama a la función para obtener la lista de usuarios cuando se cargue el documento
document.addEventListener('DOMContentLoaded', () => getUsers(currentPage));