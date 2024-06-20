const tituloH1 = document.getElementById('titulo');

tituloH1.innerText = "Bienvenido a medicina JS";
tituloH1.style.textAlign = 'center';

const imagenPrincipal = '/img/images.jpg';
const imagen = document.createElement('img');
imagen.src = imagenPrincipal
document.body.appendChild(imagen);
imagen.style.display = 'block';
imagen.style.margin = 'auto';