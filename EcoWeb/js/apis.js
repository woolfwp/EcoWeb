
const urlApiRuta = 'http://localhost:8000/ruta/1';
const urlApiEventos = 'http://localhost:8000/evento/1';

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


const cargarEventos = async() => {
    try {
        console.log('paso 1');
        const respuesta = await fetch(urlApiEventos);
        const datos = await respuesta.json();
        
        const respuestaRuta = await fetch('http://localhost:8000/ruta/'+datos.ruta_id)
        const datosRuta = await respuestaRuta.json();

        const respuestaEmpresa = await fetch('http://localhost:8000/emp/'+datosRuta.empresa_id)
        const datosEmpresa = await respuestaEmpresa.json();
        
        let nombre = datos.nombre;
        let fecha = datos.fecha;
        let descripcion = datos.descripcion;
        let ubicacion = datosRuta.nombre;
        let nombreEmp = datosEmpresa.nombre;

        document.getElementById('nombreEvento').innerHTML = nombre;
        document.getElementById('fechaEvento').innerHTML = fecha;
        document.getElementById('descripcionEvento').innerHTML = descripcion;
        document.getElementById('ubicacionEvento').innerHTML = 'Ubicacion: '+ubicacion;
        document.getElementById('nombreEmp').innerHTML = 'Encargado: '+nombreEmp;

    } catch (error) {
        console.log(error);
    }


}


cargarRutas();
cargarEventos();