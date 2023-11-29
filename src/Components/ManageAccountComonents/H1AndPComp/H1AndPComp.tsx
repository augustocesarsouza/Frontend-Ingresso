import { useContext, useEffect, useState } from 'react';
import * as Styled from './styled';
import {
  ContextMyOrders,
  ContextMyOrdersProps,
} from '../../../Templates/SettingsAccount/SettingsAccount';
import { useNavigate } from 'react-router-dom';

const H1AndPComp = () => {
  const [userNameLogged, setUserNameLogged] = useState('');
  const nav = useNavigate();

  const useContextMyOrders = useContext<ContextMyOrdersProps | null>(ContextMyOrders);

  useEffect(() => {
    if (useContextMyOrders.userObj === null) return;
    const { name } = useContextMyOrders.userObj;

    setUserNameLogged(name);
  }, [useContextMyOrders.userObj]);

  const handleBackAccount = () => {
    nav('/');
  };

  const handleHomePage = () => {
    if (useContextMyOrders.userObj === null) return;
    nav('/', { state: { user: useContextMyOrders.userObj } });
  };

  return (
    <Styled.ContainerH1AndP>
      <Styled.H1>
        {`Olá, ${
          userNameLogged.length > 0 &&
          userNameLogged[0].toUpperCase() + userNameLogged.slice(1, userNameLogged.length)
        }. Bem-vindo à sua conta :)`}
      </Styled.H1>
      <Styled.p>
        <Styled.a onClick={handleBackAccount}>sair da conta</Styled.a>
      </Styled.p>
      <Styled.p>
        <Styled.SpanBackPage>voltar para a </Styled.SpanBackPage>
        <Styled.a onClick={handleHomePage}>páginal principal</Styled.a>
      </Styled.p>
    </Styled.ContainerH1AndP>
  );
};

export default H1AndPComp;
