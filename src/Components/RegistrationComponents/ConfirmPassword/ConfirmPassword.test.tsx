import { render, screen } from '@testing-library/react';
import ConfirmPassword from './ConfirmPassword';

describe('ConfirmPassword', () => {
  test('should render changeNameUserOrAnyDataForm=true', () => {
    const fn = jest.fn();

    const { container } = render(
      <ConfirmPassword
        changeNameUserOrAnyDataForm={true}
        senhaInvalida={true}
        setSenhaInvalida={fn}
        setPasswordConfirm={fn}
      />
    );

    const h1 = screen.getByRole('heading', { name: 'CONFIRME SUA SENHA' });
    expect(h1).toBeInTheDocument();

    const p = screen.getByText(
      'Por questões de segurança, você precisa digitar sua senha para confirmar as alterações feitas no seu cadastro.'
    );
    expect(p).toBeInTheDocument();

    const span = screen.getByText('*Senha');
    expect(span).toBeInTheDocument();

    const inputPassword = container.querySelector('#input-your-password');
    expect(inputPassword).toBeInTheDocument();

    const spanRequired = screen.getByText('A senha é obrigatória');
    expect(spanRequired).toBeInTheDocument();

    expect.assertions(5);
  });

  test('should not render info changeNameUserOrAnyDataForm=false', () => {
    const fn = jest.fn();

    render(
      <ConfirmPassword
        changeNameUserOrAnyDataForm={false}
        senhaInvalida={true}
        setSenhaInvalida={fn}
        setPasswordConfirm={fn}
      />
    );

    expect.assertions(0);
  });
});
