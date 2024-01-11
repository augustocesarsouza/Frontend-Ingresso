import styled from 'styled-components';

export const ContainerFoodAdditional = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  width: 77rem;

  @media ((min-width: 1000px) and (max-width: 1200px)){
    grid-template-columns: repeat(3, 1fr);
    width: 60rem;
  }
`

export const ContainerFoodInfoMain = styled.div`
  width: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ededed;
  padding: 40px 10px 30px 10px;
  user-select: none;
`

export const WrapperImg = styled.div`
  width: 100px;
  height: 100px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContainerAmountFoodAdditional = styled.div`
  margin-bottom: 5px;
  margin-top: 10px;
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #b0b0b0;
  border-bottom: 1px solid #b0b0b0;
  border-radius: 25px;
  padding: 3px;
  position: relative;
`

interface ContainerSvgMinusProps {
  $minusnumber: number;
  $numberfoodkeyvalue: {[key: number]: number;};
  $somatotal: number;
}

export const ContainerSvgMinus = styled.div<ContainerSvgMinusProps>`
  position: absolute;
  left: -1px;
  top: -1px;
  background: #a4a4a487;
  padding: 5px;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #15aaed; //#c8c8c8 */
  cursor: pointer;

  background: ${props => props.$numberfoodkeyvalue[props.$minusnumber + 1] === 0 ? "#a4a4a487" : "#15aaed"};
  background: ${props => props.$numberfoodkeyvalue[props.$minusnumber + 1] === 0 && props.$somatotal === 10 && "#a4a4a487"};
  transition: 0.2s;

  svg {
    font-size: 12px;
    margin-left: 1px;
    color: white;
  }
`

interface ContainerSvgPluProps {
  $plusnumber: number;
  $numberfoodkeyvalue: { [key: number]: number ; };
  $somatotal: number;
}

export const ContainerSvgPlus = styled.div<ContainerSvgPluProps>`
  position: absolute;
  right: -1px;
  top: -1px;
  background: #15aaed;
  padding: 5px;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #15aaed; //#c8c8c8 */
  cursor: pointer;

  background: ${props => props.$numberfoodkeyvalue[props.$plusnumber + 1] === 0 && props.$somatotal === 10 ? "#a4a4a487" : "#15aaed"};
  background: ${props => props.$numberfoodkeyvalue[props.$plusnumber + 1] >= 1 && props.$somatotal === 10 && "#a4a4a487"};
  transition: 0.2s;

  svg {
    font-size: 12px;
    margin-left: 1px;
    color: white;
  }
`


export const ContainerInfoFood = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`

interface P {
  $p: string;
}

export const p = styled.p<P>`
  font-size: ${props => props.$p === "1" && "13px"};
  font-weight: ${props => props.$p === "1" && "500"};
  text-align: ${props => props.$p === "1" && "center"};
  color: #6e6e6e;

  font-size: ${props => props.$p === "2" && "11px"};
  font-weight: ${props => props.$p === "2" && "300"};
`


export const ContainerInfoPriceFee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface SpanProps {
  $span: string;
  $spannumber: number;
}

export const Span = styled.span<SpanProps>`
  font-size: ${props => props.$span === "1" && "15px"};
  font-size: ${props => props.$span === "2" && "10px"};
  font-weight: ${props => props.$span === "1" && "600"};
  color: ${props => props.$span === "1" && "#db8e00"};
  color: ${props => props.$span === "2" && "#929292"};

  /* font-size: ${props => props.$span === "count" && "13px"}; */
`