import styled from 'styled-components';

export const ContainerProductsMain = styled.div`
 border-bottom: 1px solid #84848436;
 padding: 10px 0px 16px 0px;
`

export const ContainerProductsSvg = styled.div`
  padding: 0px 0px 10px 0px;
  display: flex;
  gap: 5px;

  svg {
    width: 17px;
    height: 17px;
  }
`

interface SpanProductsProps {
  $span: string;
}

export const SpanProducts = styled.span<SpanProductsProps>`
  font-size: ${props => props.$span === "1" && "15px"};
  color: ${props => props.$span === "1" && "#5c5c5ced"};
  font-weight: ${props => props.$span === "1" && "400"};
`

export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const ContainerInfoTickedPrice = styled.div`
  display: flex;
  gap: 5px;
`

export const ContainerHowManyTimes = styled.div``

export const ContainerInfoMoreAndPriceTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ContainerMoreInfoPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 103px;
`

interface SpanTickedProps {
  $span: string;
}

export const SpanTicked = styled.span<SpanTickedProps>`
  font-size: ${props => props.$span === "2" && "13px"};
  font-size: ${props => props.$span === "3" && "12px"};
  font-size: ${props => props.$span === "4" && "15px"};
  color: ${props => props.$span === "1" && "#db8e00"};
  color: ${props => props.$span === "2" && "#6e6e6e"};
  color: ${props => props.$span === "3" && "#929292"};
  color: ${props => props.$span === "4" && "#4a4a4a"};
`



