import IPokemonType from "./IPokemonType";

export default interface IRequest {
    id: number;
    types: IPokemonType[];
};