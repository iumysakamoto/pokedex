import React from "react";
import IPokemon from "../../interfaces/IPokemon";
import * as style from './styles'
import styles from './Card.module.scss';
import pokeballCardImage from '../../assets/img/pokeballCard.png';
import { Link } from "react-router-dom";

type Props = {
    data: IPokemon
}

export function Card({data, ...rest}: Props) {
    return (
        <style.PokemonContainer>
             <style.PokemonCard>
                <Link to={"/pokemon/" + data.id}>
                    <div className="dv-line">
                        <div className="dv-column dv-horizontal-align-center">
                            <img className={styles.PokemonImage}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
                            />
                        </div>
                    </div>
                    <style.PokemonId>#{data.id}</style.PokemonId>
                    <style.PokemonName>{data.name}</style.PokemonName>
                    <style.PokemonContentType>
                        {data.types.map(pokemonType => 
                            <style.PokemonType type={pokemonType.type.name}>
                                <style.PokemonText key={pokemonType.type.name}>
                                    {pokemonType.type.name}
                                </style.PokemonText>
                            </style.PokemonType>
                        )}
                    </style.PokemonContentType>
                </Link>
            </style.PokemonCard>
        </style.PokemonContainer>
    )
}