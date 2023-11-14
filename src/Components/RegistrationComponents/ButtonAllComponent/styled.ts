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