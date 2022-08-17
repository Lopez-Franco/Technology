let usuario = '';
let visitas = 0;
let p = document.querySelector('#user');

p.addEventListener('click', identificarUsuario);

if (existeLocalStorage('usuario')) {
    usuario = localStorage.getItem('usuario');
    visitas = parseInt(localStorage.getItem('visitas')) + 1;
    p.setAttribute('title', `${visitas} visitas realizadas.`);
    p.innerHTML = 'Bienvenido: ' + usuario;
    contador(visitas);
}

function identificarUsuario() {
    usuario = prompt('Ingrese su nombre para identificarse:');
    while (usuario === '' || usuario === null) {
        alert('El nombre no puede estar vacio');
        usuario = prompt('Ingrese su nombre para identificarse:');
    }
    localStorage.setItem('usuario', usuario);

    p.setAttribute('title', `${1} visitas realizadas.`);
    p.innerHTML = 'Bienvenido: ' + usuario;

    contador(1);
}

function contador(visitas) {
    localStorage.setItem('visitas', visitas);
}

function existeLocalStorage(key) {
    if (localStorage.getItem(key)) {
        return true;
    }
}