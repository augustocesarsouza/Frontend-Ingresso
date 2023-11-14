import { screen } from '@testing-library/react';
import FirstContainer from './FirstContainer';
import { RenderTheme } from '../../../Style/RenderTheme';

describe('FirstContainer', () => {
  test('should render image', () => {
    RenderTheme(<FirstContainer />);

    const img = screen.getByAltText('img-logo-ingresso');

    expect(img).toBeInTheDocument();
  });

  test('should render image with correct src', () => {
    RenderTheme(<FirstContainer />);

    const img = screen.getByAltText('img-logo-ingresso');

    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1698064983/IngressoImg/ingressologoTrans_in34qn.png'
    );
  });

  test('should render svg LocationSvg', () => {
    RenderTheme(<FirstContainer />);

    const containerLocation = screen.getByTestId('container-location');
    const svgLocation = containerLocation.firstChild as SVGElement;

    expect(svgLocation).toBeInTheDocument();
  });

  test('should render pLocation', () => {
    RenderTheme(<FirstContainer />);

    const pLocation = screen.getByText('Exemplo');

    expect(pLocation).toBeInTheDocument();
  });

  test('should matchSnapshot', () => {
    const { container } = RenderTheme(<FirstContainer />);

    expect(container).toMatchSnapshot();
  });
});
