import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { RenderTheme } from '../../Style/RenderTheme';

describe('Login', () => {
  test('should render Login', () => {
    const { container } = RenderTheme(<Login />);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
