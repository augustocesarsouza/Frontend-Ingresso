import * as Styled from './styled';

interface RedirectUserSvgMovieProps {
  svg: React.ReactElement;
  text: string;
  seatJoinList: string[];
  stringFullTypeTicked: string[];
}

const RedirectUserSvgMovie = ({
  svg,
  text,
  seatJoinList,
  stringFullTypeTicked,
}: RedirectUserSvgMovieProps) => {
  return (
    <Styled.ContainerSvgSpan>
      <Styled.ContainerSvg className="svg-any">{svg}</Styled.ContainerSvg>

      {text === 'ESCOLHA DE ASSENTOS' && (
        <Styled.ContainerChoiceSeats>
          <Styled.P>{text}</Styled.P>
          <Styled.ContainerSeats>
            {seatJoinList.map((str, index) => (
              <Styled.Span key={index}>
                {seatJoinList.length - 1 === index ? ` ${str}` : `${str},`}
              </Styled.Span>
            ))}
          </Styled.ContainerSeats>
        </Styled.ContainerChoiceSeats>
      )}

      {text === 'TIPOS DE INGRESSOS' && (
        <Styled.ContainerPaymentTypeChosen>
          <Styled.Span>{text}</Styled.Span>
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

      {text === 'ADICIONAR PIPOCA AO PEDIDO?' && <Styled.Span>{text}</Styled.Span>}

      {text === 'FORMA DE PAGAMENTO' && <Styled.Span>{text}</Styled.Span>}
    </Styled.ContainerSvgSpan>
  );
};

export default RedirectUserSvgMovie;
