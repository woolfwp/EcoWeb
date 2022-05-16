const urlApiRuta = 'http://localhost:8000/ruta/Pico%20Pance';

const cargarRutas = async() => {
    try {
        console.log('paso 1');
        const respuestaRutas = await fetch(urlApiRuta);
        const datosRuta = await respuestaRutas.json();
        
        let nombre = datosRuta.nombre;
        let distancia = datosRuta.distancia;
        let descripcion = datosRuta.descripcion;
        let ubicacion = datosRuta.ubicacion;
        let fecha = datosRuta.fecha;

        document.getElementById('nombreRuta').innerHTML = nombre;
        document.getElementById('descripcionRuta').innerHTML = descripcion;
        document.getElementById('distanciaRuta').innerHTML = 'Distancia: '+distancia+'Km';
        document.getElementById('ubicacionRuta').innerHTML = 'Ubicacion: '+ubicacion;
        document.getElementById('fechaRuta').innerHTML = 'fecha: '+fecha;

    } catch (error) {
        console.log(error);
    }


}

cargarRutas();