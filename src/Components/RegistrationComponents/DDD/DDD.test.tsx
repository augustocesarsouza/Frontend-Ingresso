import { render, screen } from '@testing-library/react';
import DDD from './DDD';

describe('DDD', () => {
  test('should render input and span', () => {
    const fn = jest.fn();
    const { container } = render(<DDD setDDDInfo={fn} dd="" dddInfo="" setDD={fn} />);

    const input = container.querySelector('#input-ddd');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('DDD');
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });
});
