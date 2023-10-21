import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login', () => {
  test('should render Login', () => {
    const { container } = render(<Login />);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
