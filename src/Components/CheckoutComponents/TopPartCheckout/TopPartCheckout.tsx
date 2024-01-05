import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Styled from './styled';
import IngressoSvg from '../../../Svg/IngressoSvg';
import UserSvg from '../../../Svg/UserSvg';
import QuestionMark from '../../../Svg/QuestionMark';
import { User } from '../../../Templates/Checkout/Checkout';

interface TopPartCheckoutProps {
  user: User | null;
}

const TopPartCheckout = ({ user }: TopPartCheckoutProps) => {
  const handleRedirect = () => {
    // nav('/', { state: { user: userObj } });
  };

  const [userNameLogged, setUserNameLogged] = useState<User | null>(null);

  useEffect(() => {
    if (user === null) return;

    setUserNameLogged(user);
  }, [user]);

  return (
    <Styled.ContainerFirst>
      <Styled.WrapperSvgIngresso onClick={handleRedirect}>
        <IngressoSvg />
      </Styled.WrapperSvgIngresso>
      <Styled.ContainerMainNameUserAndService>
        <Styled.ContainerInfoUser>
          <Styled.Span>
            {`Olá,${
              userNameLogged !== null &&
              userNameLogged.name[0].toUpperCase() +
                userNameLogged.name.slice(1, userNameLogged.name.length)
            }`}
          </Styled.Span>
          <Styled.WrapperSvgUser $containeruser="1">
            <UserSvg />
          </Styled.WrapperSvgUser>
        </Styled.ContainerInfoUser>
        <Styled.ContainerInfoUser>
          <Styled.Span>Atendimento</Styled.Span>
          <Styled.WrapperSvgUser $containeruser="2">
            <QuestionMark />
          </Styled.WrapperSvgUser>
        </Styled.ContainerInfoUser>
      </Styled.ContainerMainNameUserAndService>
    </Styled.ContainerFirst>
  );
};

export default TopPartCheckout;
