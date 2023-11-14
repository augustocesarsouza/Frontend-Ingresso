import * as Styled from './styled';
import IngressoTopBanner from '../../Components/IngressoTopBanner/IngressoTopBanner';
import LoginWithGoogle from '../../Components/LoginComponents/LoginWithGoogle/LoginWithGoogle';
import Header from '../../Components/LoginComponents/SectionFirst/Header/Header';
import Form from '../../Components/LoginComponents/SectionFirst/Form/Form';
import AddressCompany from '../../Components/AddressCompany/AddressCompany';
import BenefitsBeUserCompo from '../../Components/LoginComponents/BenefitsBeUserCompo/BenefitsBeUserCompo';
import CardSvg from '../../Svg/CardSvg';
import TicketSvg from '../../Svg/TicketSvg';
import HeartSvg from '../../Svg/HeartSvg';
import WithdrawSvg from '../../Svg/WithdrawSvg';

const Login = () => {
  return (
    <Styled.ContainerMain>
      <IngressoTopBanner />
      <Styled.ContainerInternal>
        <LoginWithGoogle />
        <Styled.ContainerLoginWithIngressoAndCreateNewAccount>
          <Styled.Section $section="1">
            <Header />
            <Form />
          </Styled.Section>
          <Styled.Section $section="2">
            <Styled.Header>
              <Styled.H1>Criar nova conta</Styled.H1>
            </Styled.Header>
            <Styled.ContainerCreateNewAccount>
              <Styled.p>Vantagens de ser um cliente Ingresso.com</Styled.p>
            </Styled.ContainerCreateNewAccount>
            <Styled.ContainerBenefitsBeUser>
              <BenefitsBeUserCompo svg={<CardSvg />} text={'Salvar Cartões'} />
              <BenefitsBeUserCompo svg={<TicketSvg />} text={'Comprar rapido'} />
              <BenefitsBeUserCompo svg={<HeartSvg />} text={'Favoritar cinemas'} />
              <BenefitsBeUserCompo svg={<WithdrawSvg />} text={'Retirar pelo App'} />
            </Styled.ContainerBenefitsBeUser>
            <Styled.Button>CRIAR UMA NOVA CONTA</Styled.Button>
          </Styled.Section>
        </Styled.ContainerLoginWithIngressoAndCreateNewAccount>
      </Styled.ContainerInternal>
      <AddressCompany />
    </Styled.ContainerMain>
  );
};

export default Login;
