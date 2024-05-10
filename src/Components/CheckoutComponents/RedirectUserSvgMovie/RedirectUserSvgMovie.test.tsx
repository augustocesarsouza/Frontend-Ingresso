import { render, screen } from '@testing-library/react';
import RedirectUserSvgMovie from './RedirectUserSvgMovie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

describe('RedirectUserSvgMovie', () => {
  test('should render, choice of seats', () => {
    const seatJoinList = ['E 2', 'E 3'];
    const text = 'ESCOLHA DE ASSENTOS';

    const { container } = render(
      <RedirectUserSvgMovie
        svg={<FontAwesomeIcon icon={faCouch} />}
        text={text}
        seatJoinList={seatJoinList}
        stringFullTypeTicked={[]}
      />
    );

    const containerDiv = container.querySelector('.svg-any');
    const svgAny = containerDiv.firstChild as SVGAElement;
    expect(svgAny).toBeInTheDocument();

    const textP = screen.getByText(text);
    expect(textP).toBeInTheDocument();

    seatJoinList.forEach((sea, i) => {
      if (seatJoinList.length - 1 === i) {
        const span = screen.getByText(`${sea}`);
        expect(span).toBeInTheDocument();
      } else {
        const span = screen.getByText(`${sea},`);
        expect(span).toBeInTheDocument();
      }
    });

    expect.assertions(2 + seatJoinList.length);
  });

  test('should render, ticket types', () => {
    const seatJoinList = [];
    const text = 'TIPOS DE INGRESSOS';
    const stringFullTypeTicked = ['Meia Bradesco (1)', 'Meia (1)'];

    const { container } = render(
      <RedirectUserSvgMovie
        svg={<FontAwesomeIcon icon={faCouch} />}
        text={text}
        stringFullTypeTicked={stringFullTypeTicked}
        seatJoinList={seatJoinList}
      />
    );

    const containerDiv = container.querySelector('.svg-any');
    const svgAny = containerDiv.firstChild as SVGAElement;
    expect(svgAny).toBeInTheDocument();

    const spanTicket = screen.getByText(text);
    expect(spanTicket).toBeInTheDocument();

    stringFullTypeTicked.forEach((str, i) => {
      if (stringFullTypeTicked.length - 1 === i) {
        const span = screen.getByText(`${str}`);
        expect(span).toBeInTheDocument();
      } else {
        const span = screen.getByText(`${str},`);
        expect(span).toBeInTheDocument();
      }
    });

    expect.assertions(2 + stringFullTypeTicked.length);
  });

  test('should render, add popcorn to the order', () => {
    const seatJoinList = [];
    const text = 'ADICIONAR PIPOCA AO PEDIDO?';
    const stringFullTypeTicked = [''];

    const { container } = render(
      <RedirectUserSvgMovie
        svg={<FontAwesomeIcon icon={faCouch} />}
        text={text}
        stringFullTypeTicked={stringFullTypeTicked}
        seatJoinList={seatJoinList}
      />
    );

    const containerDiv = container.querySelector('.svg-any');
    const svgAny = containerDiv.firstChild as SVGAElement;
    expect(svgAny).toBeInTheDocument();

    const spanTicket = screen.getByText(text);
    expect(spanTicket).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render, form of payment', () => {
    const seatJoinList = [];
    const text = 'FORMA DE PAGAMENTO';
    const stringFullTypeTicked = [''];

    const { container } = render(
      <RedirectUserSvgMovie
        svg={<FontAwesomeIcon icon={faCouch} />}
        text={text}
        stringFullTypeTicked={stringFullTypeTicked}
        seatJoinList={seatJoinList}
      />
    );

    const containerDiv = container.querySelector('.svg-any');
    const svgAny = containerDiv.firstChild as SVGAElement;
    expect(svgAny).toBeInTheDocument();

    const spanTicket = screen.getByText(text);
    expect(spanTicket).toBeInTheDocument();

    expect.assertions(2);
  });
});
