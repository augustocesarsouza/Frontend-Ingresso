import CardSvg from '../../../../Svg/CardSvg';
import HeartSvg from '../../../../Svg/HeartSvg';
import TicketSvg from '../../../../Svg/TicketSvg';
import WithdrawSvg from '../../../../Svg/WithdrawSvg';
import BenefitsBeUserCompo from '../../BenefitsBeUserCompo/BenefitsBeUserCompo';
import Button from '../Button/Button';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const BenefitsBeUser = () => {
  const nav = useNavigate();

  const handleCreateNewAccount = () => {
    nav('/minha-conta/cadastro');
  };

  return (
    <>
      <Styled.ContainerCreateNewAccount>
        <Styled.p>Vantagens de ser um cliente Ingresso.com</Styled.p>
      </Styled.ContainerCreateNewAccount>
      <Styled.ContainerBenefitsBeUser>
        <BenefitsBeUserCompo svg={<CardSvg />} text={'Salvar Cartões'} />
        <BenefitsBeUserCompo svg={<TicketSvg />} text={'Comprar rapido'} />
        <BenefitsBeUserCompo svg={<HeartSvg />} text={'Favoritar cinemas'} />
        <BenefitsBeUserCompo svg={<WithdrawSvg />} text={'Retirar pelo App'} />
      </Styled.ContainerBenefitsBeUser>
      <Styled.WrapperButton>
        <Button func={handleCreateNewAccount} text="CRIAR UMA NOVA CONTA" />
      </Styled.WrapperButton>
    </>
  );
};

export default BenefitsBeUser;
