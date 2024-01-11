import { render, screen } from '@testing-library/react';
import BecauseSaveMyCard from './BecauseSaveMyCard';

describe('BecauseSaveMyCard', () => {
  test('should render, span', () => {
    const { container } = render(<BecauseSaveMyCard />);

    const svgCard = container.querySelector('.credit-card');
    expect(svgCard).toBeInTheDocument();

    const span1 = screen.getByText('Por que salvar meu cartão?');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('O que é CVV?');
    expect(span2).toBeInTheDocument();

    expect.assertions(3);
  });
});
