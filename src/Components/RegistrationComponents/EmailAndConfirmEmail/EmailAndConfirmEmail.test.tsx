import { render } from '@testing-library/react';
import EmailAndConfirmEmail from './EmailAndConfirmEmail';

describe('EmailAndConfirmEmail', () => {
  test('should render input email', () => {
    const { container } = render(<EmailAndConfirmEmail />);

    const spanElement = container.querySelector('#input-email');
    expect(spanElement).toBeInTheDocument();
  });
  EmailAndConfirmEmail;

  test('should render input confirm email', () => {
    const { container } = render(<EmailAndConfirmEmail />);

    const spanElement = container.querySelector('#input-confirm-email');
    expect(spanElement).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { container } = render(<EmailAndConfirmEmail />);

    expect(container).toMatchSnapshot();
  });
});
