import styled from 'styled-components';

export const SpanBackPage = styled.span`
  color: #b6b6b6;
`

export const a = styled.a`
  cursor: pointer;
`

interface ContainerOrdersDatePersonalPaymentProps {
  $svgformsofpayment: string;
}

export const ContainerOrdersDatePersonalPayment = styled.div<ContainerOrdersDatePersonalPaymentProps>`
  margin-top: 20px;
  width: 30rem;
  width: ${props => props.$svgformsofpayment === "true" && "100%"};
`

interface ContainerInfoProps {
  $svgformsofpayment: string;
}

export const ContainerInfo = styled.div<ContainerInfoProps>`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: ${props => props.$svgformsofpayment === "true" && "100%"};
`

export const WrapperSvg = styled.div``