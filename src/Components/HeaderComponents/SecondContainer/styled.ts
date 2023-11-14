import styled, { css } from 'styled-components';
import { Theme } from '../../../Style/theme';

export const SecondContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`

export const ContainerLoupe = styled.div`
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

export const ContainerUserImgSvg = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`

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

export const ContainerQuestion = styled.div`
  margin-right: 80px;
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
