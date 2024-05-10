import styled from 'styled-components';



export const ContainerSvgSpan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #80808021;
  border-left: 5px solid #039de2;
  cursor: pointer;
  gap: 8px;
`

export const ContainerSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    width: 25px;
    height: 25px;
  }
`

export const P = styled.p`
  color: #2196F3;
  font-size: 15px;
  text-align: center;
  display: block;
`

export const Span = styled.span`
  font-size: 15px;
  text-align: center;
  display: block;
`

export const ContainerChoiceSeats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContainerSeats = styled.div`
  display: flex;
`

export const ContainerPaymentTypeChosen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContainerPaymentType = styled.div`
  display: flex;
  flex-direction: column;
`

export const PTypes = styled.p`
  font-size: 12px;
`