import * as Styled from './styled';
import IngressoTopBanner from '../../Components/IngressoTopBanner/IngressoTopBanner';
import LoginWithGoogle from '../../Components/LoginComponents/LoginWithGoogle/LoginWithGoogle';
import Header from '../../Components/LoginComponents/SectionFirst/Header/Header';
import Form from '../../Components/LoginComponents/SectionFirst/Form/Form';
import AddressCompany from '../../Components/AddressCompany/AddressCompany';
import BenefitsBeUser from '../../Components/LoginComponents/SectionSecond/BenefitsBeUser/BenefitsBeUser';

const Login = () => {
  return (
    <Styled.ContainerMain>
      <IngressoTopBanner />
      <Styled.ContainerInternal>
        <LoginWithGoogle />
        <Styled.ContainerLoginWithIngressoAndCreateNewAccount>
          <Styled.Section $section="1">
            <Header text="Entrar como cliente Ingresso.com" />
            <Form />
          </Styled.Section>
          <Styled.Section $section="2">
            <Header text="Criar nova conta" />
            <BenefitsBeUser />
          </Styled.Section>
        </Styled.ContainerLoginWithIngressoAndCreateNewAccount>
      </Styled.ContainerInternal>
      <AddressCompany />
    </Styled.ContainerMain>
  );
};

export default Login;
