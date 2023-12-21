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

export const ContainerEnterOrRegisterMain = styled.div`
  position: absolute;
  left: 210px;
  top: 62px;
  background-color: #191919;
  width: 55rem;
  height: 30rem;
  display: flex;
  padding: 30px 10px;
  z-index: 9999;

  > svg {
    position: relative;
    color: #191919;
    font-size: 30px;
    left: 43px;
    bottom: 47px;
  }
`

export const ContainerEnterOrRegister = styled.div`
  width: 50%;
  padding-right: 15px;
`

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const H2 = styled.h2`
  font-size: 17px;
  color: white;
  font-weight: 600;
`

export const P = styled.p`
  font-size: 14px;
  color: #4aafff;
`

export const ContainerAttByLocationGps = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const WrapperSvgLocation = styled.div`
  width: 25px;
  height: 25px;

  > svg {
    width: 100%;
    height: 100%;
  }
`

export const ButtonRegister = styled.button`
  padding: 10px;
  border: none;
  background: #0099ff;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
`

export const ContainerLineWhite = styled.div`
  border-right: 1px solid #ffffff5e;
  margin-left: 13px;
`

export const ContainerLogin = styled.div`
  width: 30%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const link = styled.a`
  color: #2196f3;
  font-size: 17px;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContainerSelectState = styled.div`
  position: relative;
`

interface SelectProps {
  $clickselect: string;
}

export const Select = styled.select<SelectProps>`
  user-select: none;
  outline: none;
  padding: 13px 8px;
  color: #676767;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: ${props => props.$clickselect === "true" ? "#2196f3" : "#8080804d"};
  margin-bottom: 6px;
  width: 100%;
  appearance: none;
  border-radius: 3px;
`

export const Option = styled.option``

export const ContainerDownArrow = styled.div`
  width: 13px;
  height: 13px;
  position: absolute;
  right: 12px;
  top: 14px;

  > svg {
    width: 100%;
    height: 100%;
    rotate: 90deg;
  }
`

export const ContainerSelectCity = styled.div`
  position: relative;
`

export const ContainerButtonChangeCity = styled.div`
`

export const ButtonChangeCity = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 5px;
  background: #4aafff;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #45a3ed;
  }
`

export const ContainerLastLocation = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`

export const ContainerSvgChange = styled.div`
  width: 23px;
  height: 23px;

  > svg {
    width: 100%;
    height: 100%;
  }
`