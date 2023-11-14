import { render, screen } from '@testing-library/react';
import YourNameAndCpf from './YourNameAndCpf';

describe('YourNameAndCpf', () => {
  test('should render input Your Name', () => {
    const { container } = render(<YourNameAndCpf />);

    const spanElement = container.querySelector('#input-your-name');
    expect(spanElement).toBeInTheDocument();
  });

  test('should render input Cpf', () => {
    const { container } = render(<YourNameAndCpf />);

    const spanElement = container.querySelector('#input-cpf');
    expect(spanElement).toBeInTheDocument();
  });

  test('should render span your name', () => {
    render(<YourNameAndCpf />);

    const spanElement = screen.getByText('*Como quer ser chamado');
    expect(spanElement).toBeInTheDocument();
  });

  test('should render span CPF', () => {
    render(<YourNameAndCpf />);

    const spanElement = screen.getByText('*CPF');
    expect(spanElement).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { container } = render(<YourNameAndCpf />);

    expect(container).toMatchSnapshot();
  });
});
