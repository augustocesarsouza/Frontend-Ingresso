import { render, screen } from '@testing-library/react';
import ListFoodAdditional from './ListFoodAdditional';

describe('ListFoodAdditional', () => {
  test('should render title, img, price, priceFee', () => {
    const obj1Food = {
      fee: '7.59',
      imgUrl: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/ytyemtpvbixwyymqvdbk',
      price: '76.00',
      title: 'COMBO BALDE CARAMELO MED',
    };

    const obj2Food = {
      fee: '5.09',
      imgUrl: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/a2v5m5aggb5s0uf0blx3',
      price: '51.00',
      title: 'COMBO MED FINI SALGADA',
    };

    const listFoodAdditional = [obj1Food, obj2Food];

    const obj1Product = {
      fee: '7.59',
      selectNumber: 0,
      price: '76.00',
      title: 'COMBO BALDE CARAMELO MED',
    };

    const obj2Product = {
      fee: '5.09',
      selectNumber: 0,
      price: '51.00',
      title: 'COMBO MED FINI SALGADA',
    };

    const listProducts = [obj1Product, obj2Product];

    const fn = jest.fn();

    render(
      <ListFoodAdditional
        listFoodAdditional={listFoodAdditional}
        listProducts={listProducts}
        setListProducts={fn}
      />
    );

    listFoodAdditional.forEach((food) => {
      const img = screen.getByAltText(food.title);
      expect(img).toBeInTheDocument();

      const paragraph1 = screen.getByText(food.title);
      expect(paragraph1).toBeInTheDocument();

      const paragraph2 = screen.getByText(food.title.toLocaleLowerCase());
      expect(paragraph2).toBeInTheDocument();

      const spanPrice1 = screen.getByText(`R$ ${food.price.replace('.', ',')}`);
      expect(spanPrice1).toBeInTheDocument();

      const spanPriceFee = screen.getByText(`(+ Taxa R$ ${food.fee.replace('.', ',')})`);
      expect(spanPriceFee).toBeInTheDocument();
    });

    expect.assertions(10);
  });
});
