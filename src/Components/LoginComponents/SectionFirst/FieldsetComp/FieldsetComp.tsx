import Padlock from '../../../../Svg/Padlock';
import UserSvg from '../../../../Svg/UserSvg';
import * as Styled from './styled';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Url } from '../../../../Utils/Url';

interface FieldsetCompProps {
  clickEnter: boolean;
}

interface TokenAlreadyVisualizeProps {
  tokenAlreadyVisualized: number;
}

const FieldsetComp = ({ clickEnter }: FieldsetCompProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [FocusOrBlurPassword, setFocusOrBlurPassword] = useState(false);
  const [hasValueInputName, setHasValueInputName] = useState(false);
  const [hasValueInputPassword, setHasValueInputPassword] = useState(false);

  const refInputEmail = useRef<HTMLInputElement | null>(null);
  const refInputPassword = useRef<HTMLInputElement | null>(null);

  const [valueInputEmail, setValueInputEmail] = useState('');
  const [tokenAlreadyVisualized, setTokenAlreadyVisualized] =
    useState<TokenAlreadyVisualizeProps | null>(null);

  const location = useLocation();
  let entered = false;
  useEffect(() => {
    if (location.pathname === '/minha-conta/confirmacao-de-email') {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (token !== null && token.length > 20) {
        if (entered) return;
        entered = true;

        confirmTokenUser(token);
      }
    }
  }, [location, entered]);

  const confirmTokenUser = async (token: string) => {
    const res = await fetch(`${Url}/user/confirm-token/${token}`);
    if (res.status === 200) {
      const json = await res.json();
      const tokenObj = json.data;
      setTokenAlreadyVisualized(tokenObj);
    }
  };

  useEffect(() => {
    if (clickEnter) {
      const emailOrCpf = refInputEmail.current.value;
      const password = refInputPassword.current.value;
    }
  }, [clickEnter]);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputName(true);
      setValueInputEmail(e.target.value);
    } else {
      setHasValueInputName(false);
    }
  };

  const handleChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputPassword(true);
      setValueInputEmail(e.target.value);
    } else {
      setHasValueInputPassword(false);
    }
  };

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  const handleFocusPassword = () => {
    setFocusOrBlurPassword(true);
  };

  const handleBlurPassword = () => {
    setFocusOrBlurPassword(false);
  };

  return (
    <Styled.Fieldset>
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
      <Styled.ContainerColorWarning $focusorblur={String(FocusOrBlurPassword)}>
        <Styled.ContainerEmailSvg $focus={String(FocusOrBlurPassword)}>
          <Padlock />
        </Styled.ContainerEmailSvg>
        <Styled.SpanWarning $hasvalueinput={String(hasValueInputPassword)}>
          Senha
        </Styled.SpanWarning>
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
    </Styled.Fieldset>
  );
};

export default FieldsetComp;
