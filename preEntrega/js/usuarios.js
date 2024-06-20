
const tituloH1 = document.getElementById('tituloU');

tituloH1.innerText = "Registro de usuarios";
tituloH1.style.textAlign = 'center';

let usuarios = []; // Array para almacenar los usuarios

// Función para mostrar usuarios en el contenedor
function mostrarUsuarios() {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "";

    if (usuarios.length === 0) {
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

// Función para agregar usuario al array y guardar en localStorage
function pedirDatosUsuario() {
    const nombreUsuario = document.getElementById('nombre').value.trim();
    const apellidoUsuario = document.getElementById('apellido').value.trim();
    const edadUsuario = parseInt(document.getElementById('edad').value);

    if (nombreUsuario !== "" && apellidoUsuario !== "" && !isNaN(edadUsuario) && edadUsuario > 0) {
        let doctor;
        if (edadUsuario > 15) {
            doctor = "Medicina general";
        } else {
            doctor = "Pediatría";
        }

        const usuario = {
            nombre: nombreUsuario,
            apellido: apellidoUsuario,
            edad: edadUsuario,
            doctor: doctor
        };

        usuarios.push(usuario);
        guardarUsuariosEnStorage(); // Guardamos en localStorage

        document.getElementById('registroForm').reset(); // Resetear el formulario
        mostrarUsuarios(); // Mostrar usuarios actualizados
    } else {
        console.log("Por favor complete todos los campos correctamente.");
    }
}

// Función para guardar usuarios en localStorage
function guardarUsuariosEnStorage() {
    const usuariosJSON = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJSON);
}

// Función para cargar usuarios desde localStorage al array usuarios
function cargarUsuariosDesdeStorage() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
        usuarios = JSON.parse(usuariosGuardados);
        mostrarUsuarios(); // Mostramos los usuarios cargados
    }
}

// Llamamos a esta función al cargar la página para cargar usuarios almacenados
cargarUsuariosDesdeStorage();


function mostrarFormulario() {
    document.getElementById('registroForm').style.display = 'block';
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('userContainer').style.display = 'none'; // Oculta el contenedor de usuarios
}




function mostrarTodosUsuarios() {
    document.getElementById('registroForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('userContainer').style.display = 'block'; // Muestra el contenedor de usuarios
    mostrarUsuarios();
}