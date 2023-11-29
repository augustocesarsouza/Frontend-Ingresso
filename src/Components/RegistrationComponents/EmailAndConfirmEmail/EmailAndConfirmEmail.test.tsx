import { render } from '@testing-library/react';
import EmailAndConfirmEmail from './EmailAndConfirmEmail';

describe('EmailAndConfirmEmail', () => {
  test('should render input email', () => {
    const fn = jest.fn();
    const { container } = render(
      <EmailAndConfirmEmail
        setValueOfEmail={fn}
        setValueOfEmailConfirm={fn}
        setVerifyFields={fn}
        verifyFields={false}
      />
    );

    const spanElement = container.querySelector('#input-email');
    expect(spanElement).toBeInTheDocument();
  });
  EmailAndConfirmEmail;

  test('should render input confirm email', () => {
    const fn = jest.fn();
    const { container } = render(
      <EmailAndConfirmEmail
        setValueOfEmail={fn}
        setValueOfEmailConfirm={fn}
        setVerifyFields={fn}
        verifyFields={false}
      />
    );

    const spanElement = container.querySelector('#input-confirm-email');
    expect(spanElement).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <EmailAndConfirmEmail
        setValueOfEmail={fn}
        setValueOfEmailConfirm={fn}
        setVerifyFields={fn}
        verifyFields={false}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
