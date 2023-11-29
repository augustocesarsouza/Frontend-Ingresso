import { render, screen } from '@testing-library/react';
import AdditionalMessages from './AdditionalMessages';

describe('AdditionalMessages', () => {
  test('should render p span', () => {
    const fn = jest.fn();
    render(
      <AdditionalMessages
        changeOrNot={false}
        senhaInvalida={false}
        nameUserChangeBoolean={false}
        setSenhaInvalida={fn}
        recaptchaCallback={fn}
        setPasswordConfirm={fn}
      />
    );

    const span1 = screen.getByText('Quero receber novidades e mensagens da Ingresso.com.');
    expect(span1).toBeInTheDocument();

    const p1 = screen.getByText('O uso de nosso site e aplicativo é regulado por nossos');
    expect(p1).toBeInTheDocument();

    const span3 = screen.getByText('Termos de Uso.');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(
      'Maiores informações sobre como usamos seus dados pessoais podem ser encontradas em nossa'
    );
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText('Política de Privacidade');
    expect(span5).toBeInTheDocument();

    const span7 = screen.getByText('Política de Cookies.');
    expect(span7).toBeInTheDocument();

    const p2 = screen.getByText('Deseja excluir sua conta? Siga os');
    expect(p2).toBeInTheDocument();

    const span8 = screen.getByText('passos a seguir.');
    expect(span8).toBeInTheDocument();

    const p3 = screen.getByText(
      'Este site é protegido pelo reCAPTCHA e pelo Google aplicando as seguintes'
    );
    expect(p3).toBeInTheDocument();

    const span9 = screen.getByText('Políticas de Segurança');
    expect(span9).toBeInTheDocument();

    const span10 = screen.getByText('Termos de Serviço.');
    expect(span10).toBeInTheDocument();

    expect.assertions(11);
  });
});
