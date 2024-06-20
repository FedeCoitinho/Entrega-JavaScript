const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div'); 
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Index", "usuarios"];


cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = 'red';
cabecera.style.fontSize = '1.5rem'
ul.style.listStyleType = 'none'



const footer = document.getElementById('footer');
const pFooter = document.createElement('p');

footer.appendChild(pFooter);
pFooter.innerHTML = 'Creado por Federico Coitinho';
footer.style.backgroundColor= 'red';

