import '@testing-library/jest-dom';
import Login from './Login';
import { RenderTheme } from '../../Style/RenderTheme';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {
  test('should render Login', () => {
    RenderTheme(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    // const h1 = screen.getByRole('heading', { name: 'Entrar com uma Rede Social' });
    // expect(h1).toBeInTheDocument();

    // expect(container).toMatchSnapshot();
  });
});
