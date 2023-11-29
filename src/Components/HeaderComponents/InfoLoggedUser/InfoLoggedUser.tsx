import UserLogoSvg from '../../../Svg/UserLogoSvg';
import * as Styled from './styled';

interface InfoLoggedUserProps {
  userName: string;
  handleEnterOrRegister: () => void;
  handleClickUserName: () => void;
}

const InfoLoggedUser = ({
  userName,
  handleEnterOrRegister,
  handleClickUserName,
}: InfoLoggedUserProps) => {
  return (
    <>
      <Styled.ContainerUserLogo onClick={handleEnterOrRegister}>
        <UserLogoSvg />
      </Styled.ContainerUserLogo>
      {userName.length > 0 ? (
        <Styled.ContainerName>
          <Styled.P onClick={handleClickUserName}>Olá, {userName}</Styled.P>
          <Styled.Span>Meus pedidos</Styled.Span>
        </Styled.ContainerName>
      ) : (
        <Styled.Span onClick={handleEnterOrRegister}>Entre ou Cadastre-se</Styled.Span>
      )}
    </>
  );
};

export default InfoLoggedUser;
