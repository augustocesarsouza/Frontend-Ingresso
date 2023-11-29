import { render, screen } from '@testing-library/react';
import InputPassword from './InputPassword';

describe('InputPassword', () => {
  test('should render svg span password, inputPassword ', () => {
    const { container } = render(<InputPassword refInputPassword={null} />);

    const svgPadlock = container.querySelector('.svg-padlock');
    expect(svgPadlock).toBeInTheDocument();

    const password = screen.getByText('Senha');
    expect(password).toBeInTheDocument();

    const inputPassword = container.querySelector('#input-password');
    expect(inputPassword).toBeInTheDocument();
    expect.assertions(3);
  });
});
