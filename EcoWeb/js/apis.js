const urlApiRuta = 'http://localhost:8000/ruta/Pico%20Pnace';

const cargarRutas = async() => {
    try {
    
        const respuestaRutas = await fetch(urlApiRuta)
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