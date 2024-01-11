import CardCredit from '../../../../../Svg/CardCredit';
import CheckSvg from '../../../../../Svg/CheckSvg';
import * as Styled from './styled';

interface CardDebitTopPartProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
}

const CardDebitTopPart = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
}: CardDebitTopPartProps) => {
  return (
    <Styled.ContainerAllCreditCardSpanInfo>
      <Styled.ContainerCheckbox onClick={() => handleClickLabel('2')}>
        <Styled.Label
          $activelabel={String(activeLabel)}
          $label="2"
          $mouseenterlabel={mouseEnterLabel}
          onMouseEnter={() => handleMouseEnter('2')}
          onMouseLeave={() => handleMouseLeave('')}
        >
          {clickLabel === '2' && <>{activeLabel && <CheckSvg />}</>}
        </Styled.Label>
      </Styled.ContainerCheckbox>
      <Styled.WrapperCreditCardInfo
        onMouseEnter={() => handleMouseEnter('2')}
        onMouseLeave={() => handleMouseLeave('')}
        onClick={() => handleClickLabel('2')}
      >
        <Styled.ContainerSvgCardCreditSpan>
          <Styled.WrapperCreditCardSvg>
            <CardCredit />
            <Styled.SpanCardCredit>D</Styled.SpanCardCredit>
          </Styled.WrapperCreditCardSvg>
          <Styled.Span $span="3">
            Cartão de <Styled.SpanCredit $spancd="debito">Débito</Styled.SpanCredit>
          </Styled.Span>
        </Styled.ContainerSvgCardCreditSpan>
        <Styled.Span $span="4">{`R$ ${totalValuePrice}`}</Styled.Span>
      </Styled.WrapperCreditCardInfo>
    </Styled.ContainerAllCreditCardSpanInfo>
  );
};

export default CardDebitTopPart;
