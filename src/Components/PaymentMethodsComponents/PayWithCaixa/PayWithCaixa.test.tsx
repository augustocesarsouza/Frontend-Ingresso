import { render, screen } from '@testing-library/react';
import PayWithCaixa from './PayWithCaixa';

describe('PayWithCaixa', () => {
  test('should render', () => {
    render(<PayWithCaixa />);
    // debug();

    const imgCaixa = screen.getByAltText('caixa-img');
    expect(imgCaixa).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701170158/caixa-positivo_rnlldm.png'
    );

    const p1 = screen.getByText('PAGUE COM O CARTÃO DE DÉBITO VIRTUAL CAIXA');

    const p2 = screen.getByText(
      'Antes de realizar a compra, é necessário gerar, gratuitamente, o seu'
    );
    const span1 = screen.getByText('cartão de débito virtual Caixa.');

    const p3 = screen.getByText('Acesse o Internet Banking, pelo site ou pelo App Caixa, na opção');
    const span2 = screen.getByText('"Cartões – Cartão de Débito Virtual".');

    const p4 = screen.getByText(
      'Insira o número completo, a validade e o código de segurança gerados.'
    );

    const p5 = screen.getByText(
      'Um novo código de segurança deverá ser gerado no Internet Banking, a cada compra, para maior segurança no uso dos serviços da Ingresso.com.'
    );

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
    expect(span1).toBeInTheDocument();
    expect(p3).toBeInTheDocument();
    expect(span2).toBeInTheDocument();
    expect(p4).toBeInTheDocument();
    expect(p5).toBeInTheDocument();
    expect.assertions(8);
  });
});
