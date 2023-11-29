import styled, { keyframes } from 'styled-components';

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