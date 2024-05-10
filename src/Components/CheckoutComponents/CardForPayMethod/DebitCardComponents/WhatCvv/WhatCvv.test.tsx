import { render, screen } from '@testing-library/react';
import WhatCvv from './WhatCvv';

describe('WhatCvv', () => {
  test('should render, all span', () => {
    render(<WhatCvv />);

    const span1 = screen.getByText('O que é CVV?');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Para saber mais sobre a forma de pagamento débito acesse as');
    expect(span2).toBeInTheDocument();

    const link = screen.getByText('Políticas de Pagamento.');
    expect(link).toBeInTheDocument();

    expect.assertions(3);
  });
});
