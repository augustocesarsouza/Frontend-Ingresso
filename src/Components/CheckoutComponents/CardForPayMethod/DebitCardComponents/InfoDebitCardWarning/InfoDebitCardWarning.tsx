import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import SvgC9 from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgC9';
import SvgNuBank from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgNuBank';
import SvgItau from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgItau';
import Bradesco from '../../../../PaymentMethodsComponents/SvgCardDebit/Bradesco';
import SvgNext from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgNext';
import SvgSantander from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgSantander';
import SvgBancoDoBrasil from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgBancoDoBrasil';
import SvgInter from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgInter';
import SvgCaixaBanco from '../../../../PaymentMethodsComponents/SvgCardDebit/SvgCaixaBanco';

const InfoDebitCardWarning = () => {
  return (
    <Styled.ContainerWarningAboutDebitCard>
      <Styled.WrapperWarningAndSvg>
        <Styled.WrapperSvg>
          <FontAwesomeIcon icon={faExclamation} />
        </Styled.WrapperSvg>
        <Styled.Span $span="1">
          Alguns bancos requerem um cartão de <Styled.Span $span="2">Débito virtual</Styled.Span>
          .Verifique se o seu é um deles.
        </Styled.Span>
      </Styled.WrapperWarningAndSvg>
      <Styled.WrapperSpanBeAware>
        <Styled.Span $span="3">
          Fique atento: <Styled.Span $span="5">Só aceitamos os cartões</Styled.Span> dos bancos
          listados <Styled.Span $span="5">abaixo</Styled.Span>. Caso o seu não seja aceito, escolha
          outra forma de pagamento!
        </Styled.Span>

        <Styled.Span $span="4">
          <Styled.Span $span="5">Cartões aceitos para</Styled.Span> o pagamento em{' '}
          <Styled.Span $span="5">débito</Styled.Span>:
        </Styled.Span>
      </Styled.WrapperSpanBeAware>

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

      <Styled.Span $span="6">Em breve outros bancos!</Styled.Span>
    </Styled.ContainerWarningAboutDebitCard>
  );
};

export default InfoDebitCardWarning;
