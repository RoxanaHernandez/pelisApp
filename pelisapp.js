
const agregar = document.getElementById("agregar")
const title = document.getElementById("title")
const genre = document.getElementById("genre")
const descripcion = document.getElementById("descripcion")
const califi = document.getElementById("califi")
const formulario = document.getElementById("formulario")
const peliculasSection = document.getElementById("peliculas")

const div = document.querySelector('#pelis-nuevas')

var peliculas = [

]


//const enviar = document.querySelector('#enviar')
// enviar.addEventListener("click", function (event){
//     peliculas.push({

//         titulo: title.value,
//         genero: genre.value,
//         descripcion: descripcion.value,
//         imagen: califi.value
//     })
//     recorrePeli()
//     localStorage.setItem("peliculas",JSON.stringify(peliculas));
    
//     document.getElementById("formulario").reset()
//     event.preventDefault();
//     formnulario.reset();
//     return false;
    
   

// })


$('#enviar').click((event) => {
    event.preventDefault();
    peliculas.push({

        titulo: title.value,
        genero: genre.value,
        descripcion: descripcion.value,
        imagen: califi.value
    })
    recorrePeli()
    localStorage.setItem("peliculas",JSON.stringify(peliculas));
    
    //document.getElementById("formulario").reset()
    event.preventDefault();
    formnulario.reset();
    return false;
    
    
   

})

//var peliculas = [

//]


if(localStorage.getItem("peliculas")){
    peliculas=JSON.parse(localStorage.getItem("peliculas"))
}

function generarHtmlDePeli(peli, indice ){
    return `<article class="peliculas">
                <div class="peliculas-container">
                    <div>
                        <img class="poster"  src="${peli.imagen}">
                
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
                        <button id ='btn-eliminar-${indice}'>Eliminar</button>
                    </div>
                </div>
            </article>`
}

//var div = document.createElement("div");
//var peliculasSection = document.getElementById("peliculas");


function recorrePeli() {
   // var div = document.createElement("div");
var str ="";
for (var i=0; i<peliculas.length;i++){
    str += generarHtmlDePeli(peliculas[i], i)
};
 var clickFactory = (j) => () => {
     peliculas.splice(j, 1)
     recorrePeli()
     localStorage.setItem("peliculas",JSON.stringify(peliculas));
 }
div.innerHTML = str;
for(var i =0; i<peliculas.length;i++){
    var btn = document.getElementById(`btn-eliminar-${i}`)
    btn.addEventListener('click',clickFactory(i))
}

//document.body.appendChild(div);
}

function dibujarTendencias(tendencias) {
    var str ="";
    for (var i=0; i<tendencias.length;i++){
        str+= generarHtmlDePeli(tendencias[i])
    };
    peliculasSection.innerHTML = str;
    
}


//document.body.appendChild(div);

recorrePeli()

// apikey 6d5a2835001bae178b365eb8f7fe37d5 api movies   https://developers.themoviedb.org/3/trending/get-trending
fetch('https://api.themoviedb.org/3/trending/all/day?api_key=6d5a2835001bae178b365eb8f7fe37d5')
    .then((response) => response.json())
    .then((data) => {
        var arr = []
        for (var i = 0; i < data.results.length; i ++) {
            arr.push({
                titulo: data.results[i].name || data.results[i].title || data.results[i].original_title,
                imagen: 'https://image.tmdb.org/t/p/original' + data.results[i].poster_path,
                descripcion: data.results[i].overview
            })
        }
        dibujarTendencias(arr)
    })
    .catch((err) => console.log(`Error: ${err}`))

    /*function verificar()
    {
    var rellenados=true;
    const fi = document.getElementById("agregar");
    controles = fi.getElementsByTagName('input');
    for ( i=0; i<controles.length; i++){
    control = controles[i];
    if (control.type == 'text'){
    if (control.value=="") {
    rellenados=false;
    }
    }
    }
    return rellenados;
    }*/