import styled from 'styled-components';

export const ContainerButtonReturnContinue = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`

interface ButtonProps{
  $button: string;
  $disablebutton: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  background-color: white;
  border: 1px solid rgb(52, 120, 193);
  cursor: pointer;
  color: rgb(52, 120, 193);
  background: ${props => props.$button === "2" && "rgb(52, 120, 193)"};
  color: ${props => props.$button === "2" && "white"};

  &:disabled {
    opacity: 1;
    background: rgb(221, 221, 221);
    border: 1px solid rgb(221, 221, 221);
    color: white;
    user-select: none;
  }

  &:hover {
    background: ${props => props.$button === "1" && "rgb(52, 120, 193)"};
    color: white;
    background: ${props => props.$button === "2" && props.$disablebutton === "false" && "rgb(42 93 147)"};
  }
`

interface ButtonSaveProps{
  $button: string;
  $disablebutton: string;
}

export const ButtonSave = styled.button<ButtonSaveProps>`
  padding: 13px 25px;
  border: 1px solid rgb(52, 120, 193);
  cursor: pointer;
  background: rgb(52, 120, 193);
  color: white;

  &:disabled {
    opacity: 1;
    background: rgb(221, 221, 221);
    border: 1px solid rgb(221, 221, 221);
    color: white;
    user-select: none;
  }

  &:hover {
    color: white;
    background: ${props =>  props.$disablebutton === "false" && "rgb(42 93 147)"};
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ContainerRedirectLogin = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 335px;
  height: 400px; 
  max-width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

export const WrapperSvgExit = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  
  svg {
    color: #2196F3;
    width: 100%;
    height: 100%;
  }
`

export const ContainerImgAndH1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`

export const WrapperImg = styled.div`
  width: 110px;
  height: 110px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const H1 = styled.h1`
  font-size: 22px;
  color: rgb(153, 153, 153);
`

export const Span = styled.span`
  text-align: center;
  color: #808080de;
`

export const ButtonContinue = styled.button`
  padding: 13px;
  background-color: white;
  border: 1px solid rgb(52, 120, 193);
  cursor: pointer;
  color: rgb(52, 120, 193);
  background: rgb(52, 120, 193);
  color: white;
  margin-top: 10px;

  &:hover {
    background: rgb(52, 120, 193);
    color: white;
    background: rgb(42 93 147);
  }
`

export const ContainerUpdatedSucess = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 335px;
  height: 346px; 
  max-width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 19px;
`

export const ContainerUpdatedSvgExclamation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const WrapperSvgExclamation = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const H1Updated = styled.h1`
  font-size: 22px;
  color: rgb(115 114 114);
  font-weight: 400;
`

interface SpanUpdatedProps {
  $span: string;
}

export const SpanUpdated = styled.span<SpanUpdatedProps>`
  text-align: center;
  color: #808080de;
  font-size: 12px;

  color: ${props => props.$span === "2" && "#2196f3"};
  cursor: ${props => props.$span === "2" && "pointer"};
`

export const Link = styled.a`
  cursor: pointer;
`

export const ButtonUpdated = styled.button`
  padding: 15px 24px;
  background-color: white;
  border: 1px solid rgb(52, 120, 193);
  cursor: pointer;
  color: rgb(52, 120, 193);
  background: rgb(52, 120, 193);
  color: white;
  margin-top: 10px;

  &:hover {
    background: rgb(52, 120, 193);
    color: white;
    background: rgb(42 93 147);
  }
`