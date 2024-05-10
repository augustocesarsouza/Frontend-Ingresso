import { render, screen } from '@testing-library/react';
import YourNameAndCpf from './YourNameAndCpf';

describe('YourNameAndCpf', () => {
  let verifyFields = false;
  let fn = jest.fn();

  test('should render input Your Name', () => {
    const { container } = render(
      <YourNameAndCpf
        verifyFields={verifyFields}
        setVerifyFields={fn}
        setValueOfName={fn}
        setValueOfCpf={fn}
      />
    );

    const spanElement = container.querySelector('#input-your-name');
    expect(spanElement).toBeInTheDocument();
  });

  test('should render input Cpf', () => {
    const { container } = render(
      <YourNameAndCpf
        verifyFields={verifyFields}
        setVerifyFields={fn}
        setValueOfName={fn}
        setValueOfCpf={fn}
      />
    );

    const spanElement = container.querySelector('#input-cpf');
    expect(spanElement).toBeInTheDocument();
  });

  test('should render span your name', () => {
    render(
      <YourNameAndCpf
        verifyFields={verifyFields}
        setVerifyFields={fn}
        setValueOfName={fn}
        setValueOfCpf={fn}
      />
    );

    const spanElement = screen.getByText('*Como quer ser chamado');
    expect(spanElement).toBeInTheDocument();
  });

  test('should render span CPF', () => {
    render(
      <YourNameAndCpf
        verifyFields={verifyFields}
        setVerifyFields={fn}
        setValueOfName={fn}
        setValueOfCpf={fn}
      />
    );

    const spanElement = screen.getByText('*CPF');
    expect(spanElement).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { container } = render(
      <YourNameAndCpf
        verifyFields={verifyFields}
        setVerifyFields={fn}
        setValueOfName={fn}
        setValueOfCpf={fn}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
