import * as Styled from './styled';
import { useEffect, useState, useLayoutEffect } from 'react';
import CheckSvg from '../../../Svg/CheckSvg';
import ConfirmPassword from '../ConfirmPassword/ConfirmPassword';

interface AdditionalMessagesProps {
  changeOrNot: boolean;
  senhaInvalida: boolean;
  nameUserChangeBoolean: boolean;
  setSenhaInvalida: React.Dispatch<React.SetStateAction<boolean>>;
  recaptchaCallback: () => void;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}

declare global {
  interface Window {
    recaptchaCallback: () => void;
  }
}

const AdditionalMessages = ({
  changeOrNot,
  senhaInvalida,
  nameUserChangeBoolean,
  setSenhaInvalida,
  recaptchaCallback,
  setPasswordConfirm,
}: AdditionalMessagesProps) => {
  const [activeLabel, setActiveLabel] = useState(false);

  const handleClickLabel = () => {
    setActiveLabel((prev) => !prev);
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.recaptchaCallback = recaptchaCallback;
  }, []);

  const [changeNameUserOrAnyDataForm, setChangeNameUserOrAnyDataForm] = useState(false);

  useLayoutEffect(() => {
    if (changeOrNot || nameUserChangeBoolean) {
      setChangeNameUserOrAnyDataForm(true);
    } else {
      setChangeNameUserOrAnyDataForm(false);
    }
  }, [changeOrNot, nameUserChangeBoolean]);

  return (
    <Styled.ContainerNotices>
      <Styled.ContainerReceiveUpdatesAndCheckboxMain>
        <Styled.ContainerCheckbox onClick={handleClickLabel}>
          <Styled.Label $activelabel={String(activeLabel)}>
            {activeLabel && <CheckSvg />}
          </Styled.Label>
        </Styled.ContainerCheckbox>
        <Styled.Span $span="1">Quero receber novidades e mensagens da Ingresso.com.</Styled.Span>
      </Styled.ContainerReceiveUpdatesAndCheckboxMain>
      <Styled.p $para="3">
        <Styled.Span $span="0">O uso de nosso site e aplicativo é regulado por nossos</Styled.Span>
        <Styled.Span $span="2">Termos de Uso.</Styled.Span>
        <Styled.Span $span="0">
          Maiores informações sobre como usamos seus dados pessoais podem ser encontradas em nossa
        </Styled.Span>
        <Styled.Span $span="2">Política de Privacidade</Styled.Span> e
        <Styled.Span $span="2">Política de Cookies.</Styled.Span>
      </Styled.p>
      <Styled.p $para="4">
        Deseja excluir sua conta? Siga os <Styled.Span $span="2">passos a seguir.</Styled.Span>{' '}
      </Styled.p>

      <ConfirmPassword
        changeNameUserOrAnyDataForm={changeNameUserOrAnyDataForm}
        senhaInvalida={senhaInvalida}
        setSenhaInvalida={setSenhaInvalida}
        setPasswordConfirm={setPasswordConfirm}
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
        data-callback="recaptchaCallback"
      ></Styled.ContainerRecaptcha>
    </Styled.ContainerNotices>
  );
};

export default AdditionalMessages;
