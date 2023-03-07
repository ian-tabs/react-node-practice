import React, { useState, useEffect } from "react";
import usePokeApi from "../../custom-hooks/usePokeApi";

function PokemonCheckList() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await usePokeApi.get('pokemon/1');
            setPokemon(response.data);
        }

        fetchData();
    }, []);

    return (pokemon ? (<div>{pokemon.name}</div>) : (<div>Loading...</div>));
}

export default PokemonCheckList