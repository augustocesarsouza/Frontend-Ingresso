import * as Styled from './styled';
import { useState, useEffect } from 'react';
import { Url } from '../../../Utils/Url';
import { CheckoutMovie, User, listProductsProps } from '../../../Templates/Checkout/Checkout';
import ListFoodAdditional from '../ListFoodAdditional/ListFoodAdditional';
import { useNavigate } from 'react-router-dom';

export interface listFoodAdditionalProps {
  fee: string;
  price: string;
  title: string;
  imgUrl: string;
}

interface PopcornSelectProps {
  user: User;
  whatClicked: number;
  checkoutMovie: CheckoutMovie;
  listProducts: listProductsProps[];
  setListProducts: React.Dispatch<React.SetStateAction<listProductsProps[]>>;
}

const PopcornSelect = ({
  user,
  whatClicked,
  checkoutMovie,
  listProducts,
  setListProducts,
}: PopcornSelectProps) => {
  const [listFoodAdditional, setListFoodAdditional] = useState<listFoodAdditionalProps[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    if (checkoutMovie === null) return;
    fetchGetAllFoodAdditional(checkoutMovie.movieId);
  }, [checkoutMovie]);

  const fetchGetAllFoodAdditional = async (movieId: string) => {
    const token = localStorage.getItem('token');

    if (token == null || token.length <= 0) {
      nav('/', { state: { user: null } });
      return;
    }

    const res = await fetch(`${Url}/additionalfoodmovie/getallfood/${movieId}`, {
      headers: {
        uid: user.id,
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 403) {
      nav('/', { state: { user: null } });
      return;
    }

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
