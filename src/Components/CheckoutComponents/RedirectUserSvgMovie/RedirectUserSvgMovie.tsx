import * as Styled from './styled';

interface RedirectUserSvgMovieProps {
  svg: React.ReactElement;
  text: string;
  svgActive: boolean;
  seatJoinList: string[];
  stringFullTypeTicked: string[];
}

const RedirectUserSvgMovie = ({
  svg,
  text,
  svgActive,
  seatJoinList,
  stringFullTypeTicked,
}: RedirectUserSvgMovieProps) => {
  return (
    <Styled.ContainerSvgSpan $svgactive={String(svgActive)}>
      <Styled.ContainerSvg $svgactive={String(svgActive)} className="svg-any">
        {svg}
      </Styled.ContainerSvg>

      {text === 'ESCOLHA DE ASSENTOS' && (
        <Styled.ContainerChoiceSeats>
          <Styled.P $svgactive={String(svgActive)}>{text}</Styled.P>
          <Styled.ContainerSeats>
            {seatJoinList.map((str, index) => (
              <Styled.Span key={index} $svgactive={String(svgActive)}>
                {seatJoinList.length - 1 === index ? ` ${str}` : `${str},`}
              </Styled.Span>
            ))}
          </Styled.ContainerSeats>
        </Styled.ContainerChoiceSeats>
      )}

      {text === 'TIPOS DE INGRESSOS' && (
        <Styled.ContainerPaymentTypeChosen>
          <Styled.Span $svgactive={String(svgActive)}>{text}</Styled.Span>
          <Styled.ContainerPaymentType>
            {stringFullTypeTicked.map(
              (str, i) =>
                str !== undefined && (
                  <Styled.PTypes key={i}>
                    {stringFullTypeTicked.length - 1 === i ? `${str}` : `${str},`}
                  </Styled.PTypes>
                )
            )}
          </Styled.ContainerPaymentType>
        </Styled.ContainerPaymentTypeChosen>
      )}

      {text === 'ADICIONAR PIPOCA AO PEDIDO?' && (
        <Styled.Span $svgactive={String(svgActive)}>{text}</Styled.Span>
      )}

      {text === 'FORMA DE PAGAMENTO' && (
        <Styled.Span $svgactive={String(svgActive)}>{text}</Styled.Span>
      )}
    </Styled.ContainerSvgSpan>
  );
};

export default RedirectUserSvgMovie;
