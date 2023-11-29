import { render, screen } from '@testing-library/react';
import ComponentReusable from './ComponentReusable';

describe('ComponentReusable', () => {
  test('should render', () => {
    const text = 'Logradouro';
    const width = '50';
    const inputData = 'Rua Cajazeira';
    const fn = jest.fn();

    const { container } = render(
      <ComponentReusable
        text={text}
        width={width}
        inputData={inputData}
        setStateDado={fn}
        whatComponentImRendering=""
        valueInfoUser=""
      />
    );

    const span = screen.getByText('Logradouro');
    expect(span).toBeInTheDocument();

    const input = container.querySelector('#input-logradouro');
    expect(input).toBeInTheDocument();

    const containerWarning = container.querySelector('#container-warning');
    expect(containerWarning).toHaveStyle({
      width: `${width}%`,
    });

    expect(input).toHaveValue(inputData);

    expect.assertions(4);
  });
});
