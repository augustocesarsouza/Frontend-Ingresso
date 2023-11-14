import CheckSvg from '../../../../Svg/CheckSvg';
import * as Styled from './styled';
import { useState } from 'react';

interface ContinuationFormReqProps {
  setClickEnter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContinuationFormReq = ({ setClickEnter }: ContinuationFormReqProps) => {
  const [activeLabel, setActiveLabel] = useState(false);

  const handleClickLabel = () => {
    setActiveLabel((prev) => !prev);
  };

  const handleClickEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setClickEnter(true);
  };

  return (
    <Styled.WrapperAllContainerPasswordLow>
      <Styled.ContainerMainCheckAndRecoverPassword>
        <Styled.ContainerCheckbox onClick={handleClickLabel}>
          <Styled.Label $activelabel={String(activeLabel)}>
            {activeLabel && <CheckSvg />}
          </Styled.Label>
        </Styled.ContainerCheckbox>
        <Styled.Span $span="2">Mantenha-me conhectado</Styled.Span>
        <Styled.Span $span="3">Esqueceu a senha?</Styled.Span>
      </Styled.ContainerMainCheckAndRecoverPassword>
      <Styled.ContainerFollowStep>
        <Styled.Span $span="4">
          Perdeu acesso ao e-mail cadastrado?{' '}
          <Styled.Span $span="5">Siga o passo a passo</Styled.Span>
        </Styled.Span>
      </Styled.ContainerFollowStep>
      <Styled.ContainerReCAPTCHA>
        <Styled.Span $span="6">
          Este site é protegido pelo reCAPTCHA e pelo Google aplicando as seguintes
          <Styled.Span $span="7"> Políticas de Segurança</Styled.Span> e
          <Styled.Span $span="7"> Termos de Serviço.</Styled.Span>
        </Styled.Span>
      </Styled.ContainerReCAPTCHA>
      <Styled.ContainerButton>
        <Styled.Button onClick={handleClickEnter}>Entrar</Styled.Button>
      </Styled.ContainerButton>
    </Styled.WrapperAllContainerPasswordLow>
  );
};

export default ContinuationFormReq;
