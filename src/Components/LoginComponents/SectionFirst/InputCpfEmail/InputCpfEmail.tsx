import UserSvg from '../../../../Svg/UserSvg';
import * as Styled from './styled';
import { useState } from 'react';

interface InputCpfEmailProps {
  refInputEmail: React.MutableRefObject<HTMLInputElement>;
}

const InputCpfEmail = ({ refInputEmail }: InputCpfEmailProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [hasValueInputName, setHasValueInputName] = useState(false);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputName(true);
    } else {
      setHasValueInputName(false);
    }
  };

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  return (
    <Styled.ContainerColorWarning $focusorblur={String(FocusOrBlur)}>
      <Styled.ContainerEmailSvg $focus={String(FocusOrBlur)}>
        <UserSvg />
      </Styled.ContainerEmailSvg>
      <Styled.SpanWarning $hasvalueinput={String(hasValueInputName)}>
        Digite seu CPF ou E-mail
      </Styled.SpanWarning>
      <Styled.Input
        type="text"
        id="input-cpf-email"
        ref={refInputEmail}
        onChange={handleChangeInputName}
        $hasvalueinputname={String(hasValueInputName)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Styled.ContainerColorWarning>
  );
};

export default InputCpfEmail;
