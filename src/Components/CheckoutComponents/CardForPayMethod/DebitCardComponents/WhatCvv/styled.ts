import styled from 'styled-components';

export const WrapperWhatCvv = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin-top: 5px;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 13px;
  color: gray;
  color: ${props => props.$span === "1" && "#2196f3"};
  color: ${props => props.$span === "3" && "#2196f3"};
  cursor: ${props => props.$span === "3" && "pointer"};
  cursor: ${props => props.$span === "1" && "pointer"};
  
  &:hover {
    color: ${props => props.$span === "3" && "#1c80cf"};

  }
`

export const Link = styled.a`
 color: #2196f3;
 text-decoration: none;
`