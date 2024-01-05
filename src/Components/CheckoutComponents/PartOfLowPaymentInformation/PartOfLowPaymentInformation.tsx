import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface PartOfLowPaymentInformationProps {
  whatClicked: number;
  countOfProduct: number;
  countValueTotalOfAssentsAndProduct: number;
  totalValuePrice: number;
  handleButtonSkip: () => void;
}

const PartOfLowPaymentInformation = ({
  whatClicked,
  countOfProduct,
  countValueTotalOfAssentsAndProduct,
  totalValuePrice,
  handleButtonSkip,
}: PartOfLowPaymentInformationProps) => {
  return (
    <Styled.ContainerValueTotalFixed>
      <Styled.WrapperNumberSelectedAndValueTotal>
        <Styled.PNumberSelected>{countValueTotalOfAssentsAndProduct}</Styled.PNumberSelected>
        <Styled.SpanValueTotal>
          R$ {totalValuePrice === 0 ? `${totalValuePrice},00` : `${totalValuePrice}`}
        </Styled.SpanValueTotal>
      </Styled.WrapperNumberSelectedAndValueTotal>
      <Styled.ButtonG onClick={handleButtonSkip}>
        {whatClicked === 1 && 'INGRESSOS'} {whatClicked === 2 && 'PIPOCA'}{' '}
        {countOfProduct > 0 ? 'PAGAMENTO' : whatClicked === 3 && 'PULAR'}
        {whatClicked === 4 && 'PAGAMENTO'}
        <FontAwesomeIcon icon={faChevronRight} />
      </Styled.ButtonG>
    </Styled.ContainerValueTotalFixed>
  );
};

export default PartOfLowPaymentInformation;
