import { render, screen } from '@testing-library/react';
import GooglePayBodyPart from './GooglePayBodyPart';

// interface GooglePayBodyPartProps {
//   clickLabel: string;
//   setEnterMouseInformed: React.Dispatch<React.SetStateAction<boolean>>;
// }

describe('GooglePayBodyPart', () => {
  test('should render', () => {
    const clickLabel = '3';
    const fn = jest.fn();

    render(<GooglePayBodyPart clickLabel={clickLabel} setEnterMouseInformed={fn} />);

    const span1 = screen.getByText(
      'Com o Google Pay é muito rápido e fácil de pagar. Ele reúne tudo que você precisa para finalizar sua compra, com as mesmas vantagens e benefícios de seus cartões físicos. E sua informação fica protegida em uma das infraestruturas de segurança mais avançadas do mundo.'
    );
    expect(span1).toBeInTheDocument();

    const aLink = screen.getByText('Saiba mais como usar Débito');
    expect(aLink).toBeInTheDocument();

    const span2 = screen.getByText('Prossiga clicando no botão Google Pay.');
    expect(span2).toBeInTheDocument();

    expect.assertions(3);
  });
});
