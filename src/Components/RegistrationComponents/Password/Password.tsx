import PasswordSvg from '../../../Svg/PasswordSvg';
import InputWarning from '../InputWarning/InputWarning';
import RequirementPassword from '../RequirementPassword/RequirementPassword';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';

interface PasswordProps {
  verifyFields: boolean;
  setVerifyFields: React.Dispatch<React.SetStateAction<boolean>>;
  setValueOfPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Password = ({ verifyFields, setVerifyFields, setValueOfPassword }: PasswordProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [oneLowerCaseLetter, setOneLowerCaseLetter] = useState(false);
  const [oneUppercaseLetter, setOneUppercaseLetter] = useState(false);
  const [oneNumber, setOneNumber] = useState(false);
  const [minimumEightCharacter, setMinimumEightCharacter] = useState(false);
  const [hasValueInputPassword, setHasValueInputPassword] = useState(false);
  const refInputPassword = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (verifyFields) {
      setVerifyFields(false);
      const password = refInputPassword.current.value;
      setValueOfPassword(password);
      if (password.length <= 0) {
        setHasValueInputPassword(false);
        setVerifyFields(false);
      }

      const minimumOneLowercaseLetter = new RegExp('(?=.*[a-z])').test(password);

      if (!minimumOneLowercaseLetter) {
        setHasValueInputPassword(false);
        setVerifyFields(false);
      }

      const minimumOneUppercaseLetter = new RegExp('(?=.*[A-Z])').test(password);

      if (!minimumOneUppercaseLetter) {
        setHasValueInputPassword(false);
        setVerifyFields(false);
      }

      const minimumOneNumber = new RegExp('[0-9]').test(password);

      if (!minimumOneNumber) {
        setHasValueInputPassword(false);
        setVerifyFields(false);
      }

      if (password.length < 8) {
        setHasValueInputPassword(false);
        setVerifyFields(false);
      }
    }
  }, [verifyFields]);

  const handleChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputPassword(true);
    } else {
      setHasValueInputPassword(false);
    }

    const minimumOneLowercaseLetter = new RegExp('(?=.*[a-z])').test(e.target.value);
    if (minimumOneLowercaseLetter) {
      setOneLowerCaseLetter(true);
    } else {
      setOneLowerCaseLetter(false);
    }

    const minimumOneUppercaseLetter = new RegExp('(?=.*[A-Z])').test(e.target.value);
    if (minimumOneUppercaseLetter) {
      setOneUppercaseLetter(true);
    } else {
      setOneUppercaseLetter(false);
    }

    const minimumOneNumber = new RegExp('[0-9]').test(e.target.value);
    if (minimumOneNumber) {
      setOneNumber(true);
    } else {
      setOneNumber(false);
    }

    if (e.target.value.length >= 8) {
      setMinimumEightCharacter(true);
    } else {
      setMinimumEightCharacter(false);
    }
  };

  useEffect(() => {
    if (
      oneLowerCaseLetter === true &&
      oneUppercaseLetter === true &&
      oneNumber === true &&
      minimumEightCharacter === true &&
      hasValueInputPassword === true
    ) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }, [
    oneLowerCaseLetter,
    oneUppercaseLetter,
    oneNumber,
    minimumEightCharacter,
    hasValueInputPassword,
  ]);

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerWarning>
        <Styled.ContainerColorWarning
          $focusorblur={String(FocusOrBlur)}
          $passwordisvalid={String(passwordIsValid)}
        >
          <Styled.ContainerPasswordSvg
            $focus={String(FocusOrBlur)}
            $passwordisvalid={String(passwordIsValid)}
          >
            <PasswordSvg />
          </Styled.ContainerPasswordSvg>
          <Styled.SpanWarning $hasvalueinput={String(hasValueInputPassword)}>
            *Senha
          </Styled.SpanWarning>
          <Styled.Input
            type="password"
            id="input-password"
            ref={refInputPassword}
            onChange={handleChangeInputPassword}
            $hasvalueinputname={String(hasValueInputPassword)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="new-password"
          />
        </Styled.ContainerColorWarning>
        <InputWarning
          Children={'A senha não atende aos critérios necessários.'}
          enableWarning={passwordIsValid}
        />
        <RequirementPassword
          oneLowerCaseLetter={oneLowerCaseLetter}
          oneUppercaseLetter={oneUppercaseLetter}
          oneNumber={oneNumber}
          minimumEightCharacter={minimumEightCharacter}
        />
      </Styled.ContainerWarning>
    </Styled.ContainerMain>
  );
};

export default Password;
