import { useState } from 'react';
import fetchPokemonApi from "../../utils/fetch-pokemon-api";

const getPokemonData = async(setPokemonData, pokemon) => {
    let pokemonData;
    const pokemonID = typeof pokemon === 'string' ? pokemon.toLowerCase() : pokemon;
    
    try {
        pokemonData = await fetchPokemonApi(pokemonID);
        setPokemonData(pokemonData);
    } catch(e) {
        console.log(e);
    }
}

export default function SearchInput(props) {
    const { setPokemonData } = props;
    const [ currentPokemon, setCurrentPokemon ] = useState('');

    return (
        <div>
            <input type="text" onChange={(e) => setCurrentPokemon(e.target.value)} />
            <button onClick={async() => await getPokemonData(setPokemonData, currentPokemon)}> 
                Hello 
            </button>
        </div>
    )
};