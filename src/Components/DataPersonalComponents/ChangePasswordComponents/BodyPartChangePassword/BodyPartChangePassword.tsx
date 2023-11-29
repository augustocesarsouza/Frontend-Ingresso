import { useEffect, useRef, useState } from 'react';
import PasswordSvg from '../../../../Svg/PasswordSvg';
import InputWarning from '../../../RegistrationComponents/InputWarning/InputWarning';
import RequirementPassword from '../../../RegistrationComponents/RequirementPassword/RequirementPassword';
import * as Styled from './styled';
import { Url } from '../../../../Utils/Url';
import { useNavigate } from 'react-router-dom';
import XExitSvg from '../../../../Svg/XExitSvg';
import PadlockIngress from '../../../../Svg/PadlockIngress';

interface BodyPartChangePasswordProps {
  changePassword: boolean;
  idGuid: string;
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingContainerChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const BodyPartChangePassword = ({
  changePassword,
  idGuid,
  setChangePassword,
  setLoadingContainerChangePassword,
}: BodyPartChangePasswordProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [oneLowerCaseLetter, setOneLowerCaseLetter] = useState(false);
  const [oneUppercaseLetter, setOneUppercaseLetter] = useState(false);
  const [oneNumber, setOneNumber] = useState(false);
  const [minimumEightCharacter, setMinimumEightCharacter] = useState(false);
  const [hasValueInputPassword, setHasValueInputPassword] = useState(false);
  const refInputPassword = useRef<HTMLInputElement | null>(null);
  const [valueNewPassword, setValueNewPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [showModalPasswordChangeSucess, setShowModalPasswordChangeSucess] = useState(false);

  const nav = useNavigate();

  const handleChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueNewPassword(e.target.value);
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

  const [FocusOrBlurConfirmPassword, setFocusOrBlurConfirmPassword] = useState(false);
  const [PasswordEqual, setPasswordEqual] = useState(true);
  const [hasValueInputConfirmPassword, setHasValueInputConfirmPassword] = useState(false);
  const [valueConfirmPassword, setValueConfirmPassword] = useState('');
  const [loadingFillForm, setLoadingFillForm] = useState(true);

  const handleFocusConfirmPassword = () => {
    setFocusOrBlurConfirmPassword(true);
  };

  const handleBlurConfirmPassword = () => {
    setFocusOrBlurConfirmPassword(false);
  };

  useEffect(() => {
    if (changePassword || loadingFillForm) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [changePassword, loadingFillForm]);

  const handleChangeInputConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueConfirmPassword(e.target.value);
    if (e.target.value.length > 0) {
      setHasValueInputConfirmPassword(true);
    } else {
      setHasValueInputConfirmPassword(false);
    }
  };

  useEffect(() => {
    if (valueNewPassword === valueConfirmPassword) {
      setPasswordEqual(true);
    } else {
      setPasswordEqual(false);
    }
  }, [valueNewPassword, valueConfirmPassword]);

  const [hasValueInputPasswordCurrent, setHasValueInputPasswordCurrent] = useState(false);
  const [FocusOrBlurPasswordCurrent, setFocusOrBlurPasswordCurrent] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const refInputPasswordCurrent = useRef<HTMLInputElement | null>(null);
  const refInputPasswordNew = useRef<HTMLInputElement | null>(null);

  const handleChangeInputPasswordCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputPasswordCurrent(true);
    } else {
      setHasValueInputPasswordCurrent(false);
    }
  };

  const handleFocusPasswordCurrent = () => {
    setFocusOrBlurPasswordCurrent(true);
  };

  const handleBlurPasswordCurrent = () => {
    setFocusOrBlurPasswordCurrent(false);
  };

  const recaptchaCallbackChangePassword = () => {
    setDisableButton(false);
  };

  useEffect(() => {
    window.recaptchaCallbackChangePassword = recaptchaCallbackChangePassword;
  }, []);

  const [passwordInvalidInformed, setPasswordInvalidInformed] = useState(true);

  const handleReturn = () => {
    setChangePassword(false);
  };

  const handleChangePasswordButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoadingFillForm(false);
    setLoading(true);
    if (
      refInputPasswordCurrent.current.value === null ||
      refInputPasswordNew.current.value === null ||
      idGuid === null
    )
      return;

    const passwordCurrent = refInputPasswordCurrent.current.value;
    const passwordNew = refInputPasswordNew.current.value;

    const objChangePassword = {
      PasswordCurrent: passwordCurrent,
      NewPassword: passwordNew,
      IdGuid: idGuid,
    };

    const res = await fetch(`${Url}/user/update-user-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objChangePassword),
    });

    setTimeout(async () => {
      if (res.status === 400) {
        const json = await res.json();
        const message = json.message;

        if (message === 'password informed invalid') {
          setPasswordInvalidInformed(false);
          setLoadingFillForm(true);
          setLoading(false);
        }
      }

      if (res.status === 200) {
        setLoadingContainerChangePassword(false);
        setShowModalPasswordChangeSucess(true);
      }
    }, 1000);
  };

  const [unlockButton, setUnlockButton] = useState(false);

  useEffect(() => {
    if (passwordIsValid && hasValueInputPasswordCurrent && PasswordEqual && !disableButton) {
      setUnlockButton(true);
    } else {
      setUnlockButton(false);
    }
  }, [passwordIsValid, hasValueInputPasswordCurrent, PasswordEqual, disableButton]);

  const handleClickContainerChangePassword = () => {
    setPasswordInvalidInformed(true);
  };

  const handleClickExitChangePassword = () => {
    nav('/minha-conta/login');
  };

  const handleContinueLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    nav('/minha-conta/login');
  };

  return (
    <>
      {loadingFillForm && (
        <Styled.ContainerWarning onClick={handleClickContainerChangePassword}>
          <Styled.ContainerColorWarning
            $focusorblur={String(FocusOrBlurPasswordCurrent)}
            $passwordisvalid={String(hasValueInputPasswordCurrent)}
          >
            <Styled.ContainerPasswordSvg
              $focus={String(FocusOrBlurPasswordCurrent)}
              $passwordisvalid={String(hasValueInputPasswordCurrent)}
            >
              <PasswordSvg />
            </Styled.ContainerPasswordSvg>
            <Styled.SpanWarning $hasvalueinput={String(hasValueInputPasswordCurrent)}>
              Senha Atual
            </Styled.SpanWarning>
            <Styled.Input
              type="password"
              id="input-password"
              ref={refInputPasswordCurrent}
              onChange={handleChangeInputPasswordCurrent}
              $hasvalueinputname={String(hasValueInputPasswordCurrent)}
              onFocus={handleFocusPasswordCurrent}
              onBlur={handleBlurPasswordCurrent}
              autoComplete="new-password"
            />
          </Styled.ContainerColorWarning>
          <InputWarning
            Children={'Por favor, digite sua senha.'}
            enableWarning={hasValueInputPasswordCurrent}
          />
          <InputWarning Children={'Senha invalida'} enableWarning={passwordInvalidInformed} />
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
              Nova Senha
            </Styled.SpanWarning>
            <Styled.Input
              type="password"
              id="input-password"
              ref={refInputPasswordNew}
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
          <Styled.ContainerColorWarning
            $focusorblur={String(FocusOrBlurConfirmPassword)}
            $passwordisvalid={String(PasswordEqual)}
          >
            <Styled.ContainerPasswordSvg
              $focus={String(FocusOrBlurConfirmPassword)}
              $passwordisvalid={String(PasswordEqual)}
            >
              <PasswordSvg />
            </Styled.ContainerPasswordSvg>
            <Styled.SpanWarning $hasvalueinput={String(hasValueInputConfirmPassword)}>
              Confirme sua nova senha
            </Styled.SpanWarning>
            <Styled.Input
              type="password"
              id="input-password"
              ref={refInputPassword}
              onChange={handleChangeInputConfirmPassword}
              $hasvalueinputname={String(hasValueInputConfirmPassword)}
              onFocus={handleFocusConfirmPassword}
              onBlur={handleBlurConfirmPassword}
              autoComplete="new-password"
            />
          </Styled.ContainerColorWarning>
          <InputWarning Children={'Senhas não coincidem.'} enableWarning={PasswordEqual} />
          <RequirementPassword
            oneLowerCaseLetter={oneLowerCaseLetter}
            oneUppercaseLetter={oneUppercaseLetter}
            oneNumber={oneNumber}
            minimumEightCharacter={minimumEightCharacter}
          />
          <Styled.p $para="4">
            <Styled.Span $span="0">
              Este site é protegido pelo reCAPTCHA e pelo Google aplicando as seguintes
            </Styled.Span>
            <Styled.Span $span="2">Políticas de Segurança</Styled.Span> e{' '}
            <Styled.Span $span="2">Termos de Serviço.</Styled.Span>
          </Styled.p>
          <Styled.ContainerRecaptcha
            className="g-recaptcha"
            data-sitekey="6LfA6AUpAAAAAKuDPHeFgdUSz_dVtzPRrCTkPSbl"
            data-callback="recaptchaCallbackChangePassword"
          ></Styled.ContainerRecaptcha>
          <Styled.ContainerButtonReturnContinue>
            <Styled.Button $button="1" $disablebutton="false" onClick={handleReturn}>
              VOLTAR
            </Styled.Button>
            <Styled.Button
              $button="2"
              $disablebutton={String(!unlockButton)}
              onClick={(e) => handleChangePasswordButton(e)}
              disabled={!unlockButton}
            >
              ALTERAR SENHA
            </Styled.Button>
          </Styled.ContainerButtonReturnContinue>
        </Styled.ContainerWarning>
      )}

      {showModalPasswordChangeSucess && (
        <Styled.ModalOverlay>
          <Styled.ContainerRedirectLoginSecond>
            <Styled.WrapperSvgExit onClick={handleClickExitChangePassword}>
              <XExitSvg />
            </Styled.WrapperSvgExit>
            <Styled.ContainerPadlockIngress>
              <PadlockIngress />
            </Styled.ContainerPadlockIngress>
            <Styled.H1SenhaAlteradaSucesso>
              Senha alterada com sucesso!
            </Styled.H1SenhaAlteradaSucesso>
            <Styled.Span $span="6">
              Para continuar navegando. por favor faça login novamente utilizando a nova senha
            </Styled.Span>
            <Styled.ButtonContinue onClick={handleContinueLogin}>CONTINUAR</Styled.ButtonContinue>
          </Styled.ContainerRedirectLoginSecond>
        </Styled.ModalOverlay>
      )}

      {loading && (
        <Styled.ContainerMainLoader>
          <Styled.ContainerLoader></Styled.ContainerLoader>
        </Styled.ContainerMainLoader>
      )}
    </>
  );
};

export default BodyPartChangePassword;
