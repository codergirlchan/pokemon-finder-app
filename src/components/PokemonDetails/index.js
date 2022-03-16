import Loader from "../Loader";

const convertWeight = (weight) => {
    return (weight/10).toFixed(1)
}

export default function PokemonDetails(props) {
    const { data } = props
    return (
        <>
        <Loader />
        <div>
            <h1>Pokemon Name: {data.name}</h1>
            {
                data.sprites && 
                <img alt="it is a pokemon" src={data.sprites.other['official-artwork'].front_default} />
            }
            <p>Pokedex ID: {data.id}</p>
            <p>Weight: {data.weight && `${convertWeight(data.weight)} kg`}</p>
        </div>
        </>
    )
}