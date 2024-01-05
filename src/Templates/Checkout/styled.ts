import styled from 'styled-components';

export const ContainerMain = styled.div`
  background: white;
  height: 100vh;
`

export const ContainerMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* height: 91%; */
  /* gap: 25px; */
  /* margin: 0px 80px 0px 50px; */
  
`

export const ContainerLeftRightSide = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
 
  /* @media (max-width: 1285px){
    width: 84%;
  } */
  @media (max-width: 1200px){
    width: 85%;
  }
  /* margin: 0px 80px 0px 50px; */
`

export const ContainerFirst = styled.div`
  border-right: 1px solid #bcbcbc1c;
`

export const ContainerSecond = styled.div`
  /* width: 54.2rem; */
  width: 63rem;
  position: relative;
`

export const ContainerTopYourSeats = styled.div`
  border-bottom: 1px solid #a4a4a478;
  padding: 0px 9px 15px 11px;
`

export const SpanSecond = styled.span`
  font-size: 14px;
  color: #a4a4a4;
`

export const ContainerParaIncreases = styled.div`
  position: relative;
  left: 555px;
  top: -223px;
  height: 100px;
  width: 4px;
  user-select: none;
`

export const ContainerParaMain = styled.div`
  height: 100%;
  background: #dbdbdb;
  display: flex;
  align-items: flex-end;
  position: relative;
`  

interface SpanIncreasesProps {
  $topvalue: number;
}

export const SpanIncreases = styled.div<SpanIncreasesProps>`
  /* border: 2px solid #dbdbdb; */
  /* height: 10px; */
  height: ${props => props.$topvalue}px;

  width: 4px;
  background: #c9c9c9;
  position: absolute;
`

interface ContainerBallIncreasesProps {
  $topvalue: number;
}

export const ContainerBallIncreases = styled.div<ContainerBallIncreasesProps>`
  position: absolute;
  height: 19px;
  width: 19px;
  left: -8px;
  top: ${props => props.$topvalue}px;
  border-radius: 50%;
  background: #3478c1;
  cursor: pointer;
`

export const ContainerPaymentForm = styled.div`
  width: 80rem;

  @media (max-width: 1200px){
    width: 63rem;
  }
`

export const ContainerAllCreditCardSpanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerLabelAndCardCredit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

export const ContainerMainPaymentMethods = styled.div``

export const ContainerSvgCardPaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
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
  border-left: 1px solid #79797917;
  border-bottom: 1px solid #79797917;
  border-right: 1px solid #79797917;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  /* gap: 15px; */
`

interface WrapperCreditCardProps {
  $creditcard: string;
  $clicklabel: string;
}

export const WrapperCreditCard = styled.div<WrapperCreditCardProps>`
  display: flex;
  align-items: center;
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

export const WrapperPayImg = styled.div`
  width: 40px;
`

export const ImgPay = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`

export const WrapperPayPalImg = styled.div`
  width: 60px;
  display: flex;
`

export const SpanPagback10 = styled.span`
  font-size: 11px;
  text-align: right;
  width: 260px;
  color: #ffa500cf;
  margin: 0px 0px 10px 20px
`