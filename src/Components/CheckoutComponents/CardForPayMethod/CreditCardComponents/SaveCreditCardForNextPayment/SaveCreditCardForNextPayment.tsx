import { useState } from 'react';
import CheckSvg from '../../../../../Svg/CheckSvg';
import * as Styled from './styled';

const SaveCreditCardForNextPayment = () => {
  const [activeLabelSave, setActiveLabelSave] = useState(true);

  const handleClickLabelSave = () => {
    setActiveLabelSave((prev) => !prev);
  };

  return (
    <Styled.ContainerLabelAndSpan>
      <Styled.ContainerCheckboxLabelSave>
        <Styled.LabelSave $activelabelsave={activeLabelSave} onClick={handleClickLabelSave}>
          {activeLabelSave && <CheckSvg />}
        </Styled.LabelSave>
      </Styled.ContainerCheckboxLabelSave>
      <Styled.SpanInfo
        $span="5"
        $divclicknumbercard={''}
        onClick={handleClickLabelSave}
        $errorexpiredateyear={false}
      >
        Salvar para meu próximo pagamento
      </Styled.SpanInfo>
    </Styled.ContainerLabelAndSpan>
  );
};

export default SaveCreditCardForNextPayment;
