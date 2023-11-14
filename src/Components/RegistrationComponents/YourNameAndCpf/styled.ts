import styled from 'styled-components';

export const ContainerInputExternal = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerYourNameAndWarning = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`

interface ContainerAllColorsProps {
  $focusorblur: string;
  $greaterthan3lessthan61: string;
}

export const ContainerAllColors = styled.div<ContainerAllColorsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  border-color: ${props => props.$greaterthan3lessthan61 === "false" ? "red" : props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  margin-bottom: 6px;
`

interface SpanNameProps {
  $hasvalueinputname: string;
}

export const SpanName = styled.span<SpanNameProps>`
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
`

export const ContainerYourCpfWarning = styled.div`
  width: 25%;
`

interface ContainerCpfColorProps {
  $focusorblur: string;
  $greaterThan14Cpf: string;
}

export const ContainerCpfColor = styled.div<ContainerCpfColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  border-color: ${props => props.$greaterThan14Cpf === "false" ? "red" : props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  margin-bottom: 6px;
 
`

interface SpanCpfProps {
  $hasvalueinputname: string;
}

export const SpanCpf = styled.span<SpanCpfProps>`
  position: absolute;
  left: 16px;
  top: 4px;
  font-size: 11px;
  color: #a4a2a2;
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease;
`

interface InputCpfProps {
  $hasvalueinputname: string;
}

export const InputCpf = styled.input<InputCpfProps>`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0px;
  padding-top: 18px;
  padding-left: 17px;
  padding-bottom: 8px;
  user-select: none;
`