import { render, screen } from '@testing-library/react';
import Phone from './Phone';

describe('Phone', () => {
  test('should render input and span', () => {
    const fn = jest.fn();
    Phone;
    const { container } = render(<Phone setPhoneInfo={fn} setNumber={fn} number="" phoneInfo="" />);

    const input = container.querySelector('#input-phone');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Telefone 1');
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });
});
