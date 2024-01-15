import styled from 'styled-components';

export const ContainerCaptionMain = styled.div`
  user-select: none;
`

export const WrapperCaption = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 20px;

  svg {
    font-size: 13px;
    color: gray;
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: ${props => props.$span === "1" && "15px"};
  color: ${props => props.$span === "1" && "gray"};

  color: ${props => props.$span === "2" && "gray"};
  font-size: ${props => props.$span === "2" && "13px"};
`

export const ContainerInfoCaptionMain = styled.div`
  display: flex;
  gap: 70px;
  margin-top: 20px;
`

interface ContainerInfoCaptionProps {
  $infocaption: string;
}

export const ContainerInfoCaption = styled.div<ContainerInfoCaptionProps>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$infocaption === "1" && "8px"};
  gap: ${props => props.$infocaption === "2" && "15px"};
`

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

interface ContainerBallProps {
  $ball: string;
}

export const ContainerBall = styled.div<ContainerBallProps>`
  background: ${props => props.$ball === "1" && "#2196F3"};
  background: ${props => props.$ball === "2" && "orange"};
  background: ${props => props.$ball === "3" && "#dbdbdb"};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.$ball === "5" && "15%"};
  border: ${props => props.$ball === "5" && "1px solid gray"};


  svg {
    width: ${props => props.$ball === "3" && "12px"};
    height: ${props => props.$ball === "3" && "12px"};

    width: ${props => props.$ball === "4" && "18px"};
    height: ${props => props.$ball === "4" && "18px"};
    color: ${props => props.$ball === "4" && "#8383833d"};

    color: ${props => props.$ball === "5" && "gray"};
    width: ${props => props.$ball === "5" && "14px"};
    height: ${props => props.$ball === "5" && "14px"};
  }
`