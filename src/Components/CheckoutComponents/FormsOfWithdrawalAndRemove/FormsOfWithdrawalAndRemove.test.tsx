import { render, screen } from '@testing-library/react';
import FormsOfWithdrawalAndRemove from './FormsOfWithdrawalAndRemove';

describe('FormsOfWithdrawalAndRemove', () => {
  test('should render svg span', () => {
    const { container } = render(<FormsOfWithdrawalAndRemove />);

    const svgWithdraw = container.querySelector('.withdraw-svg');
    expect(svgWithdraw).toBeInTheDocument();

    const span1 = screen.getByText('Formas de retirada');
    expect(span1).toBeInTheDocument();

    const svgTrash = container.querySelector('.svg-trash');
    expect(svgTrash).toBeInTheDocument();

    const span2 = screen.getByText('Remover');
    expect(span2).toBeInTheDocument();

    expect.assertions(4);
  });
});
