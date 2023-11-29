import { useNavigate } from 'react-router-dom';
import IngressoSvg from '../../../Svg/IngressoSvg';
import QuestionMark from '../../../Svg/QuestionMark';
import UserSvg from '../../../Svg/UserSvg';
import * as Styled from './styled';
import { ObjUser } from '../../../Templates/SettingsAccount/SettingsAccount';
import { useEffect, useState } from 'react';

interface ImgIngressoNameUserServiceProps {
  userObj: ObjUser;
}

const ImgIngressoNameUserService = ({ userObj }: ImgIngressoNameUserServiceProps) => {
  const nav = useNavigate();

  const handleRedirect = () => {
    nav('/', { state: { user: userObj } });
  };

  const [userNameLogged, setUserNameLogged] = useState('');

  useEffect(() => {
    if (userObj === null) return;
    const { name } = userObj;

    setUserNameLogged(name);
  }, [userObj]);

  return (
    <Styled.ContainerFirst>
      <Styled.WrapperSvgIngresso onClick={handleRedirect}>
        <IngressoSvg />
      </Styled.WrapperSvgIngresso>
      <Styled.ContainerMainNameUserAndService>
        <Styled.ContainerInfoUser>
          <Styled.Span>
            {`Olá,${
              userNameLogged.length > 0 &&
              userNameLogged[0].toUpperCase() + userNameLogged.slice(1, userNameLogged.length)
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

export default ImgIngressoNameUserService;
