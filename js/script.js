const usuarios = [];
const VACIO = "";

function pedirDatosUsuario() {
    let nombreUsuario = prompt("Por favor ingrese su nombre");
    let apellidoUsuario = prompt("Por favor ingrese su apellido");

    if (nombreUsuario !== VACIO && apellidoUsuario !== VACIO) {
        let edadUsuario = parseInt(prompt("Por favor ingrese su edad"));

        if (isNaN(edadUsuario) || edadUsuario <= 0) {
            alert("La edad debe ser un número mayor que 0");
            return;
        }

        let doctor;
        if (edadUsuario > 15) {
            doctor = "Medicina general";
        } else if (edadUsuario <= 15 && edadUsuario > 0) {
            doctor = "Pediatría";
        } else {
            alert("La edad ingresada no es correcta");
            return;
        }

        let usuario = {
            nombre: nombreUsuario,
            apellido: apellidoUsuario,
            edad: edadUsuario,
            doctor: doctor
        };

        usuarios.push(usuario);
        mostrarUsuarios(); 
    } else {
        alert("Falta ingresar datos");
    }
}

function mostrarUsuarios() {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "";
    
    if (usuarios.length == 0) {
        userContainer.innerHTML = "<p>No hay usuarios registrados.</p>";
        return;
    }

    usuarios.forEach((usuario, nroUsuario) => {
        let userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.innerHTML = `
            <h2>Usuario ${nroUsuario + 1}:</h2>
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Apellido:</strong> ${usuario.apellido}</p>
            <p><strong>Edad:</strong> ${usuario.edad}</p>
            <p><strong>Doctor:</strong> ${usuario.doctor}</p>
        `;
        userContainer.appendChild(userDiv);
    });
}

function consultarUsuario() {
    let nombreBuscado = prompt("Ingrese el nombre del usuario que desea buscar");

    let usuarioEncontrado = usuarios.find(usuario => usuario.nombre.toLowerCase() == nombreBuscado.toLowerCase());

    if (usuarioEncontrado) {
        alert(`Usuario encontrado:
Nombre: ${usuarioEncontrado.nombre}
Apellido: ${usuarioEncontrado.apellido}
Edad: ${usuarioEncontrado.edad}
Doctor: ${usuarioEncontrado.doctor}`);
    } else {
        alert("Usuario no encontrado");
    }
}

function mostrarMenu() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una opción:\n1. Registrar usuario\n2. Consultar usuario\n3. Mostrar todos los usuarios\n4. Salir");

        switch(opcion) {
            case '1':
                pedirDatosUsuario();
                break;
            case '2':
                consultarUsuario();
                break;
            case '3':
                mostrarUsuarios();
                continuar = false;
                break;
            case '4':
                continuar = false;
                break;
            default:
                alert("Opción no válida");
        }
    }
}

    mostrarMenu();