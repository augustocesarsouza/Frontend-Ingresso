import { render, screen } from '@testing-library/react';
import AddressCompany from './AddressCompany';

describe('AddressCompany', () => {
  test('should render spans and paragraph', () => {
    render(<AddressCompany />);

    const span1 = screen.getByText(
      'Ingresso.com Ltda / CNPJ: 008606400001-71 / Endereço: Rua da Quitanda, 86 - 9º andar - Centro - Rio de Janeiro, RJ - 20091-902 /'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Atendimento ao cliente');
    expect(span2).toBeInTheDocument();

    const p = screen.getByText('© Copyright Ingresso.com - Todos os direitos reservados ®');
    expect(p).toBeInTheDocument();

    expect.assertions(3);
  });
});
