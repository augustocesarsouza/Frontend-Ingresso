import styled from 'styled-components';

export const ContainerCodDiscountMain = styled.div`
  user-select: none;
`

export const ContainerCodDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 15px 13px;
  background: #80808014;
  cursor: pointer;
  margin-top: 15px;

  svg {
    color: #808080cf;
  }
`

export const ContainerSvgDiscountSpan = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: ${props => props.$span === "1" && "14px"};
  color: gray;

  font-size: ${props => props.$span === "2" && "13px"};
`

interface WrapperArrowProps {
  $clickcoddiscount: boolean;
}

export const ContainerArrowMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  position: relative;
`

export const WrapperArrow = styled.div<WrapperArrowProps>`
  > svg {
    color: #15aaed;
  }
`

export const WrapperArrowMore = styled.div<WrapperArrowProps>`
  position: absolute;
  
   svg {
    transform: ${props => props.$clickcoddiscount === true ? "rotate(90deg)" : "rotate(180deg)" }; //
    transition: 0.4s;
    color: #15aaed;
  } 
`

interface WrapperInputAndButtonProps {
  $clickcoddiscount: boolean;
}

export const WrapperInputAndButton = styled.div<WrapperInputAndButtonProps>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-left: 1px solid #7979794f;
  border-bottom: 1px solid #7979794f;
  border-right: 1px solid #7979794f;

  height: ${props => props.$clickcoddiscount ? "0px" : "75px"};

  transition: height 0.3s linear;
  overflow: hidden;
`

export const ButtonMain = styled.div`
  display: flex;
  height: 40px;
  margin-left: 15px;
`

interface ContainerAllColorsProps {
  $focusorblur: string;
}

export const ContainerAllColors = styled.div<ContainerAllColorsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  width: 200px;

  border-left-color: ${props => props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  border-top-color: ${props => props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  border-bottom-color: ${props => props.$focusorblur === "true" ? "#2196f3" : "#8080804d"};
  border-right-color: white;
`

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 14px 10px;
`


export const Button = styled.button`

  padding: 5px 5px;
  border: none;
  color: white;
  
  cursor: pointer;
  background: #0b93d0;
  user-select: none;

  &:hover {
    background: #0077ac;
  }
`

export const WrapperNewsSvg = styled.div`
  display: flex;
  gap: 5px;
  padding: 0px 5px;

  svg {
    font-size: 19px;
    color: gray;
  }
`
