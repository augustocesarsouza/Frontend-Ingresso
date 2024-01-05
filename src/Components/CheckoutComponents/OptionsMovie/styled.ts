import styled from 'styled-components';

export const ContainerOptionsMovie = styled.div`
  padding: 6px;
  /* position: relative; */
  margin-bottom: 100px;
`

export const SpanBackPage = styled.span`
  color: #b6b6b6;
`

export const a = styled.a`
  cursor: pointer;
`

interface ContainerOrdersDatePersonalPaymentProps {
  $svgformsofpayment: string;
}

export const ContainerOrdersDatePersonalPayment = styled.div<ContainerOrdersDatePersonalPaymentProps>`
  margin-top: 20px;
  width: 30rem;
  width: ${props => props.$svgformsofpayment === "true" && "100%"};
`

interface ContainerInfoProps {
  $svgformsofpayment: string;
}

export const ContainerInfo = styled.div<ContainerInfoProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;

  width: ${props => props.$svgformsofpayment === "true" && "100%"};
  position: relative;
`

interface WrapperSvgProps {
  $wrappersvg: string;
  $whatclickedbutton: string;
  $listnumberallowed: number[];
  $seatjoinlist: string;
  $alltrue: boolean;
}

export const WrapperSvg = styled.div<WrapperSvgProps>`
  background: ${props => props.$wrappersvg === props.$whatclickedbutton && "#ffa90c"};
  pointer-events: ${props => props.$listnumberallowed.includes(Number(props.$wrappersvg)) ? "auto" : "none"};

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding:  ${props => props.$wrappersvg === "1" && "10px 15px"};
    border-left:  ${props => props.$wrappersvg === props.$whatclickedbutton ? "none" : "5px solid #c8c8c8"};

    border-left:  ${props => props.$whatclickedbutton !== "1" && (props.$wrappersvg === "1" && props.$seatjoinlist.length > 0) && "5px solid #15aaed"};
    border-left:  ${props => props.$whatclickedbutton !== "2" && (props.$wrappersvg === "2" && props.$seatjoinlist.length > 0) && "5px solid #15aaed"};
    border-left:  ${props => props.$whatclickedbutton !== "3" && (props.$wrappersvg === "3" && props.$alltrue === true) && "5px solid #15aaed"};
    border-left:  ${props => props.$whatclickedbutton !== "4" && (props.$wrappersvg === "4" && props.$alltrue === true) && "5px solid #15aaed"};
    
  }

  & svg {
    width: ${props => props.$wrappersvg === "1" && "18px"};
    margin-right: ${props => props.$wrappersvg === "1" && "5px"};
    fill: ${props => props.$wrappersvg === props.$whatclickedbutton ? "white" : "#c8c8c8"};

    color:  ${props => props.$wrappersvg === props.$whatclickedbutton ? "white" : "#c8c8c8"};
    
    color:  ${props => props.$whatclickedbutton !== "1" && (props.$wrappersvg === "1" && props.$seatjoinlist.length > 0) && "#15aaed"};
    fill:  ${props => props.$whatclickedbutton !== "2" && (props.$wrappersvg === "2" && props.$seatjoinlist.length > 0) && "#15aaed"};

    fill:  ${props => props.$whatclickedbutton !== "3" && (props.$wrappersvg === "3" && props.$alltrue === true) && "#15aaed"};
    fill:  ${props => props.$whatclickedbutton !== "4" && (props.$wrappersvg === "4" && props.$alltrue === true) && "#15aaed"};
    
  }

  & p {
    color: ${props => props.$wrappersvg === props.$whatclickedbutton ? "white" : "#c8c8c8"};
    color:  ${props => props.$whatclickedbutton !== "2" && (props.$wrappersvg === "2" && props.$seatjoinlist.length > 0) && "#15aaed"};
  }

  span {
    font-weight:  ${props => props.$wrappersvg === props.$whatclickedbutton ? "500" : "400"};
    font-size: 14px;

    color: ${props =>  props.$whatclickedbutton === "1" && "white"};
    color: ${props =>  props.$whatclickedbutton >= "2" && "white"};
    
    color: ${props => props.$wrappersvg === "1" && props.$whatclickedbutton !== "1" && "#03a9f4"};
    color:  ${props => props.$whatclickedbutton !== "2" && (props.$wrappersvg === "2" && props.$seatjoinlist.length > 0) && "#15aaed"};
    color:  ${props => props.$whatclickedbutton !== "3" && (props.$wrappersvg === "3" && props.$alltrue === true) && "#15aaed"};
    color:  ${props => props.$whatclickedbutton !== "4" && (props.$wrappersvg === "4" && props.$alltrue === true) && "#15aaed"};
    color:  ${props => props.$whatclickedbutton !== "2" && (props.$wrappersvg === "2" && props.$alltrue === true) && "#c8c8c8"};
  }
`

interface ContainerArrowProps {
  $containerarrow: string;
}

export const ContainerArrow = styled.div<ContainerArrowProps>`
  position: absolute;
  left: 294px;
  top: ${props => props.$containerarrow === "1" ? "14px" : props.$containerarrow === "2" ? "69px": props.$containerarrow === "3" ? "124px" : props.$containerarrow === "4" && "178px"};

  svg {
    font-size: 25px;
    color: #ffa90c;
  }
`

