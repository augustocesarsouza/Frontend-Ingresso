import styled, { keyframes } from 'styled-components';

export const ContainerSecond = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`

interface ContainerInfoNavProps {
  $svgdatapersonal: string;
  $svgformsofpayment: string;
}

export const ContainerInfoNav = styled.div<ContainerInfoNavProps>`
  width: 50%;
  margin-left: 80px;
  margin-left: ${props => props.$svgdatapersonal === "true" && "30px"};
  margin-left: ${props => props.$svgformsofpayment === "true" && "0px"};
  width: ${props => props.$svgformsofpayment === "true" && "30%"};
`

export const Form = styled.form`
  margin-right: 40px;
`

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

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

export const ContainerMainEmailUserAndChangePassword = styled.div`
`

export const WrapperMainEmail = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperEmail = styled.div`

  width: 23px;
  height: 23px;
  fill: gray;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Span = styled.span`
  color: gray;
  font-size: 13px;
`

export const WrapperMainChangePassword = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperChangePassword = styled.div`
  width: 23px;
  height: 23px;
  fill: gray;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Link = styled.a`
  color: #03a9f4;
  font-size: 13px;
  cursor: pointer;
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