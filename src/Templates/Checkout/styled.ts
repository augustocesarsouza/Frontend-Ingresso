import styled, { keyframes } from 'styled-components';

export const ContainerMain = styled.div`
  background: white;
  height: 100vh;
`

export const ContainerMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* height: 91%; */
  /* gap: 25px; */
  /* margin: 0px 80px 0px 50px; */
  
`

export const ContainerLeftRightSide = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
 
  /* @media (max-width: 1285px){
    width: 84%;
  } */
  @media (max-width: 1200px){
    width: 94%;
  }
  /* margin: 0px 80px 0px 50px; */
`

export const ContainerFirst = styled.div`
  border-right: 1px solid #bcbcbc1c;
`

export const ContainerMainLoader = styled.div`
  width: 100%;
  height: 100%;
  background: #5f5f5f6b;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
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

export const WrapperMandatoryToChoose = styled.div`
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

export const ContainerAlert = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 30%;
  height: 30rem;
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  gap: 30px;
`

export const WrapperSvgWarning = styled.div`
  svg {
    width: 77px;
    height: 77px;
    color: #44ed44;
  }
`

export const WrapperSvgExit = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  cursor: pointer;

  svg {
    width: 27px;
    height: 27px;
    color: #2196f3;
  }
`

export const WrapperPAlertAndSpanAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 24rem;
`

export const PAlert = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: gray;
`

export const SpanAlert = styled.span`
  font-size: 13px;
  color: #808080ba;
  text-align: center;
`

export const ButtonContinue = styled.button`
  padding: 15px;
  border: none;
  background: #3478c1;
  color: white;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background: #3478c1eb;
  }
`