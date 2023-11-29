import { render, screen } from '@testing-library/react';
import EmailUserAndChangePassword from './EmailUserAndChangePassword';

describe('EmailUserAndChangePassword', () => {
  test('should render svgEmail, span email user, svgPadlock, link changePassword', () => {
    const email = 'augustocesarsantana90@gmail.com';
    const { container } = render(<EmailUserAndChangePassword emailUser={email} />);

    const emailSvg = container.querySelector('.svg-email');
    expect(emailSvg).toBeInTheDocument();

    const spanEmailUser = screen.getByText(email);
    expect(spanEmailUser).toBeInTheDocument();

    const padlockSvg = container.querySelector('.svg-padlock');
    expect(padlockSvg).toBeInTheDocument();

    const aLink = screen.getByText('Alterar senha');
    expect(aLink).toBeInTheDocument();

    expect.assertions(4);
  });
});
