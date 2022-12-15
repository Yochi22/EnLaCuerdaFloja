const coders = JSON.parse(localStorage.getItem("list"));
console.log(coders);

let players = coders;
let listaDeVivos = players; 
let listaDeMuertos = [];
let jugadorSacrificado = "";

const play = document.querySelector(".btn-play");

document.querySelector("#vivos").innerHTML = "Jugadores vivos: " + listaDeVivos;


play.addEventListener("click", (e) => { 
    //efecto de sonido al sacrificar
    const latigo = new Audio('/sounds/latigo.mp3');
    latigo.play();
    const guillotina = new Audio('/sounds/guillotina.mp3');
    guillotina.play();

    if (listaDeVivos.length == 0) {
        location.href = "/game-over.html"; 
    }
    if (listaDeVivos.length > 0) {
        
            //si la longitud del array es mayor a 0 entonces pasa lo siguiente
            //generar un numero entero desde 0 hasta la longitud del array
            let indiceAleatorio = Math.floor((Math.random() * listaDeVivos.length));
            let nombreDelJugadorSeleccionado = listaDeVivos[indiceAleatorio];
            let jugadorSacrificado = listaDeVivos[indiceAleatorio];

            // enviamos al jugador seleccionado a la lista de muertos
            listaDeMuertos.push(nombreDelJugadorSeleccionado); 

            // eliminar al jugador seleccionado de la lista de vivos
            listaDeVivos.splice(indiceAleatorio, 1); 

            document.querySelector("#subtitulo").innerHTML = JSON.stringify(jugadorSacrificado);

            document.querySelector("#vivos").innerHTML = "Jugadores vivos: " + listaDeVivos;

            // console.log   de lista de vivos
            console.log(listaDeVivos); 
            // selecciona un indice aleatorio dentro del array
    }
}
)
