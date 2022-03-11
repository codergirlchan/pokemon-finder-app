export default async function fetchPokemonApi(pokemon) {
    let response;
    try {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`, 
            {
                method: 'GET'
            }
        );
        return response.json();
    } catch(e) {
        console.log(e);
    }
}