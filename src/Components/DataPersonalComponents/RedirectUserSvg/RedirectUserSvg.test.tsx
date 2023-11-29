import { render, screen } from '@testing-library/react';
import RedirectUserSvg from './RedirectUserSvg';
import TicketSvg from '../../../Svg/TicketSvg';

describe('RedirectUserSvg', () => {
  test('should render', () => {
    const active = false;
    const { container } = render(
      <RedirectUserSvg svg={<TicketSvg />} text={'Meus Pedidos'} svgActive={active} />
    );

    const svgTicked = container.querySelector('.ticket-svg');
    expect(svgTicked).toBeInTheDocument();

    const spanMyOrders = screen.getByText('Meus Pedidos');
    expect(spanMyOrders).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    expect.assertions(3);
  });

  test('should render', () => {
    const active = true;
    const { container } = render(
      <RedirectUserSvg svg={<TicketSvg />} text={'Meus Pedidos'} svgActive={active} />
    );

    expect(container).toMatchSnapshot();
  });
});
