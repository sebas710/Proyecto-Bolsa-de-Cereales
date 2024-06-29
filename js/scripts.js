function mostrarDescripcion(id) {
    var descripcion = document.getElementById(id);
    descripcion.style.display = "block";
  }
  
  function ocultarDescripcion(id) {
    var descripcion = document.getElementById(id);
    descripcion.style.display = "none";
  }
  
// Recuperar los datos del usuario de localStorage
var usuario = JSON.parse(localStorage.getItem('usuario'));
if (usuario) {
    document.getElementById('login').innerHTML = `
    
    <div id="btn_sesion">
            <a href="index.html" onclick="cerrarSesion()"><img src="img/btn_close_sesion.png" alt="Cerrar sesión" width="30"></a>
        </div>
        <div id="datos_usuario">
            <div style="font-weight: 600;">${usuario.nombre} ${usuario.apellido}</div>
            <div>${usuario.ciudad}</div> 
            <div>${usuario.puntos} Puntos</div> 
        </div>
    `;
}
function cerrarSesion() {
    // Eliminar los datos del usuario de localStorage
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
}


//Menu hamburguesa Cami 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
nav.classList.remove("visible");
})

//Fin Menu hamburguesa Cami