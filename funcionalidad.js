
const controlClick = () => { 
    const idButton = document.getElementById("btnBuscarId");
    idButton.addEventListener("click", () => {cambiarPokemon()} );
}

const recuperarPokemon = () => {
    const pokemonAnteriorImg = localStorage.getItem("imagen");
    const pokemonAnteriorNombre = localStorage.getItem("nombre");
    if (pokemonAnteriorImg && pokemonAnteriorNombre) {
        cambiarImgPokemon(pokemonAnteriorImg);
        cambiarNombre(pokemonAnteriorNombre);
    } else {
        document.getElementById("botonResetId").style.backgroundColor = "red";
    }
    controlClick();
}

const cambiarPokemon = async () => {
    const numAleatorio = Math.floor(Math.random() * 300);
    const datosPokemon = await llamadaApi(numAleatorio); 
    cambiarImgPokemon(datosPokemon.sprites.other.dream_world.front_default);
    cambiarNombre(datosPokemon.species.name);
    localStorage.setItem("imagen", datosPokemon.sprites.other.dream_world.front_default);
    localStorage.setItem("nombre", datosPokemon.species.name);
    document.getElementById("botonResetId").style.backgroundColor = "greenyellow";
 }
 
const llamadaApi = async (numero)=>{
    const llamada = await(await fetch('https://pokeapi.co/api/v2/pokemon/' + numero)).json();
    return(llamada);
}

const cambiarImgPokemon = (datos) => {
    const imagenPokemon = document.getElementById("imgPokemonId");
    imagenPokemon.src = datos;
}

const cambiarNombre = (datos) => {
    const nombre = document.getElementById("nombrePokemonId");
    nombre.innerHTML = datos;
}


const controlReset = () => {
    const botonReset = document.getElementById("botonResetId");
    botonReset.addEventListener("click", () => {apagarPokedex(botonReset)});
}

const apagarPokedex = (boton) => {
    const imgPokedex = document.getElementById("imgPokemonId");
    imgPokedex.src = "./img/pokeball.gif";
    boton.style.backgroundColor = "red";
    const textoPokedex = document.getElementById("nombrePokemonId");
    textoPokedex.innerHTML = "???";
    localStorage.clear();
}

controlReset();
recuperarPokemon();






