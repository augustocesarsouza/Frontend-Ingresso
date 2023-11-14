import styled from 'styled-components';

interface ContainerWarningProps {
  $width: string;
}

export const ContainerWarning = styled.div<ContainerWarningProps>`
  display: flex;
  flex-direction: column;
  width: ${props => `${props.$width}%`};
`

interface ContainerAllColorsProps {
  $focusorblur: string;
}

export const ContainerAllColors = styled.div<ContainerAllColorsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  border-color: ${props => props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
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
  $blocktype: string;
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
  
  pointer-events: ${props => props.$blocktype === "true" && "none"};
  
  background: ${props => props.$blocktype === "true" && "#8080804a"};
  color: ${props => props.$blocktype === "true" && "#808080"};
`