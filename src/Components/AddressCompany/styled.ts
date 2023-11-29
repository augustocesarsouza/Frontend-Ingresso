import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: 1px solid rgb(187, 187, 187);
  padding: 30px;
`

export const p = styled.p`
  font-size: 13px;
  color: rgb(102 102 102);
`

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Address = styled.address`
  font-size: 13px;
  color: rgb(102 102 102);
`

interface SpanProps {
  span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 12px;
  color: ${props => props.span === "2" && "#2587d5"};
  cursor: ${props => props.span === "2" && "pointer"};


  &:hover {
    color: ${props => props.span === "2" && "#2587d5c9"};
  } 
`