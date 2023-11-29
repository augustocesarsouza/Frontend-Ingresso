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
    fill: #2196F3;
    display: block;
    min-height: 33px;
    fill: ${props => props.$svgactive === "true" && "#ffffff"};
  }
`

interface SpanProps {
  $svgactive: string;
}

export const Span = styled.span<SpanProps>`
  color: #2196F3;
  font-size: 15px;
  text-align: center;
  display: block;
  color: ${props => props.$svgactive === "true" && "#ffffff"};
`