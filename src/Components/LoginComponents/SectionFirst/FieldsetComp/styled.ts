import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 10px;
  margin-top: 13px;
  width: 32rem;
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
  width: 100%;
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