form = document.querySelector("form");


async function loadPokemon(pokeType) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeType}`);
    const recievedData = await response.json();
    return recievedData;
}
async function updateVals(pokemon){
    
    const abilityUrl = pokemon.abilities[0].ability.url;
    const firstAbilityRes = await fetch(abilityUrl);
    const firstAbility = await firstAbilityRes.json();

    const englishEffect = firstAbility.effect_entries.find(
        entry => entry.language.name === "en"
    );

    document.getElementById("pokemon-img").src = 
        pokemon.sprites.front_default;
    document.getElementById("name").textContent = 
        pokemon.name;
    document.getElementById("abilityName").textContent = 
        pokemon.abilities[0].ability.name;
    document.getElementById("abilityDesc").textContent = 
        englishEffect.effect;
    const pokeType = pokemon
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const textInput = document.querySelector(".pokeInput");
    const pokemon = await loadPokemon(textInput.value.toLowerCase());

    updateVals(pokemon);
});