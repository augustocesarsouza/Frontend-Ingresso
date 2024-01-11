import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { listProductsProps } from '../../../Templates/Checkout/Checkout';
import { listFoodAdditionalProps } from '../PopcornSelect/PopcornSelect';

interface ListFoodAdditionalCompProps {
  listFoodAdditional: listFoodAdditionalProps[];
  listProducts: listProductsProps[];
  setListProducts: React.Dispatch<React.SetStateAction<listProductsProps[]>>;
}

const ListFoodAdditional = ({
  listFoodAdditional,
  listProducts,
  setListProducts,
}: ListFoodAdditionalCompProps) => {
  const [numberFoodKeyValue, setNumberFoodKeyValue] = useState<{ [key: number]: number }>({});
  const [somaTotal, setSomaTotal] = useState(0);

  const handleClickMinus = (value: number) => {
    setSomaTotal((prev) => {
      if (prev >= 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
    setNumberFoodKeyValue((prev) => {
      if (prev[value] >= 0) {
        return { ...prev, [value]: prev[value] - 1 };
      } else {
        return prev;
      }
    });
  };

  const handleClickPlus = (value: number) => {
    setSomaTotal((prev) => {
      if (prev < 10) {
        return prev + 1;
      } else {
        return prev;
      }
    });
    setNumberFoodKeyValue((prev) => {
      if (prev[value] < 10 && somaTotal + 1 <= 10) {
        return { ...prev, [value]: prev[value] + 1 };
      } else {
        return prev;
      }
    });
  };

  useEffect(() => {
    for (let i = 1; i <= listFoodAdditional.length; i++) {
      setNumberFoodKeyValue((prev) => {
        if (!prev[i]) {
          return { ...prev, [i]: 0 };
        }
      });
    }
  }, [listFoodAdditional]);

  useEffect(() => {
    listFoodAdditional.forEach((el, i) => {
      if (numberFoodKeyValue[i + 1] >= 0) {
        const newObject: listProductsProps = {
          selectNumber: numberFoodKeyValue[i + 1],
          price: el.price,
          title: el.title,
          fee: el.fee,
        };

        const index = listProducts.findIndex((item) => item.title === newObject.title);

        if (index != -1) {
          setListProducts((prev) => [...prev.slice(0, index), newObject, ...prev.slice(index + 1)]);
        } else {
          setListProducts((prev) => [...prev, newObject]);
        }
      }
    });
  }, [numberFoodKeyValue, somaTotal, listFoodAdditional]);

  return (
    <Styled.ContainerFoodAdditional>
      {listFoodAdditional.length > 0 &&
        listFoodAdditional.map((food, i) => (
          <Styled.ContainerFoodInfoMain key={i}>
            <Styled.WrapperImg>
              <Styled.Img src={food.imgUrl} alt={food.title} />
            </Styled.WrapperImg>
            <Styled.ContainerAmountFoodAdditional>
              <Styled.ContainerSvgMinus
                onClick={() => {
                  if (numberFoodKeyValue[i + 1] > 0) {
                    handleClickMinus(i + 1);
                  }
                }}
                $minusnumber={i}
                $numberfoodkeyvalue={numberFoodKeyValue}
                $somatotal={somaTotal}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Styled.ContainerSvgMinus>

              <Styled.Span $span="count" $spannumber={i}>
                {numberFoodKeyValue[i + 1]}
              </Styled.Span>
              <Styled.ContainerSvgPlus
                onClick={() => handleClickPlus(i + 1)}
                $plusnumber={i}
                $numberfoodkeyvalue={numberFoodKeyValue}
                $somatotal={somaTotal}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Styled.ContainerSvgPlus>
            </Styled.ContainerAmountFoodAdditional>
            <Styled.ContainerInfoFood>
              <Styled.p $p="1">{food.title}</Styled.p>
              <Styled.p $p="2">{food.title.toLocaleLowerCase()}</Styled.p>
              <Styled.ContainerInfoPriceFee>
                <Styled.Span $span="1" $spannumber={i}>{`R$ ${food.price.replace(
                  '.',
                  ','
                )}`}</Styled.Span>
                <Styled.Span $span="2" $spannumber={i}>{`(+ Taxa R$ ${food.fee.replace(
                  '.',
                  ','
                )})`}</Styled.Span>
              </Styled.ContainerInfoPriceFee>
            </Styled.ContainerInfoFood>
          </Styled.ContainerFoodInfoMain>
        ))}
    </Styled.ContainerFoodAdditional>
  );
};

export default ListFoodAdditional;
