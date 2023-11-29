import { render, screen } from '@testing-library/react';
import H1AndPComp from './H1AndPComp';
import { ContextMyOrders } from '../../../Templates/SettingsAccount/SettingsAccount';
import { MemoryRouter } from 'react-router-dom';

describe('H1AndPComp', () => {
  let userObj = {
    id: '59a889f9-2695-45bf-b846-2b207e1b5539',
    name: 'Augusto',
    email: 'augustocesarsantana90@gmail.com',
  };

  const setUserObj = null;

  test('should render h1, linkExit, spanBack, aBackHomePage', () => {
    render(
      <MemoryRouter>
        <ContextMyOrders.Provider value={{ userObj, setUserObj }}>
          <H1AndPComp />
        </ContextMyOrders.Provider>
      </MemoryRouter>
    );

    const h1 = screen.getByRole('heading', {
      name: `Olá, ${userObj.name}. Bem-vindo à sua conta :)`,
    });
    expect(h1).toBeInTheDocument();

    const aExit = screen.getByText('sair da conta');
    expect(aExit).toBeInTheDocument();

    const spanBack = screen.getByText('voltar para a');
    expect(spanBack).toBeInTheDocument();

    const aBackHomePage = screen.getByText('voltar para a');
    expect(aBackHomePage).toBeInTheDocument();

    expect.assertions(4);

    // <ContextHome.Provider value={{ userObj, setUserObj }}>
    //       <SecondContainer />
    //     </ContextHome.Provider>
  });
});
