import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('should render H1 with due text', () => {
    render(<Header text="Entrar como cliente Ingresso.com" />);
    const h1 = screen.getByRole('heading', { name: 'Entrar como cliente Ingresso.com' });
    expect(h1).toBeInTheDocument();
  });
});
