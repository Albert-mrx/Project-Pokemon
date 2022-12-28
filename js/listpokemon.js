
const pokemonSelect = document.getElementById('pokemon-select');
const pokemonName = document.getElementById('pokemon-name');
const pokemonImage = document.getElementById('pokemon-image');
const btnAdd = document.getElementById('btn-add');
//contenido de option
const opcion = document.getElementById('option-container').value;

fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {})
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;
        console.log(pokemons);
        for (const index in pokemons) {
            const pokemonOption = document.createElement('option');
            pokemonOption.value = pokemons[index].url;
            pokemonOption.text = pokemons[index].name;
            pokemonSelect.appendChild(pokemonOption);
        }
    });

pokemonSelect.addEventListener('change', event => {
    const selectedPokemonUrl = event.target.value;
    fetch(selectedPokemonUrl, {})
        .then(response => response.json())
        .then(pokemonData => {
            const pokemonNameText = pokemonData.name;
            console.log(pokemonNameText);
            pokemonName.textContent = pokemonNameText;
            const pokemonImageUrl = pokemonData.sprites.front_default;
            console.log(pokemonImageUrl);
            pokemonImage.src = pokemonImageUrl;
        });
});

function search(dat) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151',{
        method : 'POST',
        headers:{
            'content-type':'aplication/json'
        },
        body: JSON.stringify(dat)
    })
    .then(response=>response.json())
    .then(data =>{
        if(data.name === opcion){
            return data.name;
        }
    })
}
function Add() {
    fetch("http://localhost:8000")
    .then(response =>response.json())
    .then(data => {
        search(opcion)
            let alerta = confirm("desea Agregar a Favoritos?")
            if(alerta==true){
            data.pokemonFavoritos = opcion;
            }else{
                alert("hubo un error no pudo guardarse");
            }
    })
}

btnAdd.onclick = ()=>{
    Add();
}



// const addButton = document.querySelector('input[type="button"]');
// addButton.addEventListener('click', () => {

//     // Obtener los datos del Pokémon a añadir
//     const pokemonName = pokemonData.name;
//     const pokemonImageUrl = pokemonData.sprites.front_default;

//   // Enviar solicitud POST al servidor para añadir el Pokémon a la base de datos
//     fetch('http://localhost:9000/api/users', {
//     method: 'POST',
//     headers: {
//     'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name: pokemonName, imageUrl: pokemonImageUrl }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Código a ejecutar cuando se haya añadido el Pokémon a la base de datos
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// });

