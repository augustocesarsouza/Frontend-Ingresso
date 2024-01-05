import styled from 'styled-components';

interface ContainerSvgSpanProps {
  $svgactive: string;
}

export const ContainerSvgSpan = styled.div<ContainerSvgSpanProps>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #80808021;
  border-left: 5px solid #039de2;
  cursor: pointer;
  background: ${props => props.$svgactive === "true" && "rgb(255, 115, 0)"};
  border-left: ${props => props.$svgactive === "true" && "none"};
  gap: 8px;
`

interface ContainerSvgProps {
  $svgactive: string;
}

export const ContainerSvg = styled.div<ContainerSvgProps>`

  svg {
    display: block;
    min-height: 33px;
    fill: ${props => props.$svgactive === "true" && "#ffffff"};
  }
`

interface SpanProps {
  $svgactive: string;
}

export const P = styled.p<SpanProps>`
  color: #2196F3;
  font-size: 15px;
  text-align: center;
  display: block;
  color: ${props => props.$svgactive === "true" && "#ffffff"};
`

export const Span = styled.span<SpanProps>`
  /* color: #2196F3; */
  font-size: 15px;
  text-align: center;
  display: block;
  color: ${props => props.$svgactive === "true" && "#ffffff"};
`

export const ContainerChoiceSeats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContainerSeats = styled.div`
  display: flex;
`

export const ContainerPaymentTypeChosen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContainerPaymentType = styled.div`
  display: flex;
  flex-direction: column;
`

export const PTypes = styled.p`
  font-size: 12px;
`