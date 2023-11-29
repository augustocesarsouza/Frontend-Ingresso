import styled from 'styled-components';

export const ContainerFirst = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgb(48, 48, 48);
`

export const WrapperSvgIngresso = styled.div`
  width: 160px;
  height: 60px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ContainerMainNameUserAndService = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`

export const Span = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
`

interface WrapperSvgUserProps {
  $containeruser: string;
}

export const WrapperSvgUser = styled.div<WrapperSvgUserProps>`
  width: ${props => props.$containeruser === "1" && "22px"};
  height: ${props => props.$containeruser === "1" && "22px"};

  width: ${props => props.$containeruser === "2" && "30px"};
  height: ${props => props.$containeruser === "2" && "30px"};

  svg {
    fill: #17b7ff;
    width: 100%;
    height: 100%;
  }
`