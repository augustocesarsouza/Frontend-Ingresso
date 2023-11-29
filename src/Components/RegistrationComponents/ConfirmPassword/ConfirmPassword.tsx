import InputWarning from '../InputWarning/InputWarning';
import * as Styled from './styled';
import { useState, useRef, useEffect } from 'react';

const ConfirmPassword = ({
  changeNameUserOrAnyDataForm,
  senhaInvalida,
  setSenhaInvalida,
  setPasswordConfirm,
}) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [hasValueInputName, setHasValueInputName] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const inputNameRef = useRef<HTMLInputElement | null>(null);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setSenhaInvalida(true);
      setHasValueInputName(true);
      setNameUser(e.target.value);
    } else {
      setHasValueInputName(false);
      setNameUser(e.target.value);
    }
  };

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  useEffect(() => {
    if (nameUser.length > 0) {
      setPasswordConfirm(nameUser);
    }
  }, [nameUser]);

  return (
    <>
      {changeNameUserOrAnyDataForm && (
        <Styled.ContainerMainConfirmPassword>
          <Styled.ContainerText>
            <Styled.H2>CONFIRME SUA SENHA</Styled.H2>
            <Styled.p>
              Por questões de segurança, você precisa digitar sua senha para confirmar as alterações
              feitas no seu cadastro.
            </Styled.p>
          </Styled.ContainerText>
          <Styled.ContainerYourNameAndWarning>
            <Styled.ContainerAllColors
              $focusorblur={String(FocusOrBlur)}
              $greaterthan3lessthan61={String(hasValueInputName)}
            >
              <Styled.SpanName $hasvalueinputname={String(hasValueInputName)}>
                *Senha
              </Styled.SpanName>
              <Styled.Input
                type="password"
                id="input-your-password"
                ref={inputNameRef}
                value={nameUser}
                onChange={handleChangeInputName}
                $hasvalueinputname={String(hasValueInputName)}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Styled.ContainerAllColors>

            <InputWarning Children={'A senha é obrigatória'} enableWarning={hasValueInputName} />

            <InputWarning Children={'Senha Invalida'} enableWarning={senhaInvalida} />
          </Styled.ContainerYourNameAndWarning>
        </Styled.ContainerMainConfirmPassword>
      )}
    </>
  );
};

export default ConfirmPassword;
