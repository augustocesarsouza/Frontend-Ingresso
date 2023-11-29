import styled, { css } from 'styled-components';
import { Theme } from '../../../Style/theme';

export const ContainerUserLogo = styled.div`
  cursor: pointer;

  ${({theme}: { theme: Theme }) => css`
    svg {
      width: ${theme.svg.width};
      fill: ${theme.svg.fill};
    }

    &:hover {
      svg {
        fill: ${theme.svg.fillhover};
      }
    }
  `}
`

export const ContainerName = styled.div``

export const P = styled.p`
  color: #ffc811;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
`


export const Span = styled.span`
  width: 9rem;
  font-size: 14px;
  cursor: pointer;
  color: rgb(231 235 248);
  user-select: none;

  &:hover {
    color: rgb(221 227 248 / 85%);
  }
`