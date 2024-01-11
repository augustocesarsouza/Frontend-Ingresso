import * as Styled from './styled';

const InfoWhenBuying = () => {
  return (
    <Styled.SpanInfo $span="6" $divclicknumbercard={''} $errorexpiredateyear={false}>
      Ao comprar esse ingresso, concordo que a{' '}
      <Styled.SpanMarkBold>compra não pode ser feita com um cartão virtual</Styled.SpanMarkBold> e
      de que devo apresentar o{' '}
      <Styled.SpanMarkBold>cartão físico utilizado na compra</Styled.SpanMarkBold> se for retirar os
      ingressos no local.
    </Styled.SpanInfo>
  );
};

export default InfoWhenBuying;
