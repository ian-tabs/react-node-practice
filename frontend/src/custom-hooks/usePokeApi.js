import axios from "axios";

const usePokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export default usePokeApi;
