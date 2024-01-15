import { useState, useEffect } from 'react';
import * as Styled from './styled';
import IngressoSvg from '../../../Svg/IngressoSvg';
import UserSvg from '../../../Svg/UserSvg';
import QuestionMark from '../../../Svg/QuestionMark';
import { User } from '../../../Templates/Checkout/Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface TopPartCheckoutProps {
  user: User | null;
  clickDivMain: boolean;
  setMouseInnerDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopPartCheckout = ({ user, clickDivMain, setMouseInnerDiv }: TopPartCheckoutProps) => {
  const [userNameLogged, setUserNameLogged] = useState<User | null>(null);
  const handleRedirect = () => {
    nav('/', { state: { user: userNameLogged } });
  };

  useEffect(() => {
    if (user === null) return;

    setUserNameLogged(user);
  }, [user]);

  const [openInfoUser, setOpenInfoUser] = useState(false);
  const nav = useNavigate();

  const handleEnterOrRegister = () => {
    setOpenInfoUser((prev) => !prev);
  };

  const handleMyOrders = () => {
    if (userNameLogged === null) return;
    nav('/minha-conta/meus-pedidos', { state: { user: userNameLogged } });
  };

  const handlePersonalData = () => {};

  const handlePaymentMethods = () => {};

  const handleLoggingOut = () => {
    if (userNameLogged === null) return;

    setOpenInfoUser(false);
    nav('/', { state: { user: null } });
  };

  const handleMouseEnter = () => {
    setMouseInnerDiv(true);
  };

  const handleMouseLeave = () => {
    setMouseInnerDiv(false);
  };

  useEffect(() => {
    if (clickDivMain) {
      setOpenInfoUser(false);
    }
  }, [clickDivMain]);

  return (
    <Styled.ContainerFirst>
      <Styled.WrapperSvgIngressoMain>
        <Styled.WrapperSvgIngresso onClick={handleRedirect}>
          <IngressoSvg />
        </Styled.WrapperSvgIngresso>
      </Styled.WrapperSvgIngressoMain>
      <Styled.ContainerMainNameUserAndService>
        <Styled.WrapperNameService>
          <Styled.ContainerInfoUser
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleEnterOrRegister}
          >
            <Styled.Span>
              {`Olá,${
                userNameLogged !== null &&
                userNameLogged.name[0].toUpperCase() +
                  userNameLogged.name.slice(1, userNameLogged.name.length)
              }`}
            </Styled.Span>
            <Styled.WrapperSvgUser $containeruser="1" $openinfouser={openInfoUser}>
              <UserSvg />
            </Styled.WrapperSvgUser>
          </Styled.ContainerInfoUser>
          <Styled.ContainerInfoUser>
            <Styled.Span>Atendimento</Styled.Span>
            <Styled.WrapperSvgUser $containeruser="2" $openinfouser={false}>
              <QuestionMark />
            </Styled.WrapperSvgUser>
          </Styled.ContainerInfoUser>
        </Styled.WrapperNameService>
        {openInfoUser && (
          <Styled.ContainerNavMainUser
            $openinfouser={openInfoUser}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faCaretUp} />
            <Styled.ContainerNav>
              <Styled.Nav>
                <Styled.Link $link="1" onClick={handleMyOrders}>
                  Meus Pedidos
                </Styled.Link>
                <Styled.Link $link="2" onClick={handlePersonalData}>
                  Dados Pessoais
                </Styled.Link>
                <Styled.Link $link="3" onClick={handlePaymentMethods}>
                  Formas de Pagamento
                </Styled.Link>

                <Styled.Link $link="4" onClick={handleLoggingOut}>
                  Sair da Conta
                </Styled.Link>
              </Styled.Nav>
            </Styled.ContainerNav>
          </Styled.ContainerNavMainUser>
        )}
      </Styled.ContainerMainNameUserAndService>
    </Styled.ContainerFirst>
  );
};

export default TopPartCheckout;
