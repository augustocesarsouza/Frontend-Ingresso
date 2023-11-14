import { render, screen } from '@testing-library/react';
import Cep from './Cep';

describe('Cep', () => {
  test('should render span input button', () => {
    const fn = jest.fn();
    const { container } = render(<Cep setUseLocationData={fn} />);

    const span = screen.getByText('CEP');
    expect(span).toBeInTheDocument();

    const input = container.querySelector('#input-cep');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'OK' });
    expect(button).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render click', () => {
    const fn = jest.fn();
    const { container } = render(<Cep setUseLocationData={fn} />);

    const button = screen.getByRole('button', { name: 'OK' });
  });
});
