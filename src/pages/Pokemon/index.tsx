import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useTheme } from "styled-components";
import { ITypeName } from "../../interfaces/ITypeName";
import IPokemonProps from "../../interfaces/IPokemonProps";
import api from "../../services/api";
import * as style from './styles'
import styles from './Pokemon.module.scss';

function App() {

  const { id } = useParams();
  const {colors} = useTheme();

  const [pokemon, setPokemon] = useState({} as IPokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail(): Promise<void> {
      try {
        const response = await api.get(`/pokemon/${id}`)

        const {stats, abilities, name, types} = response.data;

        const currentType = types[0].type.name as ITypeName;

        const color = colors.backgroundCard[currentType];

        setPokemon({
          name, stats, abilities, types, color
        });
        
        
      } catch(err) {

      } finally {
        setLoad(false)
      }
    }

    getPokemonDetail()

  }, [])

  return <>
  {load ? <> 
    <p>Carregando...</p>
    </> :
    <>
      <div className="dv-padding-xdpi dv-purple-bg"></div>
      <div className="dv-line dv-center">
        <style.Header className="dv-column dv-horizontal-align-center dv-vertical-align-center" type={pokemon.types[0].type.name}>
          <div>
            <img className={styles.PokemonImage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            />
          </div>
          <h1 className={styles.PokemonName}>{pokemon.name}</h1>
        </style.Header>
      </div>
    </>
  }
  </>
}

export default App;
