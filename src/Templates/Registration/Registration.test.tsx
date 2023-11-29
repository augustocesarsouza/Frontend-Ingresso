import { render } from '@testing-library/react';
import Registration from './Registration';
import { RenderTheme } from '../../Style/RenderTheme';
import { MemoryRouter } from 'react-router-dom';

describe('Registration', () => {
  test('Should render svg Ingresso', () => {
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>
    );
  });

  test('should matchSnapshot', () => {
    const { container } = RenderTheme(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    //Se mecher no codigo na logica de negocio atualizar com "npx jest --updateSnapshot"
  });
});
