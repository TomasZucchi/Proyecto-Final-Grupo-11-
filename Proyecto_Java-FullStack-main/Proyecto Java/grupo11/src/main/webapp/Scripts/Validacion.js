function validarInicioDeSesion(event) {

    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var validUsername = "usuario@gmail.com";
    var validPassword = "1234";
    var valid = true;

    // Validar el nombre de usuario
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Por favor, ingrese su nombre de usuario o correo electrónico.";
        document.getElementById("username").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
        document.getElementById("username").classList.remove("is-invalid");
    }

    // Validar la contraseña
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Por favor, ingrese su contraseña.";
        document.getElementById("password").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("password").classList.remove("is-invalid");
    }

    // Verificar las credenciales si las validaciones anteriores son correctas
    if (valid && username === validUsername && password === validPassword) {
        window.location.href = "./home.html"; // Redirigir a home.html
    } else if (valid) {
        // Solo muestra error de credenciales si los campos no están vacíos
        document.getElementById("usernameError").innerHTML = "Credenciales incorrectas.";
        document.getElementById("passwordError").innerHTML = "";
    }
}

function validarRegistro(event) {
    event.preventDefault();
    var username = document.getElementById("reg-username").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;

    // Verificar que todos los campos estén completos
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Por favor, ingrese su nombre de usuario.";
        return false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Por favor, ingrese su dirección de correo electrónico.";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Por favor, ingrese su contraseña.";
        return false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    // Verificar si el email tiene un formato válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Por favor, ingrese una dirección de correo electrónico válida.";
        return false;
    }

    // Redirigir al usuario a la página de inicio después de completar el formulario
    window.location.href = "index.html";
    return false; // Para evitar que el formulario se envíe automáticamente
}

function validarCambioDeContraseña(event) {
    var username = document.getElementById("reg-username").value;
    var email = document.getElementById("reg-email").value;

    // Verificar si al menos uno de los campos está completado
    if (username === "" && email === "") {
        document.getElementById("usernameError").innerHTML = "Por favor, complete este campo.";
        document.getElementById("reg-username").classList.add("is-invalid");
        document.getElementById("emailError").innerHTML = "Por favor, complete este campo.";
        document.getElementById("reg-email").classList.add("is-invalid");
        return false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
        document.getElementById("reg-username").classList.remove("is-invalid");
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("reg-email").classList.remove("is-invalid");
        alert("¡Formulario completado correctamente!");

        window.location.href = "index.html";
        return false;
    }

    function validarConsulta(event) {
        var email = document.getElementById("email").value;
        var consulta = document.getElementById("consulta").value;
        var isValid = true;

        if (email === "") {
            document.getElementById("emailError").innerHTML = "Por favor, ingrese su correo electrónico.";
            document.getElementById("email").classList.add("is-invalid");
            isValid = false;
        } else {
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("email").classList.remove("is-invalid");
        }

        if (consulta === "") {
            document.getElementById("consultaError").innerHTML = "Por favor, ingrese su consulta.";
            document.getElementById("consulta").classList.add("is-invalid");
            isValid = false;
        } else {
            document.getElementById("consultaError").innerHTML = "";
            document.getElementById("consulta").classList.remove("is-invalid");
        }

        if (isValid) {
            alert("¡Formulario completado correctamente!");
        }

        return isValid;
    }
}