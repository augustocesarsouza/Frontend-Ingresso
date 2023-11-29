import { render, screen } from '@testing-library/react';
import ContinuationFormReq from './ContinuationFormReq';

describe('ContinuationFormReq', () => {
  test('should', () => {
    const fn = jest.fn();
    render(<ContinuationFormReq setClickEnter={fn} />);

    const span1 = screen.getByText('Mantenha-me conhectado');
    expect(span1).toBeInTheDocument();
    const span2 = screen.getByText('Esqueceu a senha?');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Perdeu acesso ao e-mail cadastrado?');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('Siga o passo a passo');
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText(
      'Este site é protegido pelo reCAPTCHA e pelo Google aplicando as seguintes'
    );
    expect(span5).toBeInTheDocument();

    const span6 = screen.getByText('Políticas de Segurança');
    expect(span6).toBeInTheDocument();

    const span7 = screen.getByText('Termos de Serviço.');
    expect(span7).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Entrar' });
    expect(button).toBeInTheDocument();

    expect.assertions(8);
  });
});
