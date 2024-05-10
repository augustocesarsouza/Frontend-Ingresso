import { render, screen } from '@testing-library/react';
import ProductsInfoChosen from './ProductsInfoChosen';

describe('ProductsInfoChosen', () => {
  test('should render, values ', () => {
    const listProducts = [];

    const obj1 = {
      fee: '7.59',
      price: '76.00',
      selectNumber: 1,
      title: 'COMBO BALDE CARAMELO MED',
    };

    const obj2 = {
      fee: '5.09',
      price: '51.00',
      selectNumber: 2,
      title: 'COMBO MED FINI SALGADA',
    };

    listProducts.push(obj1, obj2);

    render(<ProductsInfoChosen listProducts={listProducts} />);

    const span1 = screen.getByText('PRODUTOS');
    expect(span1).toBeInTheDocument();

    listProducts.forEach((prod) => {
      const span2 = screen.getByText(`${prod.selectNumber}x`);
      expect(span2).toBeInTheDocument();

      const span3 = screen.getByText(`${prod.title}`);
      expect(span3).toBeInTheDocument();

      const span4 = screen.getByText(
        `Produto R$ ${Number(prod.price).toFixed(2)} + Taxa R$ ${Number(prod.fee).toFixed(2)}`
      );
      expect(span4).toBeInTheDocument();

      const span5 = screen.getByText(
        `R$ ${(Number(prod.price) * Number(prod.selectNumber)).toFixed(2)}`
      );
      expect(span5).toBeInTheDocument();
    });

    expect.assertions(9);
  });
});
