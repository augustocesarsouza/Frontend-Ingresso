import styled from 'styled-components';

export const ModalOverlayCodeConfirm = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ContainerCodeConfirm = styled.div`
  background-color: #ffffff;
  position: relative;
  border-radius: 5px;
  width: 330px;
  height: 480px;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: inherit;
  flex-direction: column;
  gap: 15px;
`

export const WrapperSvgExit = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  
  svg {
    color: #2196F3;
    width: 100%;
    height: 100%;
  }
`

export const WrapperImgPadlock = styled.div`
  width: 120px;
  height: 120px;
`

export const H1 = styled.h1`
  font-size: 21px;
  color: gray;
`

export const p = styled.p`
  font-size: 13px;
  text-align: center;
  color: #808080db;
`

interface ContainerColorWarningProps {
  $focusorblur: string;
}

export const ContainerColorWarning = styled.div<ContainerColorWarningProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  border-color: ${props =>  props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  margin-bottom: 6px;
  width: 90%;
`

interface ContainerEmailSvgProps {
  $focus: string;
}

export const ContainerEmailSvg = styled.div<ContainerEmailSvgProps>`
  /* position: absolute; */
  left: 0;
  top: 0;
  width: 45px;
  height: 22px;
  border-right: 1px solid rgb(221, 221, 221);

  svg {
    width: 100%;
    height: 100%;
    fill: ${props =>  props.$focus === "true" ? "#2196f3" : "#8080804d"};
  }
`

interface SpanWarningProps {
  $hasvalueinput: string;
}

export const SpanWarning = styled.span<SpanWarningProps>`
  position: absolute;
  left: 56px;
  top: ${props => props.$hasvalueinput === "true" ? "4px" : "13px"};
  font-size: ${props => props.$hasvalueinput === "true" ? "11px" : "13px"};
  color: #a4a2a2;
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease;
`

interface InputProps {
  $hasvalueinputname: string;
}

export const Input = styled.input<InputProps>`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  padding: ${props => props.$hasvalueinputname === "true" ? "0px" : "13px"};
  padding-top: ${props => props.$hasvalueinputname === "true" && "18px"};
  padding-left: ${props => props.$hasvalueinputname === "true" && "17px"};
  padding-bottom: ${props => props.$hasvalueinputname === "true" && "8px"};
`

export const WrapperNotReceiveEmail = styled.div`
  display: flex;
  gap: 10px;

  svg {
    color: #2196F3;
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 14px;
  color: ${props => props.$span === "1" && "grey"};
  color: ${props => props.$span === "2" && "#2196F3"};
  cursor: ${props => props.$span === "2" && "pointer"};

  color: ${props => props.$span === "3" && "#ff0000bf"};
`

export const WrapperButtonAll = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

export const WrapperButtonCancel = styled.div`
  border: 1px solid rgb(52, 120, 193);

  button {
    padding: 15px;
    border: none;
    color: rgb(52, 120, 193);
    background: white;
    cursor: pointer;
    width: 10rem;

  }
`

export const WrapperButtonEnter = styled.div`
  button {
    padding: 15px;
    border: none;
    color: white;
    background: rgb(52, 120, 193);
    cursor: pointer;
    width: 10rem;

    &:hover {
      background: rgb(42 98 157);
    }
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`