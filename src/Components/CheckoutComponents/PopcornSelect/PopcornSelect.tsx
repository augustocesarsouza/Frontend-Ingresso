import * as Styled from './styled';
import { useState, useEffect } from 'react';
import { Url } from '../../../Utils/Url';
import { CheckoutMovie, listProductsProps } from '../../../Templates/Checkout/Checkout';
import ListFoodAdditional from '../ListFoodAdditional/ListFoodAdditional';

export interface listFoodAdditionalProps {
  fee: string;
  price: string;
  title: string;
  imgUrl: string;
}

interface PopcornSelectProps {
  whatClicked: number;
  checkoutMovie: CheckoutMovie;
  listProducts: listProductsProps[];
  setListProducts: React.Dispatch<React.SetStateAction<listProductsProps[]>>;
}

const PopcornSelect = ({
  whatClicked,
  checkoutMovie,
  listProducts,
  setListProducts,
}: PopcornSelectProps) => {
  const [listFoodAdditional, setListFoodAdditional] = useState<listFoodAdditionalProps[]>([]);

  useEffect(() => {
    if (checkoutMovie === null) return;
    fetchGetAllFoodAdditional(checkoutMovie.id);
  }, [checkoutMovie]);

  const fetchGetAllFoodAdditional = async (movieId: string) => {
    const res = await fetch(`${Url}/additionalfoodmovie/getallfood/${movieId}`);
    if (res.status === 200) {
      const json = await res.json();
      const data = json.data;
      setListFoodAdditional(data);
    }
  };

  return (
    <>
      {whatClicked === 3 && (
        <Styled.ContainerAddPopCorn>
          <Styled.ContainerHowAboutSomePopcorn>
            <Styled.H1Popcorn>
              Que tal uma pipoca, bebida ou doce para acompanhar o filme?
            </Styled.H1Popcorn>
            <Styled.H2Popcorn>
              Compre aqui com mais rapidez e praticidade para aproveitar a sua sessão.
            </Styled.H2Popcorn>
          </Styled.ContainerHowAboutSomePopcorn>
          <ListFoodAdditional
            listFoodAdditional={listFoodAdditional}
            listProducts={listProducts}
            setListProducts={setListProducts}
          />
        </Styled.ContainerAddPopCorn>
      )}
    </>
  );
};

export default PopcornSelect;
