import styled, { keyframes } from 'styled-components';

export const ContainerWarning = styled.div`
  width: 93%;
`

interface ContainerColorWarningProps {
  $focusorblur: string;
  $passwordisvalid: string;
}

export const ContainerColorWarning = styled.div<ContainerColorWarningProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  border-color: ${props => props.$passwordisvalid === "false" ? "red" : props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  margin-bottom: 6px;
  /* width: 55%; */
`

interface ContainerEmailSvgProps {
  $focus: string;
  $passwordisvalid: string;
}

export const ContainerPasswordSvg = styled.div<ContainerEmailSvgProps>`
  /* position: absolute; */
  left: 0;
  top: 0;
  width: 45px;
  height: 22px;
  border-right: 1px solid rgb(221, 221, 221);

  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.$passwordisvalid === "false" ? "red" : props.$focus === "true" ? "#2196f3" : "#8080804d"};
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  color: gray;
  font-size: 13px;

  color: ${props => props.$span === "2" && "#2587d5"};
  cursor: ${props => props.$span === "2" && "pointer"};

  text-align: ${props => props.$span === "6" && "center"};
  
  &:hover {
    color: ${props => props.$span === "2" && "#2587d5c9"};
  }
`

interface SpanWarningProps {
  $hasvalueinput: string;
}

export const SpanWarning = styled.span<SpanWarningProps>`
  position: absolute;
  left: 53px;
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

interface pProps{
  $para: string;
}

export const p = styled.p<pProps>`
  font-size: 13px;
  color: rgb(102 102 102);
  text-align: ${props => props.$para === "2" && "end"};
  margin-bottom: ${props => props.$para === "2" && "10px"};
  font-size: ${props => props.$para === "3" && "12px"};
  margin-top: ${props => props.$para === "3" && "30px"};
  margin-top: ${props => props.$para === "4" && "20px"};

  color: ${props => props.$para === "5" && "gray"};
  font-size: ${props => props.$para === "5" && "12px"};
`

export const ContainerRecaptcha = styled.div``

export const ContainerButtonReturnContinue = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-bottom: 20px;
  margin-top: 30px;
`

interface ButtonProps{
  $button: string;
  $disablebutton: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 15px 20px;
  background-color: white;
  border: 1px solid rgb(52, 120, 193);
  cursor: ${props => props.$disablebutton === "false" && "pointer"};
  color: rgb(52, 120, 193);
  background: ${props => props.$button === "2" && "rgb(52, 120, 193)"};
  color: ${props => props.$button === "2" && "white"};

  &:disabled {
    opacity: 1;
    background: rgb(221, 221, 221);
    border: 1px solid rgb(221, 221, 221);
    color: white;
    user-select: none;
  }

  &:hover {
    background: ${props => props.$button === "1" && "rgb(52, 120, 193)"};
    color: white;
    background: ${props => props.$button === "2" && props.$disablebutton === "false" && "rgb(42 93 147)"};
  }
`

export const ContainerMainLoader = styled.div`
  width: 100%;
  height: 43rem;
  max-height: 43rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const ContainerLoader = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #e3e3e3;
  border-radius: 50%;
  border-right-color: #4070f4;
  animation: ${spin} 1s ease infinite;
`

export const ContainerPadlockIngress = styled.div`
  width: 100px;
  height: 100px;
`

export const ButtonContinue = styled.button`
  padding: 15px 20px;
  background-color: white;
  border: 1px solid rgb(52, 120, 193);
  color: white;
  background: rgb(52, 120, 193);
  cursor: pointer;
  
`

export const ContainerRedirectLoginSecond = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 32%;
  /* height: 550px; */
  max-width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 30px 10px;
`

export const H1SenhaAlteradaSucesso = styled.h1`
  color: gray;
  font-size: 20px;
  font-weight: 400;
`

export const ModalOverlay = styled.div`
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

export const WrapperSvgExit = styled.div`
  position: absolute;
  right: 25px;
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