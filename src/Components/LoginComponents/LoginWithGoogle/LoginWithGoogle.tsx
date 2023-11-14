import GoogleSvg from '../../../Svg/GoogleSvg';
import * as Styled from './styled';

const LoginWithGoogle = () => {
  return (
    <Styled.ContainerLoginWithGoogleMain>
      <Styled.ContainerLoginWithGoogle>
        <Styled.H1>Entrar com uma Rede Social</Styled.H1>
        <Styled.ContainerGoogle>
          <Styled.ContainerSvgGoogle>
            <GoogleSvg />
          </Styled.ContainerSvgGoogle>
          <Styled.Span>Entrar com o Google</Styled.Span>
        </Styled.ContainerGoogle>
      </Styled.ContainerLoginWithGoogle>
    </Styled.ContainerLoginWithGoogleMain>
  );
};

export default LoginWithGoogle;
