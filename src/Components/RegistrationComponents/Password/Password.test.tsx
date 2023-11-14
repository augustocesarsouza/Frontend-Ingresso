import { render, screen } from '@testing-library/react';
import Password from './Password';

describe('Password', () => {
  test('should render input password', () => {
    const { container } = render(<Password />);

    const spanPassword = container.querySelector('#input-password');
    expect(spanPassword).toBeInTheDocument();
  });

  test('should render input password', () => {
    render(<Password />);

    const spanPassword = screen.getByText('*Senha');
    expect(spanPassword).toBeInTheDocument();
  });
});
