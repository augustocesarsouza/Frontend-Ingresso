import styled from 'styled-components';

export const ContainerMainConfirmPassword = styled.div`
  background: #8080801f;
  padding: 15px;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const H2 = styled.h2`
  font-size: 15px;
  color: gray;
`


export const p = styled.p`
  font-size: 13px;
  color: rgb(102 102 102);
  text-align: end;
  margin-bottom: 10px;
  font-size: 12px;
  margin-top: 30px;
  margin-top: 20px;

  color: gray;
  font-size: 12px;
`

export const ContainerRecaptcha = styled.div``


export const ContainerYourNameAndWarning = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding: 17px 0px 0px 15px;
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