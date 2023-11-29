import SvgAmericanExpress from '../SvgCardCredit/SvgAmericanExpress';
import SvgAura from '../SvgCardCredit/SvgAura';
import SvgElo from '../SvgCardCredit/SvgElo';
import SvgHipercard from '../SvgCardCredit/SvgHipercard';
import SvgMasterCard from '../SvgCardCredit/SvgMasterCard';
import SvgVisa from '../SvgCardCredit/SvgVisa';
import Bradesco from '../SvgCardDebit/Bradesco';
import SvgBancoDoBrasil from '../SvgCardDebit/SvgBancoDoBrasil';
import SvgC9 from '../SvgCardDebit/SvgC9';
import SvgCaixaBanco from '../SvgCardDebit/SvgCaixaBanco';
import SvgInter from '../SvgCardDebit/SvgInter';
import SvgItau from '../SvgCardDebit/SvgItau';
import SvgNext from '../SvgCardDebit/SvgNext';
import SvgNuBank from '../SvgCardDebit/SvgNuBank';
import SvgSantander from '../SvgCardDebit/SvgSantander';
import SvgPayApple from '../SvgDigitalWallets/SvgPayApple';
import SvgPayGoogle from '../SvgDigitalWallets/SvgPayGoogle';
import * as Styled from './styled';

const CardCreditAndDebit = () => {
  return (
    <Styled.ContainerCardCreditDebit>
      <Styled.H1>Você pode pagar com os seus cartões de crédito ou via Paypal</Styled.H1>
      <Styled.ContainerCreditMain>
        <Styled.H2>Crédito</Styled.H2>
        <Styled.ContainerCredit>
          <SvgVisa />
          <SvgMasterCard />
          <SvgAura />
          <SvgAmericanExpress />
          <SvgElo />
          <SvgHipercard />
        </Styled.ContainerCredit>
      </Styled.ContainerCreditMain>
      <Styled.ContainerDebitMain>
        <Styled.H2>Débito</Styled.H2>
        <Styled.ContainerDebit>
          <SvgC9 />
          <SvgNuBank />
          <SvgItau />
          <Bradesco />
          <SvgNext />
          <SvgSantander />
          <SvgBancoDoBrasil />
          <SvgInter />
          <SvgCaixaBanco />
        </Styled.ContainerDebit>
      </Styled.ContainerDebitMain>
      <Styled.ContainerDigitalWalletsMain>
        <Styled.H2>Carteiras Digitais</Styled.H2>
        <Styled.ContainerDigitalWallets>
          <SvgPayApple />
          <SvgPayGoogle />
        </Styled.ContainerDigitalWallets>
      </Styled.ContainerDigitalWalletsMain>
    </Styled.ContainerCardCreditDebit>
  );
};

export default CardCreditAndDebit;
