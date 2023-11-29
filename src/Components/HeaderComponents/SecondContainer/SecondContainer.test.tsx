import { screen } from '@testing-library/react';
import SecondContainer from './SecondContainer';
import { RenderTheme } from '../../../Style/RenderTheme';
import { MemoryRouter } from 'react-router-dom';
import { ContextHome } from '../../../Templates/Home/Home';

describe('SecondContainer', () => {
  let userObj = {
    id: '59a889f9-2695-45bf-b846-2b207e1b5539',
    name: 'Augusto',
    email: 'augustocesarsantana90@gmail.com',
  };

  const setUserObj = null;

  test('should have justify-content: flex-end', () => {
    RenderTheme(
      <MemoryRouter>
        <ContextHome.Provider value={{ userObj, setUserObj }}>
          <SecondContainer />
        </ContextHome.Provider>
      </MemoryRouter>
    );

    const containerLocation = screen.getByTestId('container-loupe').parentElement;

    expect(containerLocation).toHaveStyle({
      'justify-content': 'flex-end',
    });
  });

  test('should render svg Loupe', () => {
    RenderTheme(
      <MemoryRouter>
        <ContextHome.Provider value={{ userObj, setUserObj }}>
          <SecondContainer />
        </ContextHome.Provider>
      </MemoryRouter>
    );

    const containerLocation = screen.getByTestId('container-loupe');
    const svgLoupe = containerLocation.firstChild as SVGElement;

    expect(svgLoupe).toBeInTheDocument();
  });

  test('should render svg questionMarkSvg', () => {
    RenderTheme(
      <MemoryRouter>
        <ContextHome.Provider value={{ userObj, setUserObj }}>
          <SecondContainer />
        </ContextHome.Provider>
      </MemoryRouter>
    );

    const containerQuestionMark = screen.getByTestId('container-question-mark');
    const svgQuestionMark = containerQuestionMark.firstChild as SVGElement;

    expect(svgQuestionMark).toBeInTheDocument();
  });

  test('should matchSnapshot', () => {
    const { container } = RenderTheme(
      <MemoryRouter>
        <ContextHome.Provider value={{ userObj, setUserObj }}>
          <SecondContainer />
        </ContextHome.Provider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    //Se mecher no codigo na logica de negocio atualizar com "npx jest --updateSnapshot"
  });
});
