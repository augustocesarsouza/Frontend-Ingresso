import SecondPopCornSvg from '../../../Svg/SecondPopCornSvg';
import { listProductsProps } from '../../../Templates/Checkout/Checkout';
import * as Styled from './styled';
import { useEffect, useState } from 'react';

interface ProductsInfoChosenProps {
  listProducts: listProductsProps[];
}

const ProductsInfoChosen = ({ listProducts }: ProductsInfoChosenProps) => {
  const [valueTrueOrFalse, setValueTrueOrFalse] = useState(false);

  useEffect(() => {
    setValueTrueOrFalse(listProducts.some((el) => el.selectNumber > 0));
  }, [listProducts]);

  return (
    <>
      {listProducts.length > 0 && valueTrueOrFalse && (
        <Styled.ContainerProductsMain>
          <Styled.ContainerProductsSvg>
            <SecondPopCornSvg />
            <Styled.SpanProducts $span="1">PRODUTOS</Styled.SpanProducts>
          </Styled.ContainerProductsSvg>
          <Styled.ContainerOrders>
            {listProducts.map(
              (pro, index) =>
                pro.selectNumber > 0 && (
                  <Styled.ContainerInfoTickedPrice key={index}>
                    <Styled.ContainerHowManyTimes>
                      <Styled.SpanTicked $span="1">{`${pro.selectNumber}x`}</Styled.SpanTicked>
                    </Styled.ContainerHowManyTimes>
                    <Styled.ContainerInfoMoreAndPriceTotal>
                      <Styled.ContainerMoreInfoPrice>
                        <Styled.SpanTicked $span="2">{pro.title}</Styled.SpanTicked>
                        <Styled.SpanTicked $span="3">{`Produto R$ ${Number(pro.price).toFixed(
                          2
                        )} + Taxa R$ ${Number(pro.fee).toFixed(2)}`}</Styled.SpanTicked>
                      </Styled.ContainerMoreInfoPrice>
                      <Styled.SpanTicked $span="4">{`R$ ${(
                        Number(pro.price) * Number(pro.selectNumber)
                      ).toFixed(2)}`}</Styled.SpanTicked>
                    </Styled.ContainerInfoMoreAndPriceTotal>
                  </Styled.ContainerInfoTickedPrice>
                )
            )}
          </Styled.ContainerOrders>
        </Styled.ContainerProductsMain>
      )}
    </>
  );
};

export default ProductsInfoChosen;
