import styled from 'styled-components';
import { paymentSelectSeatsProps } from '../../../Templates/Checkout/Checkout';


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

interface ContainerTicketsProps {
  $existone: string;
}

export const ContainerTickets = styled.div<ContainerTicketsProps>`
  display: flex;
  /* align-items: center; */
  /* padding: 9px 0px 9px 10px;//9px 0px 20px 10px */
  padding: ${props => props.$existone === "true" && "9px 0px 9px 10px"};
 
  flex-direction: column;
  gap: 30px;
  
  svg {
    fill: gray;
  }
`

export const ContainerGlobal = styled.div`
  /* display: block; */
`

interface ContainerTickedMainProps {
  $lengthpayment: paymentSelectSeatsProps[];
}

export const ContainerTickedMain = styled.div<ContainerTickedMainProps>`
 border-bottom: 1px solid #84848436;
 padding-bottom: ${props => props.$lengthpayment.some((el) => el.amountSeats > 0) && "10px"};
`

export const ContainerTicketsSvg = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 0px;
  svg {
    fill: gray;
  }
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