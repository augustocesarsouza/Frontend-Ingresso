import * as Styled from './styled';
import FieldsetComp from '../FieldsetComp/FieldsetComp';
import ContinuationFormReq from '../ContinuationFormReq/ContinuationFormReq';
import { useState } from 'react';

const Form = () => {
  const [clickEnter, setClickEnter] = useState(false);

  return (
    <Styled.FormContainer>
      <FieldsetComp clickEnter={clickEnter} />
      <ContinuationFormReq setClickEnter={setClickEnter} />
    </Styled.FormContainer>
  );
};

export default Form;
