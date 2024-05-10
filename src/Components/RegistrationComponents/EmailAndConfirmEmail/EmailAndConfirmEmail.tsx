import * as Styled from './styled';
import { useState, useEffect, useRef } from 'react';
import InputWarning from '../InputWarning/InputWarning';
import EmailSvg from '../../../Svg/EmailSvg';
// import * as signalR from '@microsoft/signalr';

interface EmailAndConfirmEmailProps {
  verifyFields: boolean;
  setVerifyFields: React.Dispatch<React.SetStateAction<boolean>>;
  setValueOfEmail: React.Dispatch<React.SetStateAction<string>>;
  setValueOfEmailConfirm: React.Dispatch<React.SetStateAction<string>>;
}

const EmailAndConfirmEmail = ({
  verifyFields,
  setVerifyFields,
  setValueOfEmail,
  setValueOfEmailConfirm,
}: EmailAndConfirmEmailProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [emailValid, setemailValid] = useState(true);

  const [hasValueInputName, setHasValueInputName] = useState(false);
  const [valueInputEmail, setValueInputEmail] = useState('');
  const [valueEmailUserConfirm, setValueEmailUserConfirm] = useState('');

  const [hasValueInputConfirmEmail, setHasValueInputConfirmEmail] = useState(false);
  const [FocusOrBlurEmailConfirm, setFocusOrBlurEmailConfirm] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState(true);

  const refInputEmail = useRef<HTMLInputElement | null>(null);
  const refInputConfirmEmail = useRef<HTMLInputElement | null>(null);
  // const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
  const [existEmail, setExistEmail] = useState(false);

  // const startConnection = async () => {
  //   const newConnection = new signalR.HubConnectionBuilder()
  //     .withUrl('https://localhost:7456/generalhub')
  //     .build();

  //   try {
  //     await newConnection.start();
  //     setConnection(newConnection);
  //   } catch (error) {
  //     console.error('Error establishing SignalR connection', error);
  //   }
  // };

  // useEffect(() => {
  //   if (connection === null) {
  //     startConnection();
  //   }
  // }, [connection]);

  // useEffect(() => {
  //   if (connection === null) return;
  //   if (valueInputEmail.includes('@gmail.com')) {
  //     connection.invoke('CheckEmailAlreadyExists', valueInputEmail);
  //   }

  //   connection.on('email-check-result', (exists: boolean) => {
  //     if (exists) {
  //       setExistEmail(true);
  //     } else {
  //       setExistEmail(false);
  //     }
  //   });
  // }, [connection, valueInputEmail]);

  useEffect(() => {
    if (verifyFields) {
      const valueEmail = refInputEmail.current.value;
      setValueOfEmail(valueEmail);
      if (!valueEmail.includes('@gmail.com')) {
        setVerifyFields(false);
        setemailValid(false);
      }

      const valueEmailConfirm = refInputConfirmEmail.current.value;
      setValueOfEmailConfirm(valueEmailConfirm);
      if (valueEmail.length <= 0) {
        setVerifyFields(false);
        setemailValid(false);
        setEmailConfirm(false);
      } else {
        if (!(valueEmail === valueEmailConfirm)) {
          setEmailConfirm(false);
          setemailValid(false);
        }
      }
    }
  }, [refInputConfirmEmail.current, refInputEmail.current, verifyFields]);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputName(true);
      setValueInputEmail(e.target.value);
    } else {
      setHasValueInputName(false);
    }

    if (e.target.value.includes('@gmail.com')) {
      if (e.target.value.length >= 3) {
        setemailValid(true);
      } else {
        setemailValid(false);
      }
    } else {
      setemailValid(false);
    }

    if (valueEmailUserConfirm === e.target.value) {
      setHasValueInputConfirmEmail(true);
      setEmailConfirm(true);
    } else {
      setEmailConfirm(false);
    }
  };

  const handleChangeInputEmailConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueEmailUserConfirm(e.target.value);
    if (e.target.value.length > 0) {
      setHasValueInputConfirmEmail(true);
    } else {
      setHasValueInputConfirmEmail(false);
    }

    if (e.target.value === valueInputEmail) {
      setHasValueInputConfirmEmail(true);
      setemailValid(true);

      if (e.target.value.length >= 3) {
        setEmailConfirm(true);
      } else {
        setEmailConfirm(false);
      }
    } else {
      setEmailConfirm(false);
      // setemailValid(false);
    }
  };

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  const handleFocusEmailConfirm = () => {
    setFocusOrBlurEmailConfirm(true);
  };

  const handleBlurEmailConfirm = () => {
    setFocusOrBlurEmailConfirm(false);
  };

  return (
    <Styled.ContainerMainEmail>
      <Styled.ContainerWarning $container="1">
        <Styled.ContainerColorWarning
          $focusorblur={String(FocusOrBlur)}
          $emailvalid={String(emailValid)}
        >
          <Styled.ContainerEmailSvg $focus={String(FocusOrBlur)} $emailvalid={String(emailValid)}>
            <EmailSvg />
          </Styled.ContainerEmailSvg>
          <Styled.SpanWarning $hasvalueinput={String(hasValueInputName)}>
            *E-mail
          </Styled.SpanWarning>
          <Styled.Input
            type="text"
            id="input-email"
            ref={refInputEmail}
            onChange={handleChangeInputName}
            $hasvalueinputname={String(hasValueInputName)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Styled.ContainerColorWarning>
        <InputWarning
          Children={
            'Informe um endereço de e-mail válido. Ele será utilizado mais tarde para validar seus dados'
          }
          enableWarning={emailValid}
        />
      </Styled.ContainerWarning>
      <Styled.ContainerWarning $container="2">
        <Styled.ContainerColorWarning
          $focusorblur={String(FocusOrBlurEmailConfirm)}
          $emailvalid={String(emailConfirm)}
        >
          <Styled.ContainerEmailSvg
            $focus={String(FocusOrBlurEmailConfirm)}
            $emailvalid={String(emailConfirm)}
          >
            <EmailSvg />
          </Styled.ContainerEmailSvg>
          <Styled.SpanWarning $hasvalueinput={String(hasValueInputConfirmEmail)}>
            *Confirmação do E-mail
          </Styled.SpanWarning>
          <Styled.InputConfirmEmail
            type="text"
            id="input-confirm-email"
            ref={refInputConfirmEmail}
            onChange={handleChangeInputEmailConfirm}
            $hasvalueinputconfirmemail={String(hasValueInputConfirmEmail)}
            onFocus={handleFocusEmailConfirm}
            onBlur={handleBlurEmailConfirm}
          />
        </Styled.ContainerColorWarning>
        <InputWarning
          Children={'Este campo deve ser igual ao de e-mail'}
          enableWarning={emailConfirm}
        />
      </Styled.ContainerWarning>
    </Styled.ContainerMainEmail>
  );
};

export default EmailAndConfirmEmail;
