import styled from 'styled-components';

export const ContainerPaymentForm = styled.div`
  width: 80rem;

  @media (max-width: 1200px){
    width: 63rem;
  }
`

export const ContainerMainPaymentMethods = styled.div``

export const ContainerSvgCardPaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 13px;
  background: #80808014;

  svg {
    color: #808080cf;
  }
`

export const P = styled.p`
  color: grey;
  font-size: 15px;
`

export const ContainerTypesPayment = styled.div`
  border-left: 1px solid #7979794f;
  border-bottom: 1px solid #7979794f;
  border-right: 1px solid #7979794f;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  /* gap: 15px; */
`
