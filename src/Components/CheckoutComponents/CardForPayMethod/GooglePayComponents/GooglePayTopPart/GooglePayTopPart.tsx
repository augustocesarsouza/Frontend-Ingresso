import CheckSvg from '../../../../../Svg/CheckSvg';
import * as Styled from './styled';

interface GooglePayTopPartProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
}

const GooglePayTopPart = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
}: GooglePayTopPartProps) => {
  return (
    <Styled.ContainerMainCreditCard>
      <Styled.ContainerCheckbox onClick={() => handleClickLabel('3')}>
        <Styled.Label
          $activelabel={String(activeLabel)}
          $label="3"
          $mouseenterlabel={mouseEnterLabel}
          onMouseEnter={() => handleMouseEnter('3')}
          onMouseLeave={() => handleMouseLeave('')}
        >
          {clickLabel === '3' && <>{activeLabel && <CheckSvg />}</>}
        </Styled.Label>
      </Styled.ContainerCheckbox>
      <Styled.WrapperCreditCardInfo
        onMouseEnter={() => handleMouseEnter('3')}
        onMouseLeave={() => handleMouseLeave('')}
        onClick={() => handleClickLabel('3')}
      >
        <Styled.ContainerSvgCardCreditSpan>
          <Styled.WrapperPayImg>
            <Styled.ImgPay
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704291411/Pay_vzg6as.png"
              alt="img-g-pay"
            />
          </Styled.WrapperPayImg>
        </Styled.ContainerSvgCardCreditSpan>
        <Styled.Span $span="5">{`R$ ${totalValuePrice}`}</Styled.Span>
      </Styled.WrapperCreditCardInfo>
    </Styled.ContainerMainCreditCard>
  );
};

export default GooglePayTopPart;
