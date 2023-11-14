import styled, { css } from 'styled-components';
import { Theme } from '../../../Style/theme';

export const FirstContainer = styled.div`
  width: 50%;
`

export const ContainerHomeLocation = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerHome = styled.div`
  margin-left: 10px;
  margin-right: 83px;
  cursor: pointer;
`

export const HomeLink = styled.a``

export const ImgIngresso = styled.img``

export const ContainerLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  p {
    color: rgb(231 235 248);
  }

  p {
    color: rgb(221 227 248 / 85%);
  }
  
`

export const Paragraph = styled.p`
  /* color: white; */
`