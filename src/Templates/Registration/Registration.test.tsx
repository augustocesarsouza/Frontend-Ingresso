import { render } from '@testing-library/react';
import Registration from './Registration';
import { RenderTheme } from '../../Style/RenderTheme';

describe('Registration', () => {
  test('Should render svg Ingresso', () => {
    render(<Registration />);
  });

  test('should matchSnapshot', () => {
    const { container } = RenderTheme(<Registration />);

    expect(container).toMatchSnapshot();
    //Se mecher no codigo na logica de negocio atualizar com "npx jest --updateSnapshot"
  });
});
