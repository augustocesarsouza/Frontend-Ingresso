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

export const P = styled.p`
  color: #ffffff;
  font-weight: 600;
  user-select: none;
`

export const ContainerNavMainUser = styled.div`
  position: absolute;
  left: -285px;
  top: 50px;
  background-color: #191919;
  width: 51rem;
  height: 30rem;
  display: flex;
  padding: 24px 0px;

  svg {
    position: relative;
    color: #191919;
    font-size: 39px;
    left: 290px;
    bottom: 45px;
  }
`

export const ContainerNav = styled.div`
  width: 100%;
  gap: 25px;
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const ContainerLineWhite = styled.div`
  border-bottom: 1px solid #ffffff5e;
  width: 95%;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Link = styled.a`
  font-weight: 500;
  color: #0d8fff;
  cursor: pointer;

  &:hover {
    color: #0a71c9;
  }
`