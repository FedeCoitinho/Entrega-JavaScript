

let nombreUsuario;
let apellidoUsuario;
let edadUsuario
const VACIO = "";
let doctor;


function pedirDatosUsuario(){
    nombreUsuario  = prompt ("Por favor ingrese su nombre");
    apellidoUsuario = prompt ("Por favor ingrese su apellido");
}

alert("Bienvenido a el registro del Dc.Pepito") ;

pedirDatosUsuario();

if(nombreUsuario != VACIO && apellidoUsuario != VACIO){
    edadUsuario = parseInt(prompt ("Por favor ingrese su edad"));
} else { alert ("Falta ingresar datos")}

if (edadUsuario >15) {
    doctor = 1 ;
} else if (edadUsuario <=15 && edadUsuario >2) { 
    doctor = 2;
} else if (edadUsuario<0) { 
    doctor = 3
} else {
    alert("La edad debe ser un numero")
}

switch (doctor) {
    case 1:
    console.log ("Hola " + VACIO + nombreUsuario + VACIO + apellidoUsuario + " sera dado de alta en la base de datos de mecina general");
    break;

    case 2: 
    console.log ("Hola " + VACIO + nombreUsuario + VACIO + apellidoUsuario + " sera dado de alta en la base de datos de pediatria");
    break;

    case 3:
    alert ("La edad es incorrecta")
    break;
    
}