import { useState } from 'react';
import SearchInput from '../SearchInput';
import PokemonDetails from '../PokemonDetails';

export default function SearchWrapper() {
    const [pokemonData, setPokemonData] = useState({});

    return (
        <div>
            <SearchInput setPokemonData={setPokemonData} />
            <PokemonDetails data={pokemonData} />
        </div>
    )
}