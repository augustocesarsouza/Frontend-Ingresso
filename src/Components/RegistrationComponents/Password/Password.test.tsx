import { render, screen } from '@testing-library/react';
import Password from './Password';

describe('Password', () => {
  let verifyFields = false;
  let fn = jest.fn();
  test('should render input password', () => {
    const { container } = render(
      <Password verifyFields={verifyFields} setVerifyFields={fn} setValueOfPassword={fn} />
    );

    const spanPassword = container.querySelector('#input-password');
    expect(spanPassword).toBeInTheDocument();
  });

  test('should render input password', () => {
    render(<Password verifyFields={verifyFields} setVerifyFields={fn} setValueOfPassword={fn} />);

    const spanPassword = screen.getByText('*Senha');
    expect(spanPassword).toBeInTheDocument();
  });
});
