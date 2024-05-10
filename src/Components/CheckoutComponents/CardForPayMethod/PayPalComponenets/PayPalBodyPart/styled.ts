import styled from 'styled-components';

interface WrapperBodyPartProps {
  $clicklabel: string;
}

export const WrapperBodyPart = styled.div<WrapperBodyPartProps>`
  /* display: none; */
  display: ${props => props.$clicklabel !== "4" ? "none" : ""};

`

export const WrapperImgDigitalWallet = styled.div`
  width: 300px;
  /* height: 100px; */
`

export const ImgDigitalWallet = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const WrapperWarningAndSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffa50030;
  padding: 15px 23px;
  margin-left: 13px;
`

export const WrapperSvg = styled.div`
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  width: 28px;
  height: 22px;

  svg {
    color: orange;
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 12px;
  color: #b87700;

  color: ${props => props.$span === "2" && "#b87700"};
  font-weight: ${props => props.$span === "2" && "600"};

  color: ${props => props.$span === "3" && "#4f4f4f"};
  font-weight: ${props => props.$span === "3" && "600"};

  color: ${props => props.$span === "4" && "white"};
  font-weight: ${props => props.$span === "4" && "400"};

  color: ${props => props.$span === "5" && "white"};
  font-weight: ${props => props.$span === "5" && "600"};
  font-size: ${props => props.$span === "5" && "19px"};
  font-style: ${props => props.$span === "5" && "italic"};

  
`

export const WrapperButtonPayPal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-top: 15px;
`

export const WrapperButton = styled.div`
  background: #2196f3;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 22rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    
    background: #3da3f3;
  }
`

export const Button = styled.button`
  border: none;
  background: #2196f3;
`

export const WrapperButtonPayPalForRef = styled.div`
  /* width: 10rem; */
  /* height: 10rem; */
`