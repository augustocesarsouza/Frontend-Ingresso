import styled from 'styled-components';

export const ContainerFormsOfWithdrawalAndRemove = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

export const ContainerFormsOfWithdrawal = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    fill: #15aaed;
  }
`

export const ContainerRemove = styled.div`
  display: flex;
  gap: 10px;
  
  svg {
    color: #15aaed;
    width: 17px;
    height: 17px;
  }
`

interface SpanTwoProps {
  $span: string;
}

export const SpanTwo = styled.span<SpanTwoProps>`
  color: ${props => props.$span === "1" && "#15aaed"};
  font-size: 15px;

`