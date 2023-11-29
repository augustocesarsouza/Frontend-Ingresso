import styled, { keyframes } from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
`

export const ContainerMainLoader = styled.div`
  width: 72%;
  height: 100%;
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