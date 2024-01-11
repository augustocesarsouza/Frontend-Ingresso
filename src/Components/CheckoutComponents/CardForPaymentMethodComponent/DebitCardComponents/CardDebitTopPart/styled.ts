import styled from 'styled-components';

export const ContainerLabelAndCardCredit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerAllCreditCardSpanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

interface WrapperCreditCardProps {
  $creditcard: string;
  $clicklabel: string;
}

export const WrapperCreditCard = styled.div<WrapperCreditCardProps>`
  display: flex;
  /* align-items: center; */
  justify-content: ${props => props.$creditcard === "1" && "space-between"};
  flex-direction: ${props => props.$clicklabel === props.$creditcard && "column"};

  gap: 10px;
  user-select: none;
  border-bottom: 1px solid #79797917;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;

  /* padding-bottom: ${props => props.$creditcard === "4" && "0px"}; */
  border-bottom: ${props => props.$creditcard === "4" && "none"};
  gap: ${props => props.$creditcard === "4" && "5px"};
  
`

export const ContainerCheckbox = styled.div`
  width: 25px;
  height: 25px;
`

interface LabelProps {
  $activelabel: string;
  $label: string;
  $mouseenterlabel: string;
}

export const Label = styled.label<LabelProps>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #8080806e;

  background-color: white;
  display: inline-block;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 7px;
    top: 7px;
    width: 10px;
  }

  &:before{
    content: '';
    display: block;
    

    width: 100%;
    /* height: 100%; */

    background-color: ${props => props.$activelabel === "true" && "white"};
  }

  border: ${props => props.$mouseenterlabel === props.$label && "1px solid #3478c1"};
  

  /* &:hover{
    border: 1px solid #3478c1;
  } */
`

export const WrapperCreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 14px;
  color: grey;
  /* padding-top: 3px; */

  font-size: ${props => props.$span === "2" && "11px"};
  /* padding-top: ${props => props.$span === "2" && "0px"}; */
  padding-left: ${props => props.$span === "6" && "5px"};
`

export const ContainerSvgCardCreditSpan = styled.div`
  display: flex;
  gap: 7px;
  align-items: flex-start;
`

export const WrapperCreditCardSvg = styled.div`
  position: relative;
  width: 25px;
  height: 25px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const SpanCardCredit = styled.span`
  position: absolute;
  right: 5px;
  top: 10px;
  color: orange;
  font-size: 11px;
  font-weight: 600;
`

interface SpanCreditProps {
  $spancd: string;
}

export const SpanCredit = styled.span<SpanCreditProps>`
  font-size: 14px;
  font-weight: 500;
  /* color: orange; */

  color: ${props => props.$spancd === "credito" && "#ed9a00"};
  color: ${props => props.$spancd === "debito" && "#278fe1"};
`

export const SpanPagback10 = styled.span`
  font-size: 11px;
  text-align: right;
  width: 260px;
  color: #ffa500cf;
  margin: 0px 0px 10px 20px;
`