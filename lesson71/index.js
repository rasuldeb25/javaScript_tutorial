//fetch = function used for making HTTP requests to fetch resiurces
//          JSON style data, image, files
//          Simplifies  asynch data fetching in JS and
//          used for interacting with APIs to retrive and send
//          data asych over the web
//          fetch (url, {options})
/*
1.
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then( response => {
        if(!response.ok){
            throw new Error("Could not fetch resourse");
        }
        return response.json();
    })
    .then(response => console.log(data.id))
    .catch(error => console.log(error));
*/
async function fetchData() {
    try {
        const pokemonNameInput = document.getElementById("pokemonName");
        const pokemonName = pokemonNameInput.value.toLowerCase();

        if (!pokemonName) {
            console.error("Pokemon name cannot be empty");
            document.getElementById("pokemonSprite").style.display = "none";
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
        document.getElementById("pokemonSprite").style.display = "none";
    }
}