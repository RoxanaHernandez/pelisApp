const agregar = document.getElementById("agregar")
const title = document.getElementById("title")
const genre = document.getElementById("genre")
const descripcion = document.getElementById("descripcion")
const califi = document.getElementById("califi")
const enviar = document.querySelector('#enviar')

    


    
    

enviar.addEventListener("click", function (event){
    peliculas.push({

        titulo: title.value,
        genero: genre.value,
        descripcion: descripcion.value,
        imagen: califi.value
    })
    recorrePeli()
    localStorage.setItem("peliculas",JSON.stringify(peliculas));
    

    event.preventDefault();
    return false;
    
   

})


var peliculas = [

]


if(localStorage.getItem("peliculas")){
    peliculas=JSON.parse(localStorage.getItem("peliculas"))
}

function generarHtmlDePeli(peli){
    return `<article class="peliculas">
                <div class="peliculas-container">
                    <div>
                        <img class="poster"  ${peli.imagen}>
                
                    </div>
                    <div class="derecha">
                        <h3>Titulo</h3>
                        <p>${peli.titulo}</p>
                        <h4>Genero</h4>
                        <p>${peli.genero}</p>
                        <h4>Descripcion</h4>
                        <p>${peli.descripcion}</p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <h4>Calificacion</h4>
                        <p>&#9734; &#9734; &#9734; &#9734; &#9734; </p>
                    </div>
                    <div class="peliculas-boton">
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </div>
                </div>
            </article>`
}

var div = document.createElement("div");


function recorrePeli() {
var str ="";
for (var i=0; i<peliculas.length;i++){
    str+= generarHtmlDePeli(peliculas[i])
};
div.innerHTML = str;
}




document.body.appendChild(div);

recorrePeli()
//function limpiarFormulario() {
  //  document.getElementById("formulario").reset();
  //}
  //<input type="button" onclick="limpiarFormulario()" value="Limpiar formulario">
  //function limpiarYEnviar() {
    //limpiarFormulario();
    //return true;
  //}
  //cdnjs libreria
  /* LINKEA POR URL EL JQUERY Y NO DESCARGA EL ARCHIVO
  <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script> */
  /* slide para que despliegue mi form con jquery callback de fade  animate scrolltop*/