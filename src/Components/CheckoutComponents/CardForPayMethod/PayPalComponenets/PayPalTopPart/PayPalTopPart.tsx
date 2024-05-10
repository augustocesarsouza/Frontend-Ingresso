import CheckSvg from '../../../../../Svg/CheckSvg';
import * as Styled from './styled';

interface PayPalTopPartProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
}

const PayPalTopPart = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
}: PayPalTopPartProps) => {
  return (
    <Styled.ContainerMainCreditCard>
      <Styled.ContainerCheckbox onClick={() => handleClickLabel('4')}>
        <Styled.Label
          $activelabel={String(activeLabel)}
          $label="4"
          $mouseenterlabel={mouseEnterLabel}
          onMouseEnter={() => handleMouseEnter('4')}
          onMouseLeave={() => handleMouseLeave('')}
        >
          {clickLabel === '4' && <>{activeLabel && <CheckSvg />}</>}
        </Styled.Label>
      </Styled.ContainerCheckbox>
      <Styled.WrapperCreditCardInfo
        onMouseEnter={() => handleMouseEnter('4')}
        onMouseLeave={() => handleMouseLeave('')}
        onClick={() => handleClickLabel('4')}
      >
        <Styled.WrapperPayPalImg>
          <Styled.ImgPay
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704292650/PayPal-Logo_shc49l.png"
            alt="pay-pal-img"
          />
        </Styled.WrapperPayPalImg>

        <Styled.Span $span="6">{`R$ ${totalValuePrice}`}</Styled.Span>
      </Styled.WrapperCreditCardInfo>
    </Styled.ContainerMainCreditCard>
  );
};

export default PayPalTopPart;
