import { useLocation } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import TopPartCheckout from '../../Components/CheckoutComponents/TopPartCheckout/TopPartCheckout';
import MovieBannerRoom from '../../Components/CheckoutComponents/MovieBannerRoom/MovieBannerRoom';
import OptionsMovie from '../../Components/CheckoutComponents/OptionsMovie/OptionsMovie';
import MovieSeats from '../../Components/CheckoutComponents/MovieSeats/MovieSeats';
import { Url } from '../../Utils/Url';
import TicketTypes from '../../Components/CheckoutComponents/TicketTypes/TicketTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faCircleExclamation,
  faCreditCard,
  faMinus,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import PopcornSelect from '../../Components/CheckoutComponents/PopcornSelect/PopcornSelect';
import WarningChooseOneSeats from '../../Components/CheckoutComponents/WarningChooseOneSeats/WarningChooseOneSeats';
import WarningChooseOnePayment from '../../Components/CheckoutComponents/WarningChooseOnePayment/WarningChooseOnePayment';
import PartOfLowPaymentInformation from '../../Components/CheckoutComponents/PartOfLowPaymentInformation/PartOfLowPaymentInformation';
import CheckSvg from '../../Svg/CheckSvg';
import CardCredit from '../../Svg/CardCredit';
import CreditCard from '../../Components/CheckoutComponents/CardForPaymentMethodComponent/CreditCardComponents/CreditCard/CreditCard';
import ChoiceSeats from '../../Components/CheckoutComponents/ChoiceSeats/ChoiceSeats';
import MethodPayment from '../../Components/CheckoutComponents/MethodPayment/MethodPayment';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CheckoutMovie {
  id: string;
  imgUrl: string;
  dateMovie: string;
  locationMovie: string;
  movie: string;
  ranking: string;
  room: number;
}

export interface listFormPayment {
  formName: string;
  price: string;
  priceNumber: number;
}

export interface listSeatsMarked {
  nameSeat: string;
  namePayment: string;
  isSelect: number;
}

export interface paymentSelectSeatsProps {
  paymentName: string;
  amountSeats: number;
}

export interface listProductsProps {
  fee: string;
  price: string;
  title: string;
  selectNumber: number;
}

const Checkout = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [checkoutMovie, setCheckoutMovie] = useState<CheckoutMovie | null>(null);

  useEffect(() => {
    if (location.state === null) return;
    const user = location.state.user;
    setCheckoutMovie(location.state.checkoutMovie);

    setUser(user);
  }, [location.state]);

  const [whatClicked, setWhatClicked] = useState(1);

  const [seatJoinList, setSeatJoinList] = useState<string[]>([]);

  const handleSeatClicked = (seat: number, rowName: string) => {
    const seatJoin = `${rowName} ${seat}`;

    setSeatJoinList((prev) => {
      if (!prev.includes(seatJoin)) {
        return [...prev, seatJoin];
      } else {
        return prev.filter((str) => str !== seatJoin);
      }
    });
  };

  const [listFormPayment, setListFormPayment] = useState<listFormPayment[]>([]);

  useEffect(() => {
    if (checkoutMovie === null) return;
    fetchFormsPayment(checkoutMovie.id);
  }, [checkoutMovie]);

  const fetchFormsPayment = async (movieId: string) => {
    const res = await fetch(`${Url}/formofpayment/get-form/${movieId}`);
    if (res.status === 200) {
      const json = await res.json();
      setListFormPayment(json.data);

      setListFormPayment((prev) =>
        prev.map((el) => {
          const modifiedEl = {
            ...el,
            priceNumber: Number(el.price.replace(',', '.')),
          };

          return modifiedEl;
        })
      );
    }
  };

  const [paymentKeyValue, setPaymentKeyValue] = useState<{ [key: string]: listSeatsMarked[] }>({});
  const [paymentSelectSeats, setPaymentSelectSeats] = useState<paymentSelectSeatsProps[]>([]);
  const [formPayment, setFormPayment] = useState('');
  const [seatChosen, setSeatChosen] = useState('');
  const [uncheck, setUncheck] = useState<listSeatsMarked | null>(null);

  // const handleClickSeats = (sea, formPayment) => {
  //   setPaymentKeyValue((prev) => {
  //     const array = prev[formPayment];

  //     const newArray = array.map((el) => {
  //       if (el.nameSeat === sea) {
  //         return { ...el, isSelect: 1 };
  //       }

  //       return el;
  //     });

  //     return { ...prev, [formPayment]: newArray };
  //   });

  //   setPaymentKeyValue((prev) => {
  //     let updatedState = { ...prev };

  //     listFormPayment.forEach((el) => {
  //       if (el.formName !== formPayment) {
  //         const array = updatedState[el.formName];

  //         const newArray = array.map((el) => {
  //           if (el.nameSeat === sea) {
  //             return { ...el, isSelect: 2 };
  //           }

  //           return el;
  //         });
  //         updatedState = { ...updatedState, [el.formName]: newArray };
  //       }
  //     });
  //     return updatedState;
  //   });
  // };

  // useEffect(() => {

  // }, []);

  const handleClickSeats = (sea: string, formPayment: string) => {
    setFormPayment(formPayment);
    setSeatChosen(sea);
    setPaymentKeyValue((prev) => {
      let updatedState = { ...prev };

      listFormPayment.forEach((el) => {
        const array = updatedState[el.formName];
        const isCurrentForm = el.formName === formPayment;

        const newArray = array.map((seat) => {
          if (seat.nameSeat === sea) {
            if (seat.isSelect === 1) {
              setUncheck(seat);

              return { ...seat, isSelect: 0 };
            }

            if (seat.isSelect === 2) {
              return { ...seat, isSelect: 0 };
            }
          }

          if (seat.nameSeat === sea) {
            return { ...seat, isSelect: isCurrentForm ? 1 : 2 };
          }

          return seat;
        });

        updatedState = { ...updatedState, [el.formName]: newArray };
      });

      return updatedState;
    });
  };

  useEffect(() => {
    listFormPayment.forEach((el) => {
      let arrayObj = [];
      seatJoinList.forEach((se) => {
        const obj = {
          nameSeat: se,
          namePayment: el.formName,
          isSelect: 0,
        };
        arrayObj.push(obj);
      });
      setPaymentKeyValue((prev) => {
        const upd = {
          ...prev,
          [el.formName]: arrayObj,
        };

        return upd;
      });
    });
  }, [listFormPayment, seatJoinList]);

  useEffect(() => {
    if (uncheck !== null) {
      setPaymentSelectSeats((prev) => {
        if (prev.some((e) => e.paymentName === uncheck.namePayment)) {
          const newArray = prev.map((pay) => {
            if (pay.paymentName === formPayment) {
              setUncheck(null);
              setFormPayment('');
              return { ...pay, amountSeats: pay.amountSeats - 1 };
            } else {
              return pay;
            }
          });

          return newArray;
        }
      });
      return;
    }

    listFormPayment.forEach((el) => {
      const isCurrentForm = el.formName === formPayment;

      if (isCurrentForm) {
        const objSeats = {
          paymentName: formPayment,
          amountSeats: 1,
        };

        setPaymentSelectSeats((prev) => {
          if (prev.some((e) => e.paymentName === formPayment)) {
            const newArray = prev.map((pay) => {
              if (pay.paymentName === formPayment) {
                return { ...pay, amountSeats: pay.amountSeats + 1 };
              } else {
                return pay;
              }
            });

            return newArray;
          } else {
            return [...prev, objSeats];
          }
        });
      }
    });
  }, [formPayment, seatChosen, uncheck]);

  const [listProducts, setListProducts] = useState<listProductsProps[]>([]);

  const [countValueTotalOfAssentsAndProduct, setCountValueTotalOfAssentsAndProduct] = useState(0);
  const [totalValuePrice, setTotalValuePrice] = useState(0);
  const [countOfProduct, setCountOfProduct] = useState(0);

  const [chooseOneSeats, setChooseOneSeats] = useState(false);
  const [chooseOnePayment, setChooseOnePayment] = useState(false);

  const handleButtonSkip = () => {
    if (whatClicked === 1) {
      if (seatJoinList.length <= 0) {
        setChooseOneSeats(true);
        return;
      } else {
        if (whatClicked === 1) {
          setWhatClicked(2);
        }
      }
    }

    if (whatClicked === 2) {
      let someValueGreaterThanZero = false;
      paymentSelectSeats.forEach((pay) => {
        if (pay.amountSeats > 0) {
          someValueGreaterThanZero = true;
        }
      });

      if (!someValueGreaterThanZero) {
        setChooseOnePayment(true);
      } else {
        if (whatClicked === 2) {
          setWhatClicked(3);
        }
      }
    }

    if (countOfProduct <= 0 && whatClicked === 3) {
      setWhatClicked(4);
    }

    if (countOfProduct > 0) {
      setWhatClicked(4);
    }
  };

  const handleExitChooseSeats = () => {
    setChooseOneSeats(false);
  };

  const handleExitChoosePayment = () => {
    setChooseOnePayment(false);
  };

  return (
    <Styled.ContainerMain>
      <TopPartCheckout user={user} />
      <Styled.ContainerMiddle>
        <Styled.ContainerLeftRightSide>
          {checkoutMovie && (
            <Styled.ContainerFirst>
              <MovieBannerRoom checkoutMovie={checkoutMovie} />
              <OptionsMovie
                setWhatClicked={setWhatClicked}
                paymentSelectSeats={paymentSelectSeats}
                whatClicked={whatClicked}
                seatJoinList={seatJoinList}
                listFormPayment={listFormPayment}
                listProducts={listProducts}
                setCountValueTotalOfAssentsAndProduct={setCountValueTotalOfAssentsAndProduct}
                setTotalValuePrice={setTotalValuePrice}
                setCountOfProduct={setCountOfProduct}
              />
            </Styled.ContainerFirst>
          )}

          <ChoiceSeats
            whatClicked={whatClicked}
            seatJoinList={seatJoinList}
            handleSeatClicked={handleSeatClicked}
          />

          <TicketTypes
            whatClicked={whatClicked}
            listFormPayment={listFormPayment}
            paymentSelectSeats={paymentSelectSeats}
            seatJoinList={seatJoinList}
            paymentKeyValue={paymentKeyValue}
            handleClickSeats={handleClickSeats}
          />

          <PopcornSelect
            checkoutMovie={checkoutMovie}
            whatClicked={whatClicked}
            listProducts={listProducts}
            setListProducts={setListProducts}
          />

          <MethodPayment whatClicked={whatClicked} totalValuePrice={totalValuePrice} />
        </Styled.ContainerLeftRightSide>

        <PartOfLowPaymentInformation
          countOfProduct={countOfProduct}
          countValueTotalOfAssentsAndProduct={countValueTotalOfAssentsAndProduct}
          handleButtonSkip={handleButtonSkip}
          totalValuePrice={totalValuePrice}
          whatClicked={whatClicked}
        />

        <WarningChooseOneSeats
          chooseOneSeats={chooseOneSeats}
          handleExitChooseSeats={handleExitChooseSeats}
        />

        <WarningChooseOnePayment
          chooseOnePayment={chooseOnePayment}
          handleExitChoosePayment={handleExitChoosePayment}
        />
      </Styled.ContainerMiddle>
    </Styled.ContainerMain>
  );
};

export default Checkout;
