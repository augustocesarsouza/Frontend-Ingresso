import styled from 'styled-components';

interface SpanInfoProps {
  $span: string;
  $divclicknumbercard: string;
  $errorexpiredateyear: boolean;
}

export const SpanInfo = styled.span<SpanInfoProps>`
  font-size: 14px;

  font-size: ${props => props.$span === "6" && "12px"};
  color: ${props => props.$span === props.$divclicknumbercard ? "#2196f3" : "#6e6e6e"};
  font-size: ${props => props.$span === "22" && "11px"};
  color: ${props => props.$errorexpiredateyear === true && "red"};
`


export const SpanMarkBold = styled.span`
  font-weight: 600;
`