import * as Styled from './styled';

const RedirectUserSvg = ({ svg, text, svgActive }) => {
  return (
    <Styled.ContainerSvgSpan $svgactive={String(svgActive)}>
      <Styled.ContainerSvg $svgactive={String(svgActive)}>{svg}</Styled.ContainerSvg>
      <Styled.Span $svgactive={String(svgActive)}>{text}</Styled.Span>
    </Styled.ContainerSvgSpan>
  );
};

export default RedirectUserSvg;
