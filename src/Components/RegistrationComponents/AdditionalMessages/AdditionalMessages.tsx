import * as Styled from './styled';
import { useEffect, useState } from 'react';
import CheckSvg from '../../../Svg/CheckSvg';

interface AdditionalMessagesProps {
  recaptchaCallback: () => void;
}

declare global {
  interface Window {
    recaptchaCallback: () => void;
  }
}

const AdditionalMessages = ({ recaptchaCallback }: AdditionalMessagesProps) => {
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
        O uso de nosso site e aplicativo é regulado por nossos{' '}
        <Styled.Span $span="2">Termos de Uso.</Styled.Span> Maiores informações sobre como usamos
        seus dados pessoais podem ser encontradas em nossa{' '}
        <Styled.Span $span="2">Política de Privacidade</Styled.Span> e{' '}
        <Styled.Span $span="2">Política de Cookies.</Styled.Span>
      </Styled.p>
      <Styled.p $para="4">
        Deseja excluir sua conta? Siga os <Styled.Span $span="2">passos a seguir.</Styled.Span>{' '}
      </Styled.p>
      <Styled.p $para="4">
        Este site é protegido pelo reCAPTCHA e pelo Google aplicando as seguintes{' '}
        <Styled.Span $span="2">Políticas de Segurança</Styled.Span> e{' '}
        <Styled.Span $span="2">Termos de Serviço.</Styled.Span>
      </Styled.p>
      <Styled.ContainerRecaptcha
        className="g-recaptcha" // era para ser 'class'
        data-sitekey="6LfA6AUpAAAAAKuDPHeFgdUSz_dVtzPRrCTkPSbl"
        data-callback="recaptchaCallback"
      ></Styled.ContainerRecaptcha>
    </Styled.ContainerNotices>
  );
};

export default AdditionalMessages;
