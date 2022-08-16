import IPokemonType from "./IPokemonType";

export default interface IPokemon {
    name: string;
    url: string;
    id: number;
    types: IPokemonType[];
};
