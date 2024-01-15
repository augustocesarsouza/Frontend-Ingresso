import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import {
  faBowlRice,
  faCaretUp,
  faCouch,
  faCreditCard,
  faTicketSimple,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import RedirectUserSvgMovie from '../RedirectUserSvgMovie/RedirectUserSvgMovie';
import {
  listFormPayment,
  listProductsProps,
  paymentSelectSeatsProps,
} from '../../../Templates/Checkout/Checkout';
import FormsOfWithdrawalAndRemove from '../FormsOfWithdrawalAndRemove/FormsOfWithdrawalAndRemove';
import SummaryOfTheOrder from '../SummaryOfTheOrder/SummaryOfTheOrder';

interface OptionsMovieProps {
  setWhatClicked: React.Dispatch<React.SetStateAction<number>>;
  seatJoinList: string[];
  paymentSelectSeats: paymentSelectSeatsProps[];
  whatClicked: number;
  listFormPayment: listFormPayment[];
  listProducts: listProductsProps[];
  setCountValueTotalOfAssentsAndProduct: React.Dispatch<React.SetStateAction<number>>;
  setTotalValuePrice: React.Dispatch<React.SetStateAction<number>>;
  setCountOfProduct: React.Dispatch<React.SetStateAction<number>>;
  setWhatButtonClicked: React.Dispatch<React.SetStateAction<number>>;
}

const OptionsMovie = ({
  setWhatClicked,
  seatJoinList,
  paymentSelectSeats,
  whatClicked,
  listFormPayment,
  listProducts,
  setCountValueTotalOfAssentsAndProduct,
  setTotalValuePrice,
  setCountOfProduct,
  setWhatButtonClicked,
}: OptionsMovieProps) => {
  const [whatClickedButton, setWhatClickedButton] = useState(1);
  const [listNumberAllowed, setListNumberAllowed] = useState([1]);
  const [allTrue, setAllTrue] = useState(false);

  const handleChoiceOfSeats = () => {
    setWhatClickedButton(1);
  };

  const handleTicketTypes = () => {
    setWhatClickedButton(2);
  };

  const handleAddPopcornToTheOrder = () => {
    setWhatClickedButton(3);
  };

  const handleFormOfPayment = () => {
    setWhatClickedButton(4);
  };

  useEffect(() => {
    setWhatClickedButton(whatClicked);
  }, [whatClicked]);

  useEffect(() => {
    if (whatClickedButton === 1) {
      setWhatButtonClicked(1);
    } else {
      setWhatButtonClicked(0);
    }

    if (allTrue) {
      setListNumberAllowed((prev) => [...prev, 3, 4]);
    } else {
      setListNumberAllowed((prev) => prev.filter((pr) => pr !== 3));
      setListNumberAllowed((prev) => prev.filter((pr) => pr !== 4));
    }

    if (seatJoinList.length > 0) {
      setListNumberAllowed((prev) => [...prev, 2]);
    } else {
      setListNumberAllowed((prev) => prev.filter((pr) => pr !== 2));
    }

    setWhatClicked(whatClickedButton);
    if (listNumberAllowed.includes(whatClickedButton)) return;

    setListNumberAllowed((prev) => [...prev, whatClickedButton]);
  }, [whatClickedButton, seatJoinList, allTrue]);

  const [totalTickets, setTotalTickets] = useState(0);
  const [stringFullTypeTicked, setStringFullTypeTicked] = useState<string[]>([]);

  useEffect(() => {
    let soma = 0.0;

    let countSeatsMarked = 0;

    paymentSelectSeats.forEach((pay) => {
      if (pay.amountSeats > 0) {
        countSeatsMarked += pay.amountSeats;
      }
      listFormPayment.forEach((form) => {
        if (pay.amountSeats > 0 && form.formName === pay.paymentName) {
          soma += pay.amountSeats * form.priceNumber;
        }
      });
    });

    listProducts.forEach((pro) => {
      if (pro.selectNumber > 0) {
        soma += pro.selectNumber * Number(pro.price);
      }
    });

    setTotalTickets(Number(soma.toFixed(2)));
    setTotalValuePrice(Number(soma.toFixed(2)));

    if (seatJoinList.length > 0) {
      if (countSeatsMarked === seatJoinList.length) {
        setAllTrue(true);
      } else {
        setAllTrue(false);
      }
    } else {
      setAllTrue(false);
      countSeatsMarked = 0;

      setStringFullTypeTicked([]);
    }
  }, [paymentSelectSeats, listFormPayment, seatJoinList, listProducts]);

  useEffect(() => {
    let countTotal = 0;
    let countOfProduct = 0;
    paymentSelectSeats.forEach((pay) => {
      countTotal += pay.amountSeats;
    });

    listProducts.forEach((pro) => {
      countTotal += pro.selectNumber;
      countOfProduct += pro.selectNumber;
    });
    setCountOfProduct(countOfProduct);

    setCountValueTotalOfAssentsAndProduct(countTotal);
  }, [paymentSelectSeats, listProducts]);

  useEffect(() => {
    if (paymentSelectSeats) {
      let stringFull = paymentSelectSeats.map((el) => {
        if (el.amountSeats > 0) {
          return `${el.paymentName} (${el.amountSeats})`;
        }
      });

      setStringFullTypeTicked(stringFull);
    }
  }, [paymentSelectSeats]);

  return (
    <Styled.ContainerOptionsMovie>
      <FormsOfWithdrawalAndRemove />
      <Styled.ContainerOrdersDatePersonalPayment>
        <Styled.ContainerInfo>
          <Styled.WrapperSvg
            onClick={handleChoiceOfSeats}
            $wrappersvg="1"
            $alltrue={false}
            $listnumberallowed={listNumberAllowed}
            $whatclickedbutton={String(whatClickedButton)}
            $seatjoinlist={String(seatJoinList)}
          >
            <RedirectUserSvgMovie
              svg={<FontAwesomeIcon icon={faCouch} />}
              text={'ESCOLHA DE ASSENTOS'}
              stringFullTypeTicked={[]}
              seatJoinList={seatJoinList}
            />
          </Styled.WrapperSvg>
          {whatClickedButton === 1 && (
            <Styled.ContainerArrow $containerarrow="1">
              <FontAwesomeIcon icon={faCaretUp} rotation={90} className="svg-arrow-4" />
            </Styled.ContainerArrow>
          )}
          <Styled.WrapperSvg
            onClick={handleTicketTypes}
            $wrappersvg="2"
            $alltrue={allTrue}
            $listnumberallowed={listNumberAllowed}
            $whatclickedbutton={String(whatClickedButton)}
            $seatjoinlist={String(seatJoinList)}
          >
            <RedirectUserSvgMovie
              svg={<FontAwesomeIcon icon={faTicketSimple} />}
              text={'TIPOS DE INGRESSOS'}
              stringFullTypeTicked={stringFullTypeTicked}
              seatJoinList={seatJoinList}
            />
          </Styled.WrapperSvg>
          {whatClickedButton === 2 && (
            <Styled.ContainerArrow $containerarrow="2">
              <FontAwesomeIcon icon={faCaretUp} rotation={90} className="svg-arrow-4" />
            </Styled.ContainerArrow>
          )}

          <Styled.WrapperSvg
            onClick={handleAddPopcornToTheOrder}
            $wrappersvg="3"
            $listnumberallowed={listNumberAllowed}
            $alltrue={allTrue}
            $whatclickedbutton={String(whatClickedButton)}
            $seatjoinlist={String(seatJoinList)}
          >
            <RedirectUserSvgMovie
              svg={<FontAwesomeIcon icon={faBowlRice} />}
              text={'ADICIONAR PIPOCA AO PEDIDO?'}
              stringFullTypeTicked={[]}
              seatJoinList={[]}
            />
          </Styled.WrapperSvg>
          {whatClickedButton === 3 && (
            <Styled.ContainerArrow $containerarrow="3">
              <FontAwesomeIcon icon={faCaretUp} rotation={90} className="svg-arrow-4" />
            </Styled.ContainerArrow>
          )}

          <Styled.WrapperSvg
            onClick={handleFormOfPayment}
            $wrappersvg="4"
            $alltrue={allTrue}
            $listnumberallowed={listNumberAllowed}
            $whatclickedbutton={String(whatClickedButton)}
            $seatjoinlist={String(seatJoinList)}
          >
            <RedirectUserSvgMovie
              svg={<FontAwesomeIcon icon={faCreditCard} />}
              text={'FORMA DE PAGAMENTO'}
              stringFullTypeTicked={[]}
              seatJoinList={[]}
            />
          </Styled.WrapperSvg>
          {whatClickedButton === 4 && (
            <Styled.ContainerArrow $containerarrow="4">
              <FontAwesomeIcon icon={faCaretUp} rotation={90} className="svg-arrow-4" />
            </Styled.ContainerArrow>
          )}
        </Styled.ContainerInfo>
        <SummaryOfTheOrder
          paymentSelectSeats={paymentSelectSeats}
          listFormPayment={listFormPayment}
          listProducts={listProducts}
          totalTickets={totalTickets}
        />
      </Styled.ContainerOrdersDatePersonalPayment>
    </Styled.ContainerOptionsMovie>
  );
};

export default OptionsMovie;
