import styled, { css } from 'styled-components';

export const ContainerMain = styled.div`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;