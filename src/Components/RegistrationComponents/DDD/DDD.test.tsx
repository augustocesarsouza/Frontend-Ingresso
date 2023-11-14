import { render, screen } from '@testing-library/react';
import DDD from './DDD';

describe('DDD', () => {
  test('should render input and span', () => {
    const { container } = render(<DDD />);

    const input = container.querySelector('#input-ddd');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('DDD');
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });
});
