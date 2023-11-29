import styled from 'styled-components';

export const WrapperAllContainerPasswordLow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 32rem;
`

export const ContainerMainCheckAndRecoverPassword = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`

export const ContainerCheckbox = styled.div`
  width: 22px;
  height: 22px;
  user-select: none;
`

export const ContainerFollowStep = styled.div``

export const ContainerReCAPTCHA = styled.div`
  display: flex;
`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  border: none;
  background: rgb(52, 120, 193);
  color: white;
  padding: 12px 27px;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    background: rgb(42 98 157);
  }
`

interface SpanProps {
  $span: string
}

export const Span = styled.span<SpanProps>`
  color: rgb(118, 118, 118);
  font-size: 12px;
  
  margin-left: ${props => props.$span === "2" && "9px" };

  font-size: ${props => props.$span === "3" && "12px"};
  color: ${props => props.$span === "3" && "#0369bb"};
  font-weight: ${props => props.$span === "3" && "600"};
  margin-left: ${props => props.$span === "3" && "43px" };
  cursor: ${props => props.$span === "3" && "pointer" };

  

  font-size: ${props => props.$span === "5" && "12px"};
  color: ${props => props.$span === "5" && "#0369bb"};
  font-weight: ${props => props.$span === "5" && "600"};
  margin-left: ${props => props.$span === "5" && "0px" };
  cursor: ${props => props.$span === "5" && "pointer" };

  &:hover {
    color: ${props => props.$span === "3" && "#0485ed"};
    color: ${props => props.$span === "5" && "#0485ed"};
  }

  color: ${props => props.$span === "4" && "rgb(113 113 113)"};
  font-weight: ${props => props.$span === "4" && "600"};
  margin-left: ${props => props.$span === "4" && "0px" };

  margin-left: ${props => props.$span === "6" && "0px" };
  margin-left: ${props => props.$span === "7" && "0px" };
  color: ${props => props.$span === "7" && "blue"};
  margin-left: ${props => props.$span === "7" && "0px" };
`