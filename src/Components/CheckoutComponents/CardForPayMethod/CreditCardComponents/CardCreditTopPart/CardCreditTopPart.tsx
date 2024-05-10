import CardCredit from '../../../../../Svg/CardCredit';
import CheckSvg from '../../../../../Svg/CheckSvg';
import * as Styled from './styled';

interface CardCreditTopPartProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
}

const CardCreditTopPart = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
}: CardCreditTopPartProps) => {
  return (
    <Styled.ContainerLabelAndCardCredit>
      <Styled.ContainerCheckbox onClick={() => handleClickLabel('1')}>
        <Styled.Label
          $activelabel={String(activeLabel)}
          $label="1"
          $mouseenterlabel={mouseEnterLabel}
          onMouseEnter={() => handleMouseEnter('1')}
          onMouseLeave={() => handleMouseLeave('')}
        >
          {clickLabel === '1' && <>{activeLabel && <CheckSvg />}</>}
        </Styled.Label>
      </Styled.ContainerCheckbox>
      <Styled.WrapperCreditCardInfo
        onMouseEnter={() => handleMouseEnter('1')}
        onMouseLeave={() => handleMouseLeave('')}
        onClick={() => handleClickLabel('1')}
      >
        <Styled.ContainerSvgCardCreditSpan>
          <Styled.WrapperCreditCardSvg>
            <CardCredit />
            <Styled.SpanCardCredit>C</Styled.SpanCardCredit>
          </Styled.WrapperCreditCardSvg>
          <Styled.Span $span="1">
            Cartão de <Styled.SpanCredit $spancd="credito">Crédito</Styled.SpanCredit>
          </Styled.Span>
        </Styled.ContainerSvgCardCreditSpan>
        <Styled.Span $span="2">{`R$ ${totalValuePrice}`}</Styled.Span>
      </Styled.WrapperCreditCardInfo>
      <Styled.SpanPagback10>
        Pague com Pagbank, usando o cupom PAGBANK10 e ganhe R$10,00 de desconto.
      </Styled.SpanPagback10>
    </Styled.ContainerLabelAndCardCredit>
  );
};

export default CardCreditTopPart;
