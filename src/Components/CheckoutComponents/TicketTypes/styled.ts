import styled from 'styled-components';
import { listSeatsMarked } from '../../../Templates/Checkout/Checkout';

export const ContainerTicketTypes = styled.div`
  width: 64%;
  
`

export const ContainerClubUol = styled.div`
  background: #ededed;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`

export const WrapperImgUol = styled.div`
  width: 80px;
`

export const ImgUol = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContainerSpanUol = styled.div`
  display: flex;
`

interface SpanUolProps {
  $span: string;
}

export const SpanUol = styled.span<SpanUolProps>`
  font-size: 11px;
  /* color: orange; */
  color: ${props => props.$span === "1" ? "orange" : "#03a9f4"};
`

export const ContainerTypeSeats = styled.div`
  border-bottom: 1px solid #a4a4a478;
  padding: 0px 9px 15px 11px;
`

export const SpanTypeSeats = styled.span`
  font-size: 13px;
  color: #a4a4a4;
`

export const ContainerFormOfPaymentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`

export const ContainerSeatsChosenMain = styled.div`
  display: flex;
  gap: 10px;
`

interface WrapperSeatsChosenProps {
  $sea: string;
  $formname: string;
  $paymentkeyvalue: {[key: string]: listSeatsMarked[];}
}

export const WrapperSeatsChosen = styled.div<WrapperSeatsChosenProps>`
  background: #c8c8c8;
  /* padding: 5px; */
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  /* cursor: pointer; */
  cursor: ${props => props.$paymentkeyvalue[props.$formname].map((ea) => ea.nameSeat === props.$sea && ea.isSelect === 0) ? "pointer" : "no-drop"};
  background: ${props => props.$paymentkeyvalue[props.$formname].some((ea) => ea.nameSeat === props.$sea && ea.isSelect === 0) && "#3478c1"};
  background: ${props => props.$paymentkeyvalue[props.$formname].some((ea) => ea.nameSeat === props.$sea && ea.isSelect === 1) && "#db8e02"};
  background: ${props => props.$paymentkeyvalue[props.$formname].some((ea) => ea.nameSeat === props.$sea && ea.isSelect === 2) && "#c8c8c8"};
 
  cursor: ${props => props.$paymentkeyvalue[props.$formname].some((ea) => ea.nameSeat === props.$sea && ea.isSelect === 2) && "no-drop"};
  user-select: none;
  `

   /* cursor: ${props => props.$formname === props.$se.namePayment &&  props.$se.isSelect === true && "pointer"};
  cursor: ${props => props.$formname === props.$se.namePayment &&  props.$se.isSelect === true && "pointer"}; */
  /* cursor: ${props => props.$formname === props.$se.namePayment &&  props.$se.isSelect === true ? "pointer" :  "no-drop"}; */

  /* background: ${props => props.$numberseats === props.$whichwaschosennamber && "#ed9900"}; */
  /* background: ${props => props.$whichwaschosennamber > props.$numberseats && "#ed9900"}; */
  /* background: ${props =>  props.$seatsmarked.includes(props.$seats) ?"#ed9900" :  "#c8c8c8"}; */

export const ContainerForm = styled.div`
  border-bottom: 1px solid #8888881f;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

export const ContainerFormPayment = styled.div`
  display: flex;
  flex-direction: column;
  
`

interface SpanFormProps {
  $span: string;
}

export const SpanForm = styled.span<SpanFormProps>`
  font-size: ${props => props.$span === "1" && "14px"};
  font-weight: ${props => props.$span === "1" && "400"};
  color: ${props => props.$span === "1" && "#5c5c5c"};

  font-size: ${props => props.$span === "2" && "14px"};
  color: ${props => props.$span === "2" && "#a4a4a4"};

  font-size: ${props => props.$span === "3" && "10px"};
  color: ${props => props.$span === "3" && "#a4a4a4"};
`


export const ContainerSelect = styled.div`
  display: flex;
  width: 9rem;
`

export const Select = styled.select`
  user-select: none;
  outline: none;
  padding: 10px;
  color: #676767;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  margin-bottom: 6px;
  width: 100%;
  /* border-color: red; */
`

export const Option = styled.option`
  /* cursor: grab; */
`

