// function cambioPagina(){
//     location.href = "signUp.html"
// }

function inicio(){
    if( document.getElementById('usuario').value == 'caminante' && document.getElementById('contraseña').value == 'caminante'){
        location.href = "../../index.html"
    }else{
        alert('Usuario o contraseña incorrecto')
    }
}

function alerta(mensaje){
    alert(mensaje)
}

function cerrarSesion(){
    location.href = "../../fuera_index.html"
}