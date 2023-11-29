import { render, screen } from '@testing-library/react';
import ConfirmCodeEmail from './ConfirmCodeEmail';

describe('ConfirmCodeEmail', () => {
  test('should render svg, h1, p, span, button', () => {
    const fn = jest.fn();

    const { container } = render(
      <ConfirmCodeEmail
        confirmCodeEmail={true}
        valueInputCode=""
        resentCode={false}
        handleEnter={fn}
        handleResendCode={fn}
        setConfirmCodeEmail={fn}
        setValueInputCode={fn}
      />
    );

    const svgExit = container.querySelector('.exit-svg');
    expect(svgExit).toBeInTheDocument();

    const imgPadlock = container.querySelector('.padlock');
    expect(imgPadlock).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1700220840/CADEADO_dytgfd.png'
    );

    const h1Text = screen.getByText('Verifique seu login');
    expect(h1Text).toBeInTheDocument();

    const p1Text = screen.getByText(
      'Enviamos um código de confirmação para seu e-mail cadastrado. Digite-o abaixo e clique em Entrar'
    );
    expect(p1Text).toBeInTheDocument();

    const svgPadlock = container.querySelector('.svg-padlock');
    expect(svgPadlock).toBeInTheDocument();

    const span1Text = screen.getByText('Código enviado por e-mail');
    expect(span1Text).toBeInTheDocument();

    const inputCode = container.querySelector('#input-code');
    expect(inputCode).toBeInTheDocument();

    const p2Text = screen.getByText(
      'Caso não encontre o e-mail, verifique a sua caixa de Spam ou aba Promoções'
    );
    expect(p2Text).toBeInTheDocument();

    const containerNotReceived = container.querySelector('.container-not-received-email');
    const svgReload = containerNotReceived.firstChild as SVGElement;
    expect(svgReload).toBeInTheDocument();

    const span2Text = screen.getByText('Não recebeu o e-mail?');
    expect(span2Text).toBeInTheDocument();

    const span3Text = screen.getByText('Enviar novamente');
    expect(span3Text).toBeInTheDocument();

    const buttonCancel = screen.getByRole('button', { name: 'CANCELAR' });
    expect(buttonCancel).toBeInTheDocument();

    const buttonEnter = screen.getByRole('button', { name: 'ENTRAR' });
    expect(buttonEnter).toBeInTheDocument();

    expect.assertions(13);
  });

  test('should render span code resent', () => {
    const fn = jest.fn();

    render(
      <ConfirmCodeEmail
        confirmCodeEmail={true}
        valueInputCode=""
        resentCode={true}
        handleEnter={fn}
        handleResendCode={fn}
        setConfirmCodeEmail={fn}
        setValueInputCode={fn}
      />
    );

    const span4Text = screen.getByText('Codigo reenviado Com sucesso');
    expect(span4Text).toBeInTheDocument();

    expect.assertions(1);
  });
});
