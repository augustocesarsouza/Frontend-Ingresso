import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithdrawSvg from '../../../Svg/WithdrawSvg';
import * as Styled from './styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const FormsOfWithdrawalAndRemove = () => {
  return (
    <Styled.ContainerFormsOfWithdrawalAndRemove>
      <Styled.ContainerFormsOfWithdrawal>
        <WithdrawSvg />
        <Styled.SpanTwo $span="1">Formas de retirada</Styled.SpanTwo>
      </Styled.ContainerFormsOfWithdrawal>
      <Styled.ContainerRemove>
        <FontAwesomeIcon icon={faTrashCan} className="svg-trash" />
        <Styled.SpanTwo $span="1">Remover</Styled.SpanTwo>
      </Styled.ContainerRemove>
    </Styled.ContainerFormsOfWithdrawalAndRemove>
  );
};

export default FormsOfWithdrawalAndRemove;
