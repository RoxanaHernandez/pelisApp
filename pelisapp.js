const agregar = document.getElementById("agregar")
const title = document.getElementById("title")
const genre = document.getElementById("genre")
const descripcion = document.getElementById("descripcion")
const califi = document.getElementById("califi")
const enviar = document.querySelector('#enviar')

enviar.addEventListener("focus", function (){
console.log("hiciste foco")

})
enviar.addEventListener("blur", function (){
    console.log("te fuiste del input")
    
    })

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


var peliculas = []
if(localStorage.getItem("peliculas")){
    peliculas=JSON.parse(localStorage.getItem("peliculas"))
}

function generarHtmlDePeli(peli){
    return `<div>
    <div>
        <img src="${peli.imagen}" alt="">
    </div>
    <div>
        <h3>Titulo</h3>
        <p>${peli.titulo}
        </p>
        <h4>Genero</h4>
        <p>${peli.genero}</p>
        <h4>Descripcion</h4>
        <p>${peli.descripcion}</p>
    </div>
    
</div>`
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
