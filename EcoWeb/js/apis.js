<<<<<<< HEAD
const urlApiRuta = 'http://localhost:8000/ruta/Pico%20Pnace';

const cargarRutas = async() => {
    try {
    
        const respuestaRutas = await fetch(urlApiRuta)
=======

const urlApiRuta = 'http://localhost:8000/ruta/Pico%20Pnace'

const cargarRutas = async() => {
    try {
        console.log('paso 1', urlApiRuta)
        const respuestaRutas = await fetch(urlApiRuta)
        console.log('paso 2')

>>>>>>> 36bded0ba834e98ba0af66f6988975511a293931
        const datosRuta = await respuestaRutas.json();

        let rutas = '';
        datosRuta.nombre.forEach(ruta => {
            rutas += '<h2>${datosRuta.nombre}</h2>';
        });

        document.getElementById('nombreRuta').innerHTML = rutas;

    } catch (error) {
        console.log(error);
    }


}

cargarRutas();