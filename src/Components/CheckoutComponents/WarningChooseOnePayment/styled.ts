import styled from 'styled-components';

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
  height: 33rem;
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
    color: #ed2525;
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