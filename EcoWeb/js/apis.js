
const urlApiRuta = 'http://localhost:8000/ruta/Pico%20Pnace'

const cargarRutas = async() => {
    try {
        console.log('paso 1', urlApiRuta)
        const respuestaRutas = await fetch(urlApiRuta)
        console.log('paso 2')

        const datosRuta = await respuestaRutas.json();
        console.log(datosRuta.nombre);

    } catch (error) {
        console.log(error);
    }

  
}

cargarRutas();