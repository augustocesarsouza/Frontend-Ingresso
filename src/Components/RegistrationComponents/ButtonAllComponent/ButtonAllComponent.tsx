import { useContext, useEffect } from 'react';
import * as Styled from './styled';
import { Url } from '../../../Utils/Url';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import XExitSvg from '../../../Svg/XExitSvg';
import { objUpdateRegisterUser } from '../../MyOrdersComponents/DataPersonalChange/DataPersonalChange';
import ExclamationMark from '../../../Svg/ExclamationMark';
import {
  ContextMyOrders,
  ContextMyOrdersProps,
} from '../../../Templates/SettingsAccount/SettingsAccount';

interface ButtonAllComponentProps {
  setVerifyFields: React.Dispatch<React.SetStateAction<boolean>>;
  disableButton: boolean;
  valueOfName: string;
  valueOfCpf: string;
  valueOfEmail: string;
  valueOfEmailConfirm: string;
  valueOfPassword: string;
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  estado: string;
  cidade: string;
  cep: string;
  phone: string;
  birthday: string;
  gender: string;
  objUpdateRegisterUser: objUpdateRegisterUser | null;
  passwordConfirm: string;
  nameUserChangeBoolean: boolean;
  nameUserChange: string;
  changeOrNot: boolean;
  setSenhaInvalida: React.Dispatch<React.SetStateAction<boolean>>;
  whatComponentImRendering: string;
  setActiveReCaptcha: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeOrNot: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatedSucessDataUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonAllComponent = ({
  setVerifyFields,
  disableButton,
  valueOfName,
  valueOfCpf,
  valueOfEmail,
  valueOfEmailConfirm,
  valueOfPassword,
  logradouro,
  numero,
  complemento,
  referencia,
  bairro,
  estado,
  cidade,
  cep,
  phone,
  birthday,
  gender,
  objUpdateRegisterUser,
  passwordConfirm,
  nameUserChangeBoolean,
  nameUserChange,
  changeOrNot,
  setSenhaInvalida,
  whatComponentImRendering,
  setActiveReCaptcha,
  setChangeOrNot,
  setUpdatedSucessDataUser,
}: ButtonAllComponentProps) => {
  const [clickContinue, setClickContinue] = useState(false);
  const [warnConfirmEmail, setWarnConfirmEmail] = useState(false);
  const [accountUpdateSucess, setAccountUpdateSucess] = useState(false);
  const useContextMyOrders = useContext<ContextMyOrdersProps | null>(ContextMyOrders);
  const nav = useNavigate();

  const handleReturn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setVerifyFields(true);
    setClickContinue(true);
  };

  useEffect(() => {
    const minimumOneLowercaseLetter = new RegExp('(?=.*[a-z])').test(valueOfPassword);
    const minimumOneUppercaseLetter = new RegExp('(?=.*[A-Z])').test(valueOfPassword);
    const minimumOneNumber = new RegExp('[0-9]').test(valueOfPassword);

    if (
      valueOfName.length >= 3 &&
      valueOfCpf.length >= 11 &&
      valueOfEmail.includes('@gmail.com') &&
      valueOfEmail === valueOfEmailConfirm &&
      valueOfPassword.length >= 8 &&
      minimumOneLowercaseLetter &&
      minimumOneUppercaseLetter &&
      minimumOneNumber
    ) {
      const obj = {
        name: valueOfName,
        email: valueOfEmail,
        Cpf: valueOfCpf,
        Password: valueOfPassword,
        BirthDateString: birthday,
        Phone: phone,
        Gender: gender,
        Cep: cep,
        Logradouro: logradouro,
        Numero: numero,
        Complemento: complemento,
        Referencia: referencia,
        Bairro: bairro,
        Estado: estado,
        Cidade: cidade,
      };
      if (clickContinue) {
        const CreateAccount = async () => {
          const res = await fetch(`${Url}/user/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
          });
          if (res.status === 200) {
            setWarnConfirmEmail(true);
          }
        };
        CreateAccount();
      }
    } else {
      if (clickContinue) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [
    logradouro,
    numero,
    complemento,
    referencia,
    bairro,
    estado,
    cidade,
    cep,
    phone,
    birthday,
    gender,
    valueOfName,
    valueOfCpf,
    valueOfEmail,
    valueOfPassword,
    clickContinue,
  ]);

  useEffect(() => {
    if (warnConfirmEmail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [warnConfirmEmail]);

  const handleClickExit = () => {
    setWarnConfirmEmail(false);
  };

  const handleClickContinue = () => {
    nav('/minha-conta/login');
  };

  const handleOk = () => {
    setUpdatedSucessDataUser((prev) => !prev);
    setAccountUpdateSucess(false);
  };

  const handleSaveChange = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setActiveReCaptcha(false);
    setChangeOrNot(false);
    const token = localStorage.getItem('token');

    if (token === null || token.length <= 0) {
      nav('/');
    }

    if (changeOrNot) {
      const res = await fetch(`${Url}/additional/update-info-user/${passwordConfirm}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objUpdateRegisterUser),
      });

      if (res.status === 400) {
        const json = await res.json();
        const message = json.message;
        if (message === 'password is not valid') {
          setSenhaInvalida(false);
        }
      }

      if (res.status === 200) {
        setAccountUpdateSucess(true);
      }

      if (res.status === 401) {
        nav('/');
        localStorage.removeItem('token');
      }
    }

    if (nameUserChangeBoolean) {
      if (useContextMyOrders.userObj === null) return;
      useContextMyOrders.userObj.name = nameUserChange;

      const res = await fetch(`${Url}/user/update-user/${passwordConfirm}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(useContextMyOrders.userObj),
      });

      if (res.status === 400) {
        const json = await res.json();
        const message = json.message;
        if (message === 'password is not valid') {
          setSenhaInvalida(false);
        }
      }

      if (res.status === 200) {
        setAccountUpdateSucess(true);
        nav('/minha-conta/meus-pedidos', { state: { user: useContextMyOrders.userObj } });
      }

      if (res.status === 401) {
        nav('/');
        localStorage.removeItem('token');
      }
    }
  };

  const handleClickExitUpdatedSucess = () => {
    setAccountUpdateSucess(false);
  };

  const handleRedirectUser = () => {
    if (useContextMyOrders.userObj === null) return;
    setAccountUpdateSucess(false);
    nav('/', { state: { user: useContextMyOrders.userObj } });
  };

  useEffect(() => {
    if (accountUpdateSucess) {
      grecaptcha.reset();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [accountUpdateSucess]);

  return (
    <Styled.ContainerButtonReturnContinue>
      {whatComponentImRendering === 'alreadyLogged' ? (
        <Styled.ButtonSave
          $button="2"
          $disablebutton={String(disableButton)}
          onClick={handleSaveChange}
          disabled={disableButton}
        >
          Salvar
        </Styled.ButtonSave>
      ) : (
        <>
          <Styled.Button $button="1" $disablebutton="QQ" onClick={handleReturn}>
            VOLTAR
          </Styled.Button>
          <Styled.Button
            $button="2"
            $disablebutton={String(disableButton)}
            onClick={handleContinue}
            disabled={disableButton}
          >
            CONTINUAR
          </Styled.Button>
        </>
      )}

      {accountUpdateSucess && (
        <Styled.ModalOverlay>
          <Styled.ContainerUpdatedSucess>
            <Styled.WrapperSvgExit onClick={handleClickExitUpdatedSucess}>
              <XExitSvg />
            </Styled.WrapperSvgExit>
            <Styled.ContainerUpdatedSvgExclamation>
              <Styled.WrapperSvgExclamation>
                <ExclamationMark />
              </Styled.WrapperSvgExclamation>
              <Styled.H1Updated>Conta Atualizada!</Styled.H1Updated>
            </Styled.ContainerUpdatedSvgExclamation>
            <Styled.SpanUpdated $span="1">
              Os dados da sua conta foram alterados e a conta já está atualizada.
            </Styled.SpanUpdated>
            <Styled.ButtonUpdated onClick={handleOk}>OK</Styled.ButtonUpdated>
            <Styled.SpanUpdated $span="2" onClick={handleRedirectUser}>
              Ir para a página inicial
            </Styled.SpanUpdated>
          </Styled.ContainerUpdatedSucess>
        </Styled.ModalOverlay>
      )}

      {warnConfirmEmail && (
        <Styled.ModalOverlay>
          <Styled.ContainerRedirectLogin>
            <Styled.WrapperSvgExit onClick={handleClickExit}>
              <XExitSvg />
            </Styled.WrapperSvgExit>
            <Styled.ContainerImgAndH1>
              <Styled.WrapperImg>
                <Styled.Img src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1700044578/3593453_txi3qg.png"></Styled.Img>
              </Styled.WrapperImg>
              <Styled.H1>Falta Pouco!</Styled.H1>
            </Styled.ContainerImgAndH1>
            <Styled.Span>Olá, {valueOfName}!</Styled.Span>
            <Styled.Span>
              Confirme seu cadastro clicando no link que acabamos de enviar para seu email
            </Styled.Span>
            <Styled.ButtonContinue onClick={handleClickContinue}>CONTINUAR</Styled.ButtonContinue>
          </Styled.ContainerRedirectLogin>
        </Styled.ModalOverlay>
      )}
    </Styled.ContainerButtonReturnContinue>
  );
};

export default ButtonAllComponent;
