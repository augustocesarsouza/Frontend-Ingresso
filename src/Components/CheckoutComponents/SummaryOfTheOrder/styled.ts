import styled from 'styled-components';

export const ContainerOrderSummary = styled.div`
  margin-top: 20px;
`

export const ContainerSummary = styled.div`
  border-bottom: 1px solid #84848436;
  padding: 0px 0px 15px 7px;
`

interface SpanSummaryProps {
  $span: string;
}

export const SpanSummary = styled.span<SpanSummaryProps>`
  font-size: ${props => props.$span === "1" && "18px"};
  color: ${props => props.$span === "1" && "#5c5c5ced"};
  font-weight: ${props => props.$span === "1" && "500"};

  font-size: ${props => props.$span === "2" && "15px"};
  color: ${props => props.$span === "2" && "#5c5c5ced"};
  font-weight: ${props => props.$span === "2" && "400"};
`


export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const ContainerFullPayment = styled.div``

export const ContainerTotalRate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 0px 35px;
`

export const SpanTotalRate = styled.span`
  font-size: 12px;
  color: #6e6e6ea6;
`

export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 0px 10px;

  svg {
    fill: #606060;
    width: 20px;
  }
`

export const ContainerSvgMoneyTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const SpanTotal = styled.span`
  font-size: 15px;
  color: #535353;
  font-weight: 500;
`