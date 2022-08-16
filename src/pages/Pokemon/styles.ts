import styled, { css } from 'styled-components';
import { ITypeName } from '../../interfaces/ITypeName';

type TypeProps = {
    type: ITypeName
}

export const Header = styled.div<TypeProps>`
   ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        margin-top: -96px;
        border-radius: 4px;
    `}
`