import styled from 'styled-components';

interface ContainerMainProps {
  $svgformsofpayment: string;
}

export const ContainerMain = styled.div<ContainerMainProps>`
  width: 70%;

  width: ${props => props.$svgformsofpayment === "true" && "60%"};
`