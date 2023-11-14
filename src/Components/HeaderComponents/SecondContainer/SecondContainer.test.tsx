import { screen } from '@testing-library/react';
import SecondContainer from './SecondContainer';
import { RenderTheme } from '../../../Style/RenderTheme';
import { MemoryRouter } from 'react-router-dom';

describe('SecondContainer', () => {
  test('should have justify-content: flex-end', () => {
    RenderTheme(
      <MemoryRouter>
        <SecondContainer />
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
        <SecondContainer />
      </MemoryRouter>
    );

    const containerLocation = screen.getByTestId('container-loupe');
    const svgLoupe = containerLocation.firstChild as SVGElement;

    expect(svgLoupe).toBeInTheDocument();
  });

  test('should render svg UserLogo', () => {
    RenderTheme(
      <MemoryRouter>
        <SecondContainer />
      </MemoryRouter>
    );

    const containerLocation = screen.getByTestId('container-user-logo');
    const svgUserLogo = containerLocation.firstChild as SVGElement;

    expect(svgUserLogo).toBeInTheDocument();
  });

  test('should render span register or login', () => {
    RenderTheme(
      <MemoryRouter>
        <SecondContainer />
      </MemoryRouter>
    );

    const spanRegister = screen.getByTestId('span-entry-register');

    expect(spanRegister).toBeInTheDocument();
  });

  test('should render svg questionMarkSvg', () => {
    RenderTheme(
      <MemoryRouter>
        <SecondContainer />
      </MemoryRouter>
    );

    const containerQuestionMark = screen.getByTestId('container-question-mark');
    const svgQuestionMark = containerQuestionMark.firstChild as SVGElement;

    expect(svgQuestionMark).toBeInTheDocument();
  });

  test('should matchSnapshot', () => {
    const { container } = RenderTheme(
      <MemoryRouter>
        <SecondContainer />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    //Se mecher no codigo na logica de negocio atualizar com "npx jest --updateSnapshot"
  });
});
