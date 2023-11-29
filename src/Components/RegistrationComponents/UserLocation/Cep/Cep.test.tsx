import { render, screen } from '@testing-library/react';
import Cep from './Cep';

describe('Cep', () => {
  test('should render span input button', () => {
    const fn = jest.fn();
    const { container } = render(<Cep setUseLocationData={fn} setCep={fn} cepp="" />);

    const span = screen.getByText('CEP');
    expect(span).toBeInTheDocument();

    const input = container.querySelector('#input-cep');
    expect(input).toBeInTheDocument();

    expect.assertions(2);
  });
});
