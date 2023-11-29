import Padlock from '../../../../Svg/Padlock';
import * as Styled from './styled';
import { useState } from 'react';

interface InputPasswordProps {
  refInputPassword: React.MutableRefObject<HTMLInputElement>;
}

const InputPassword = ({ refInputPassword }: InputPasswordProps) => {
  const [FocusOrBlurPassword, setFocusOrBlurPassword] = useState(false);
  const [hasValueInputPassword, setHasValueInputPassword] = useState(false);

  const handleChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputPassword(true);
    } else {
      setHasValueInputPassword(false);
    }
  };

  const handleFocusPassword = () => {
    setFocusOrBlurPassword(true);
  };

  const handleBlurPassword = () => {
    setFocusOrBlurPassword(false);
  };

  return (
    <Styled.ContainerColorWarning $focusorblur={String(FocusOrBlurPassword)}>
      <Styled.ContainerEmailSvg $focus={String(FocusOrBlurPassword)}>
        <Padlock />
      </Styled.ContainerEmailSvg>
      <Styled.SpanWarning $hasvalueinput={String(hasValueInputPassword)}>Senha</Styled.SpanWarning>
      <Styled.Input
        type="password"
        id="input-password"
        ref={refInputPassword}
        onChange={handleChangeInputPassword}
        $hasvalueinputname={String(hasValueInputPassword)}
        onFocus={handleFocusPassword}
        onBlur={handleBlurPassword}
      />
    </Styled.ContainerColorWarning>
  );
};

export default InputPassword;
