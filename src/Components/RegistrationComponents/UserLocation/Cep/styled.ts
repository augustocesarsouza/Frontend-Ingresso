import styled from 'styled-components';

export const ContainerYourWarning = styled.div`
  width: 30%;
`

interface ContainerColorProps {
  $focusorblur: string;
  $errorwhenconsultingcpf: string;
}

export const ContainerColor = styled.div<ContainerColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  border-color: ${props => props.$errorwhenconsultingcpf === "false" ? "red" :  props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  margin-bottom: 6px;
 
`

interface SpanProps {
  $hasvalueinputname: string;
}

export const Span = styled.span<SpanProps>`
  position: absolute;
  left: 16px;
  top: ${props => props.$hasvalueinputname === "true" ? "4px" : "13px"};
  font-size: ${props => props.$hasvalueinputname === "true" ? "11px" : "13px"};
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
  user-select: none;
`

interface ContainerButtonOkProps {
  $unlockbuttonok: string;
}

export const ContainerButtonOk = styled.div<ContainerButtonOkProps>`
  width: 55px;
  height: 33px;
  background: rgb(52, 120, 193);
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: ${props => props.$unlockbuttonok === "true" ? "pointer" : "not-allowed"};
  pointer-events: ${props => props.$unlockbuttonok === "true" ? "visible" : "none"};
  user-select: none;
  &:hover{
    background: ${props => props.$unlockbuttonok === "true" ? "rgb(27 98 175)" : ""};
  }
`

interface ButtonProps {
  $unlockbuttonok: string;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  color: white;
  font-weight: 600;
  cursor: ${props => props.$unlockbuttonok === "true" ? "pointer" : "not-allowed"};
  pointer-events: ${props => props.$unlockbuttonok === "true" ? "visible" : "none"};

`