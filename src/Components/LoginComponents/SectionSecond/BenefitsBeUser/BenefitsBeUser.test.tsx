import { render, screen } from '@testing-library/react';
import BenefitsBeUser from './BenefitsBeUser';
import { MemoryRouter } from 'react-router-dom';

describe('BenefitsBeUser', () => {
  test('should render all svg and span SVGs', () => {
    const { container } = render(
      <MemoryRouter>
        <BenefitsBeUser />
      </MemoryRouter>
    );

    const p = screen.getByText('Vantagens de ser um cliente Ingresso.com');
    expect(p).toBeInTheDocument();

    const svgCard = container.querySelector('.card-svg');
    expect(svgCard).toBeInTheDocument();

    const spanCard = screen.getByText('Salvar Cartões');
    expect(spanCard).toBeInTheDocument();

    const svgTicket = container.querySelector('.ticket-svg');
    expect(svgTicket).toBeInTheDocument();

    const spanTicket = screen.getByText('Comprar rapido');
    expect(spanTicket).toBeInTheDocument();

    const svgHeart = container.querySelector('.heart-svg');
    expect(svgHeart).toBeInTheDocument();

    const spanHeart = screen.getByText('Favoritar cinemas');
    expect(spanHeart).toBeInTheDocument();

    const svgWithdraw = container.querySelector('.withdraw-svg');
    expect(svgWithdraw).toBeInTheDocument();

    const spanWithdraw = screen.getByText('Retirar pelo App');
    expect(spanWithdraw).toBeInTheDocument();

    expect.assertions(9);
  });

  test('should render button', () => {
    render(
      <MemoryRouter>
        <BenefitsBeUser />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'CRIAR UMA NOVA CONTA' });
    expect(button).toBeInTheDocument();
    expect.assertions(1);
    // fireEvent.click(button);
  });
});
