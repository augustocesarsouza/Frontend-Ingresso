import styled, { css } from 'styled-components';
import { Theme } from '../../Style/theme';

export const ContainerMain = styled.div`
  ${({theme}: { theme: Theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;