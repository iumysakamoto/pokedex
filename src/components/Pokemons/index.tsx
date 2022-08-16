import React, { useEffect, useState } from "react";
import axios from 'axios';
import api from "../../services/api";
import IPokemon from "../../interfaces/IPokemon";
import IRequest from "../../interfaces/IRequest";
import style from "./Pokemons.module.scss";
import { Card } from "../Card";


export function Pokemons() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: IPokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payloadPokemons);
    }
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<IRequest> {
    const response = await api.get(url);
    const { id, types } = response.data;

    return {
      id,
      types,
    };
  }

  return (
    <>
      {pokemons.map((pokemon) => (
        <Card data={pokemon} />
      ))}
    </>
  );
}

export default Pokemons;
