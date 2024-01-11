import styled from 'styled-components';

export const ContainerMainCreditCard =styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

interface WrapperCreditCardProps {
  $creditcard: string;
  $clicklabel: string;
  $entermouseinformed: boolean;
}

export const WrapperCreditCard = styled.div<WrapperCreditCardProps>`
  display: flex;
  flex-direction: ${props => props.$clicklabel === props.$creditcard && "column"};

  user-select: none;
  border-bottom: 1px solid #79797917;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: ${props => props.$entermouseinformed === true ? "auto" : "pointer" };

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

export const ContainerSvgCardCreditSpan = styled.div`
  display: flex;
  gap: 7px;
  align-items: flex-start;
`

export const WrapperPayImg = styled.div`
  width: 40px;
`

export const ImgPay = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 14px;
  color: grey;
`