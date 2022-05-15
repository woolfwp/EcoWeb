
const urlApiRuta = ''

const cargarRutas = async() => {
    try {
        const respuestaRutas = await fetch(urlApiRuta)

        const datosRuta = await respuestaRutas.json();
        console.log(datosRuta.nombre);

    } catch (error) {
        console.log(error);
    }

  
}

cargarRutas();