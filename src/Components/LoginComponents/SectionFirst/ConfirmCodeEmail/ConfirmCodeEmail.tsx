import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Padlock from '../../../../Svg/Padlock';
import XExitSvg from '../../../../Svg/XExitSvg';
import * as Styled from './styled';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import Button from '../../SectionSecond/Button/Button';
import { useState, useEffect } from 'react';

interface ConfirmCodeEmailProps {
  confirmCodeEmail: boolean;
  valueInputCode: string;
  resentCode: boolean;
  handleEnter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleResendCode: () => void;
  setValueInputCode: React.Dispatch<React.SetStateAction<string>>;
  setConfirmCodeEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmCodeEmail = ({
  confirmCodeEmail,
  valueInputCode,
  resentCode,
  handleEnter,
  handleResendCode,
  setValueInputCode,
  setConfirmCodeEmail,
}: ConfirmCodeEmailProps) => {
  const [hasValueInputCode, setHasValueInputCode] = useState(false);
  const [focusOrBlurCode, setFocusOrBlurCode] = useState(false);

  const handleChangeInputCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();

    if (e.target.value.length > 0 && !isNaN(Number(e.target.value))) {
      setValueInputCode(inputValue);
      setHasValueInputCode(true);
    } else {
      setValueInputCode('');
      setHasValueInputCode(false);
    }
  };

  const handleFocusCode = () => {
    setFocusOrBlurCode(true);
  };

  const handleBlurCode = () => {
    setFocusOrBlurCode(false);
  };

  useEffect(() => {
    if (confirmCodeEmail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [confirmCodeEmail]);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setConfirmCodeEmail(false);
  };

  const handleClickExitCode = () => {
    setConfirmCodeEmail(false);
  };

  return (
    <>
      {confirmCodeEmail && (
        <Styled.ModalOverlayCodeConfirm>
          <Styled.ContainerCodeConfirm>
            <Styled.WrapperSvgExit onClick={handleClickExitCode}>
              <XExitSvg />
            </Styled.WrapperSvgExit>
            <Styled.WrapperImgPadlock>
              <Styled.Img
                className="padlock"
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1700220840/CADEADO_dytgfd.png"
              />
            </Styled.WrapperImgPadlock>
            <Styled.H1>Verifique seu login</Styled.H1>
            <Styled.p>
              Enviamos um código de confirmação para seu e-mail cadastrado. Digite-o abaixo e clique
              em Entrar
            </Styled.p>
            <Styled.ContainerColorWarning $focusorblur={String(focusOrBlurCode)}>
              <Styled.ContainerEmailSvg $focus={String(focusOrBlurCode)}>
                <Padlock />
              </Styled.ContainerEmailSvg>
              <Styled.SpanWarning $hasvalueinput={String(hasValueInputCode)}>
                Código enviado por e-mail
              </Styled.SpanWarning>
              <Styled.Input
                type="text"
                id="input-code"
                value={valueInputCode}
                $hasvalueinputname={String(hasValueInputCode)}
                onChange={handleChangeInputCode}
                onFocus={handleFocusCode}
                onBlur={handleBlurCode}
              />
            </Styled.ContainerColorWarning>
            <Styled.p>
              Caso não encontre o e-mail, verifique a sua caixa de Spam ou aba Promoções
            </Styled.p>
            <Styled.WrapperNotReceiveEmail className="container-not-received-email">
              <FontAwesomeIcon icon={faRotate} />
              <Styled.Span $span="1">Não recebeu o e-mail?</Styled.Span>
              <Styled.Span $span="2" onClick={handleResendCode}>
                Enviar novamente
              </Styled.Span>
            </Styled.WrapperNotReceiveEmail>
            {resentCode && <Styled.Span $span="3">Codigo reenviado Com sucesso</Styled.Span>}
            <Styled.WrapperButtonAll>
              <Styled.WrapperButtonCancel>
                <Button func={handleCancel} text="CANCELAR" />
              </Styled.WrapperButtonCancel>
              <Styled.WrapperButtonEnter>
                <Button func={handleEnter} text="ENTRAR" />
              </Styled.WrapperButtonEnter>
            </Styled.WrapperButtonAll>
          </Styled.ContainerCodeConfirm>
        </Styled.ModalOverlayCodeConfirm>
      )}
    </>
  );
};

export default ConfirmCodeEmail;
