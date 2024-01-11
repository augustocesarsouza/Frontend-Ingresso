import styled from 'styled-components';

export const ContainerCpfOrCnpjBenefit = styled.div`
  margin-top: 20px;
`

export const ContainerClubeUol = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 13px;
  background: #80808014;

  svg {
    color: #808080cf;
  }
`

export const WrapperImgClubeUol = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
`

export const WrapperImg = styled.img`
  width: 100%;
  height: 100%;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: ${props => props.$span === "1" && "12px"};
  color: ${props => props.$span === "1" && "#f0b607"};
  font-weight: ${props => props.$span === "1" && "500"};

  font-size: ${props => props.$span === "2" && "12px"};
  color: ${props => props.$span === "2" && "#2c9cf5"};
  cursor: ${props => props.$span === "2" && "pointer"};

  font-size: ${props => props.$span === "3" && "13px"};
  color: ${props => props.$span === "3" && "#808080"};
  margin-top: ${props => props.$span === "3" && "5px"};



  &:hover {
    color: ${props => props.$span === "2" && "#108ff5"};
  }
`

export const ContainerTypeCpfOrCnpj = styled.div`
  border-left: 1px solid #7979794f;
  border-bottom: 1px solid #7979794f;
  border-right: 1px solid #7979794f;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const WrapperInputAndButton = styled.div`
  display: flex;
  margin-bottom: 15px;
  /* align-items: center; */
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
  /* border-color: #8080804d; */
  /* margin-bottom: 6px; */
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

interface ButtonProps {
  $unlockapply: boolean;
}

export const Button = styled.button<ButtonProps>`

  padding: 5px 5px;
  border: none;
  color: white;
  
  cursor: ${props => props.$unlockapply === true ? "pointer" : "auto"};
  background: ${props => props.$unlockapply === true ? "#0b93d0" : "#c8c8c8bf"};
  user-select: none;

  &:hover {
    background: ${props => props.$unlockapply === true && "#0077ac"};
  }
`
