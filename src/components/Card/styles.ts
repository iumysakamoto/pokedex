import styled, { css } from 'styled-components'
import { ITypeName } from '../../interfaces/ITypeName'

type PokemonType = {
    type: ITypeName
}

export const PokemonContainer = styled.div`
    @media only screen and (min-width: 1280px) {
        position: relative;
        width: calc((100% / 4));
        display: inline-block;
        justify-content: center;
    }
    @media screen and (max-width: 1279px) and (min-width: 960px) {
        position: relative;
        width: calc((100% / 3));
        display: inline-block;
        justify-content: center;
    }
    @media only screen and (max-width: 959px) {
        position: relative;
        justify-content: center;
    }
`

export const PokemonCard = styled.div`
    background: #f6f6f6;
    padding: 16px;
    border-radius: 4px;
    margin: 16px;
`

export const PokemonId = styled.text`
   font-size: 16px;
   color: #757575;
`

export const PokemonName = styled.p`
    margin-bottom: 8px;
   font-size: 24px;
   font-weight: 700;
`

export const PokemonContentType = styled.div`
    display: flex;
`

export const PokemonType = styled.div<PokemonType>`
   ${({ theme, type }) => css`
        background: ${theme.colors.boxType[type]};
        padding: 5px;
        width: 65px;
        border-radius: 4px;
        margin-right: 5px;
        justify-content: center;
        align-items: center;
    `}
`

export const PokemonText = styled.p`
    font-size: 14px;
    text-align: center;
    color: white;
`

