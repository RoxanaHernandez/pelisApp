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
    
    document.getElementById("formulario").reset()
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
