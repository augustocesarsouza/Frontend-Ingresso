import { render, screen } from '@testing-library/react';
import InputCpfEmail from './InputCpfEmail';

describe('InputCpfEmail', () => {
  test('should render svgUser, spanCpfOrEmail, inputCpfOrEmail', () => {
    const { container } = render(<InputCpfEmail refInputEmail={null} />);

    const svgUser = container.querySelector('.svg-user');
    expect(svgUser).toBeInTheDocument();

    const spanCpfOrEmail = screen.getByText('Digite seu CPF ou E-mail');
    expect(spanCpfOrEmail).toBeInTheDocument();

    const inputCpfOrEmail = container.querySelector('#input-cpf-email');
    expect(inputCpfOrEmail).toBeInTheDocument();

    expect.assertions(3);
  });
});
