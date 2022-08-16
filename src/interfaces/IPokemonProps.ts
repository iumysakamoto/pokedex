import IAbility from "./IAbility";
import IPokemonType from "./IPokemonType";
import IStats from "./IStats";

export default interface IPokemonProps {
    name: string;
    stats: IStats[];
    abilities: IAbility[];
    types: IPokemonType[];
    color: string;
};