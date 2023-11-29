import { screen } from '@testing-library/react';
import InfoLoggedUser from './InfoLoggedUser';
import { RenderTheme } from '../../../Style/RenderTheme';

describe('InfoLoggedUser', () => {
  test('should render svgUser and span "Entre ou Cadastre-se"', () => {
    const jn = jest.fn();
    const jn2 = jest.fn();
    const { container } = RenderTheme(
      <InfoLoggedUser userName="" handleClickUserName={jn} handleEnterOrRegister={jn2} />
    );

    const svgUser = container.querySelector('.user-logo-svg');
    expect(svgUser).toBeInTheDocument();

    const spanEnterOrRegister = screen.getByText('Entre ou Cadastre-se');
    expect(spanEnterOrRegister).toBeInTheDocument();
  });

  test('should render SPAN with name user, And SPAN "Meus pedidos"', () => {
    const jn = jest.fn();
    const jn2 = jest.fn();
    const userName = 'Augusto';
    RenderTheme(
      <InfoLoggedUser userName={userName} handleClickUserName={jn} handleEnterOrRegister={jn2} />
    );

    const spanEnterOrRegister = screen.getByText(`Olá, ${userName}`);
    expect(spanEnterOrRegister).toBeInTheDocument();

    const spanMyOrders = screen.getByText('Meus pedidos');
    expect(spanMyOrders).toBeInTheDocument();
  });
});
