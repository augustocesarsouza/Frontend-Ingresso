import styled from 'styled-components';

export const ContainerWarningAboutDebitCard = styled.div``

export const WrapperWarningAndSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffa50030;
  padding: 15px 10px;
`

export const WrapperSvg = styled.div`
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 21px;

  svg {
    color: orange;
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 12px;
  color: #b87700;

  color: ${props => props.$span === "2" && "#b87700"};
  font-weight: ${props => props.$span === "2" && "600"};

  color: ${props => props.$span === "3" && "#7f7f7f"};
  font-size: ${props => props.$span === "3" && "13px"};

  color: ${props => props.$span === "5" && "orange"};
  font-weight: ${props => props.$span === "5" && "600"};

  color: ${props => props.$span === "4" && "#7f7f7f"};

  color: ${props => props.$span === "6" && "gray"};
  font-weight: ${props => props.$span === "6" && "600"};
`

export const WrapperSpanBeAware = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 15px;
`

export const ContainerDebit = styled.div`
  display: flex;
  width: 400px;
  gap: 10px;
  margin-top: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`
