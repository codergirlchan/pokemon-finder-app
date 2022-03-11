export default function PokemonDetails(props) {
    const { data } = props
    return (
        <div>
            <h1>Pokemon Name: {data.name}</h1>
            {
                data.sprites && 
                <img alt="it is a pokemon" src={data.sprites.other['official-artwork'].front_default} />
            }
            <p>Pokedex ID: {data.id}</p>
            <p>Weight: {data.weight}</p>
        </div>
    )
}