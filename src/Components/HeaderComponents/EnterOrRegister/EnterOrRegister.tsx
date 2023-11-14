import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const EnterOrRegister = ({ enterOrRegister }) => {
  const nav = useNavigate();
  const handleRegisterAccount = () => {
    nav('/minha-conta/cadastro');
  };

  const handleLogin = () => {
    nav('/minha-conta/login');
  };

  return (
    <>
      {enterOrRegister && (
        <Styled.ContainerEnterOrRegisterMain>
          <FontAwesomeIcon icon={faCaretUp} />
          <Styled.ContainerEnterOrRegister>
            <Styled.ContainerRegister>
              <Styled.H2>Ainda não é cliente Ingresso.com?</Styled.H2>
              <Styled.P>
                Compre ingressos e combos de pipoca para ir ao cinema com segurança e mais
                comodidade!
              </Styled.P>
              <Styled.ButtonRegister onClick={handleRegisterAccount}>
                CRIAR UMA NOVA CONTA
              </Styled.ButtonRegister>
            </Styled.ContainerRegister>
          </Styled.ContainerEnterOrRegister>
          <Styled.ContainerLineWhite></Styled.ContainerLineWhite>
          <Styled.ContainerLogin>
            <Styled.H2>Cliente Ingresso.com?</Styled.H2>
            <Styled.link onClick={handleLogin}>Entrar na minha Conta</Styled.link>
          </Styled.ContainerLogin>
        </Styled.ContainerEnterOrRegisterMain>
      )}
    </>
  );
};

export default EnterOrRegister;
