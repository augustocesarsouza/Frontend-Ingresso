import CardCredit from '../../../../../Svg/CardCredit';
import * as Styled from './styled';

const BecauseSaveMyCard = () => {
  return (
    <Styled.ContainerBecauseSaveCardWhatIsCvv>
      <CardCredit />
      <Styled.SpanSaveWhat $span="1">Por que salvar meu cartão?</Styled.SpanSaveWhat>
      <Styled.SpanSaveWhat $span="2">O que é CVV?</Styled.SpanSaveWhat>
    </Styled.ContainerBecauseSaveCardWhatIsCvv>
  );
};

export default BecauseSaveMyCard;
