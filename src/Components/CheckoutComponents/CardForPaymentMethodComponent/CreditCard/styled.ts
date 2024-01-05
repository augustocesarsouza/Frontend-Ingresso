import styled from 'styled-components';

interface WrapperCreditCardProps {
  $creditcard: string;
  $clicklabel: string;
  $entermouseinformed: boolean;
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
  cursor: ${props => props.$entermouseinformed === true ? "auto" : "pointer" };

  border-bottom: ${props => props.$creditcard === "4" && "none"};
  gap: ${props => props.$creditcard === "4" && "5px"};
  
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

export const ContainerInformDate = styled.div`
  
`

export const WrapperNewCard = styled.div`
  border: 1px solid #15aaed;    
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
  padding: 7px;
  gap: 3px;
  cursor: pointer;

  svg {
    color: gray;
    
  }
`

export const SpanNew = styled.span`
  color: #5c5c5c;
  font-size: 14px;
  font-weight: 300;
`

interface SpanInfoProps {
  $span: string;
  $divclicknumbercard: string;
  $errorexpiredateyear: boolean;
}

export const SpanInfo = styled.span<SpanInfoProps>`
  font-size: 14px;

  font-size: ${props => props.$span === "6" && "12px"};
  color: ${props => props.$span === props.$divclicknumbercard ? "#2196f3" : "#6e6e6e"};
  font-size: ${props => props.$span === "22" && "11px"};
  color: ${props => props.$errorexpiredateyear === true && "red"};
`

export const ContainerMainInputInfo = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`

export const ContainerNumberCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ContainerInputNumber = styled.div`
  position: relative;
`

interface InputNumberProps {
  $errorexpiredateyear: boolean;
}

export const InputNumber = styled.input<InputNumberProps>`
  padding: 10px 0px 10px 5px;
  width: 100%;

  
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #6e6e6e7d;
  }

  border: ${props => props.$errorexpiredateyear === true ? "1px solid red" : "1px solid #92929257"};
  border-radius: 5px;
  transition: 0.3s;

  &:focus {
    border: ${props => props.$errorexpiredateyear === true ? "1.8px solid red" : "1.8px solid #2196f3"};
    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 31%);
    outline: none;
  }
`

export const WrapperError = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  svg {
    color: white;
    font-size: 13px;
  }
`

export const ContainerExpirationDateAndCvcCvv = styled.div`
  display: flex;
  gap: 10px;
`

export const ContainerLabelAndSpan =  styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    label {
      border: 1px solid #3478c159;
      box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 31%);
    }
  }
`

export const ContainerCheckboxLabelSave = styled.div`
  width: 20px;
  height: 20px;
 
`

interface LabelSaveProps {
  $activelabelsave: boolean;
}

export const LabelSave = styled.label<LabelSaveProps>`
  width: 100%;
  height: 100%;
  border-radius: 15%;
  border: 1px solid #8080806e;

  /* background-color: white; */
  background-color: ${props => props.$activelabelsave === true ? "#3478c1" : "white"};
  transition: 0.3s;

  display: inline-block;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 12px;
    fill: ${props => props.$activelabelsave === true ? "white" : "#3478c1"};
  }

  &:before{
    content: '';
    display: block;
  
    width: 100%;
  }
  

  &:hover{
    border: 1px solid #3478c159;
    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 31%);
  }
`

export const ContainerBecauseSaveCardWhatIsCvv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;

  svg {
    width: 20px;
  }
`

interface SpanSaveWhatProps {
  $span: string;
}

export const SpanSaveWhat = styled.span<SpanSaveWhatProps>`
  font-size: 13px;
  color: #29b5f4;
  cursor: pointer;

  &:hover {
    color: #208dbe;
  }
`

export const SpanMarkBold = styled.span`
  font-weight: 600;
`