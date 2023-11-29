import QuestionMarkSvg from '../../../Svg/QuestionMarkSvg';
import LoupeSvg from '../../../Svg/loupeSvg';
import * as Styled from './styled';
import { useState, useEffect, useContext } from 'react';
import EnterOrRegister from '../EnterOrRegister/EnterOrRegister';
import { ContextHome, ContextHomeProps } from '../../../Templates/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import InfoLoggedUser from '../InfoLoggedUser/InfoLoggedUser';
import { useNavigate } from 'react-router-dom';

const SecondContainer = () => {
  const [enterOrRegister, setEnterOrRegister] = useState(false);
  const [enterMouseDivUserImgSvg, setEnterMouseDivUserImgSvg] = useState(false);
  const [userName, setUserName] = useState('');
  const nav = useNavigate();

  const useContextHome = useContext<ContextHomeProps | null>(ContextHome);

  const handleEnterOrRegister = () => {
    setEnterOrRegister((prev) => !prev);
  };

  const documentEvent = () => {
    setEnterOrRegister(false);
  };

  useEffect(() => {
    if (enterMouseDivUserImgSvg) return;
    document.addEventListener('click', documentEvent);

    return () => {
      document.removeEventListener('click', documentEvent);
    };
  }, [enterMouseDivUserImgSvg]);

  useEffect(() => {
    if (useContextHome.userObj === null) return;

    const {
      userObj: { name },
    } = useContextHome;
    setUserName(name);
  }, [useContextHome]);

  const handleEnter = () => {
    setEnterMouseDivUserImgSvg(true);
  };

  const handleLeave = () => {
    setEnterMouseDivUserImgSvg(false);
  };

  const [openInfoUser, setOpenInfoUser] = useState(false);

  const handleClickUserName = () => {
    setOpenInfoUser((prev) => !prev);
  };

  const handleMyOrders = () => {
    if (useContextHome.userObj === null) return;
    nav('/minha-conta/meus-pedidos', { state: { user: useContextHome.userObj } });
  };

  const handlePersonalData = () => {};

  const handlePaymentMethods = () => {};

  const handleLoggingOut = () => {
    if (useContextHome.userObj === null) return;

    const { setUserObj } = useContextHome;

    setOpenInfoUser(false);
    nav('/', { state: { user: null } });
    setUserName('');
    setUserObj(null);
  };

  return (
    <Styled.SecondContainer>
      <Styled.ContainerLoupe data-testid="container-loupe">
        <LoupeSvg />
      </Styled.ContainerLoupe>
      <Styled.ContainerUserImgSvg onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <InfoLoggedUser
          userName={userName}
          handleEnterOrRegister={handleEnterOrRegister}
          handleClickUserName={handleClickUserName}
        />
        <EnterOrRegister enterOrRegister={enterOrRegister} />
        {openInfoUser && (
          <Styled.ContainerNavMainUser>
            <FontAwesomeIcon icon={faCaretUp} />
            <Styled.ContainerNav>
              <Styled.P>Olá, {userName}</Styled.P>
              <Styled.Nav>
                <Styled.Link onClick={handleMyOrders}>Meus Pedidos</Styled.Link>
                <Styled.Link onClick={handlePersonalData}>Dados Pessoais</Styled.Link>
                <Styled.Link onClick={handlePaymentMethods}>Formas de Pagamento</Styled.Link>

                <Styled.ContainerLineWhite></Styled.ContainerLineWhite>
                <Styled.Link onClick={handleLoggingOut}>Sair da Conta</Styled.Link>
              </Styled.Nav>
            </Styled.ContainerNav>
          </Styled.ContainerNavMainUser>
        )}
      </Styled.ContainerUserImgSvg>
      <Styled.ContainerQuestion data-testid="container-question-mark">
        <QuestionMarkSvg />
      </Styled.ContainerQuestion>
    </Styled.SecondContainer>
  );
};

export default SecondContainer;
