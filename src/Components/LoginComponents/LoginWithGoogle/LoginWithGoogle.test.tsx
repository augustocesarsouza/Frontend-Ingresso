import { render, screen } from '@testing-library/react';
import LoginWithGoogle from './LoginWithGoogle';

describe('LoginWithGoogle.test', () => {
  test('should render header svgGoogle, and span', () => {
    const { container } = render(<LoginWithGoogle />);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();

    const svgGoogle = container.querySelector('.svg-google');
    expect(svgGoogle).toBeInTheDocument();

    const spanEnter = screen.getByText('Entrar com o Google');
    expect(spanEnter).toBeInTheDocument();

    expect(container).toMatchSnapshot();
    expect.assertions(4);
  });
});
