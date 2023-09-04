class Access {
    constructor(username, password) {
        this.username = username || '';
        this.password = password || '';
    }

    get Username() {
        return this.username;
    }

    set Username(username) {
        this.username = username;
    }

    get Password() {
        return this.password;
    }

    set Password(password) {
        this.password = password;
    }
}

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const simulatorDiv = document.getElementById("simulator");

    // Crear una instancia de la clase Access
    const userAccess = new Access(usernameInput, passwordInput);

    // Verificar la autenticación (puedes comparar con valores válidos)
    if (userAccess.Username === "usuario" && userAccess.Password === "contraseña") {
        document.getElementById("loginForm").style.display = "none";
        simulatorDiv.style.display = "block";
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        document.getElementById("password").value = "";
    }
}
