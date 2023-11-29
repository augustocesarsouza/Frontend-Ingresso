import styled from 'styled-components';

export const ContainerMainEmailUserAndChangePassword = styled.div`
`

export const WrapperMainEmail = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperEmail = styled.div`

  width: 23px;
  height: 23px;
  fill: gray;

  svg {
    width: 100%;
    height: 100%;
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  color: gray;
  font-size: 13px;

  color: ${props => props.$span === "2" && "#2587d5"};
  cursor: ${props => props.$span === "2" && "pointer"};

  text-align: ${props => props.$span === "6" && "center"};
  
  &:hover {
    color: ${props => props.$span === "2" && "#2587d5c9"};
  }
`

export const WrapperMainChangePassword = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperChangePassword = styled.div`
  width: 23px;
  height: 23px;
  fill: gray;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Link = styled.a`
  color: #03a9f4;
  font-size: 13px;
  cursor: pointer;
`