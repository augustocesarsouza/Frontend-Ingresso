import { render, screen } from '@testing-library/react';
import ClubeUolSubscriber from './ClubeUolSubscriber';

describe('ClubeUolSubscriber', () => {
  test('should render, span, img, input, button', () => {
    render(<ClubeUolSubscriber />);

    const img = screen.getByAltText('clube-uol');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1703514340/logo_header_hksemr.png'
    );

    const span1 = screen.getByText(
      'Assinante UOL tem isenção de taxa de serviço em até 2 ingressos por mês.'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Saiba mais');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText(
      'Digite seu CPF ou CNPJ para consultar e aplicar o seu benefício. Caso esteja disponível, a isenção da taxa será automaticamente aplicada no valor da sua compra.'
    );
    expect(span3).toBeInTheDocument();

    const inputCpfCnpj = screen.getByPlaceholderText('Digite seu CPF ou CNPJ');
    expect(inputCpfCnpj).toBeInTheDocument();

    const buttonApply = screen.getByRole('button', { name: 'APLICAR' });
    expect(buttonApply).toBeInTheDocument();

    expect.assertions(6);
  });
});
