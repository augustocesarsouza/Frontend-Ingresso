import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useLayoutEffect, useState } from 'react';
import TopPartCheckout from '../../Components/CheckoutComponents/TopPartCheckout/TopPartCheckout';
import MovieBannerRoom from '../../Components/CheckoutComponents/MovieBannerRoom/MovieBannerRoom';
import OptionsMovie from '../../Components/CheckoutComponents/OptionsMovie/OptionsMovie';
import { Url } from '../../Utils/Url';
import TicketTypes from '../../Components/CheckoutComponents/TicketTypes/TicketTypes';
import PopcornSelect from '../../Components/CheckoutComponents/PopcornSelect/PopcornSelect';
import WarningChooseOneSeats from '../../Components/CheckoutComponents/WarningChooseOneSeats/WarningChooseOneSeats';
import WarningChooseOnePayment from '../../Components/CheckoutComponents/WarningChooseOnePayment/WarningChooseOnePayment';
import PartOfLowPaymentInformation from '../../Components/CheckoutComponents/PartOfLowPaymentInformation/PartOfLowPaymentInformation';
import ChoiceSeats from '../../Components/CheckoutComponents/ChoiceSeats/ChoiceSeats';
import MethodPayment from '../../Components/CheckoutComponents/MethodPayment/MethodPayment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CheckoutMovie {
  cinemaId: string;
  movieId: string;
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
  nameSeats: string[];
}

export interface listProductsProps {
  fee: string;
  price: string;
  title: string;
  selectNumber: number;
}

export interface MovieRegionTickets {
  id: string;
  cinemaId: string;
  movieId: string;
  ticketsSeats: string;
}

const Checkout = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [checkoutMovie, setCheckoutMovie] = useState<CheckoutMovie | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (location.state === null) return;

    const user = location.state.user;
    setCheckoutMovie(location.state.checkoutMovie);

    setUser(user);
  }, [location.state]);

  const [whatClicked, setWhatClicked] = useState(1);

  const [seatJoinList, setSeatJoinList] = useState<string[]>([]);
  const [paymentSelectSeats, setPaymentSelectSeats] = useState<paymentSelectSeatsProps[]>([]);
  const [paymentKeyValue, setPaymentKeyValue] = useState<{ [key: string]: listSeatsMarked[] }>({});
  const [listFormPayment, setListFormPayment] = useState<listFormPayment[]>([]);
  const [seatsWithoutWhiteSpace, setSeatsWithoutWhiteSpace] = useState('');

  const handleSeatClicked = (seat: number, rowName: string) => {
    const seatJoin = `${rowName} ${seat}`;
    // console.log(seatJoin);

    const seatsWithoutWhiteSpace = seatJoin.replace(/\s/g, '');
    setSeatsWithoutWhiteSpace(seatsWithoutWhiteSpace);

    setPaymentSelectSeats((prev) => {
      if (prev.some((el) => el.nameSeats.includes(seatJoin))) {
        const newArray = prev.map((el) => {
          if (el.paymentName === formPayment) {
            return {
              ...el,
              amountSeats: el.amountSeats - 1,
              nameSeats: el.nameSeats.filter((ft) => ft !== seatJoin),
            };
          } else {
            return el;
          }
        });

        return newArray;
      }

      return prev;
    });

    setSeatJoinList((prev) => {
      if (!prev.includes(seatJoin)) {
        return [...prev, seatJoin];
      } else {
        return prev.filter((str) => str !== seatJoin);
      }
    });
  };

  useLayoutEffect(() => {
    if (checkoutMovie === null) return;
    fetchFormsPayment(checkoutMovie.movieId);
    fetchGetByMovieIdAndCinemaId(checkoutMovie.movieId, checkoutMovie.cinemaId);
  }, [checkoutMovie]);

  const fetchFormsPayment = async (movieId: string) => {
    const token = localStorage.getItem('token');

    if (token == null || token.length <= 0) {
      nav('/', { state: { user: null } });
      return;
    }

    const res = await fetch(`${Url}/form-of-payment/get-form/${movieId}`, {
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

  const [ticketsSeats, setTicketsSeats] = useState<string[]>([]);

  const fetchGetByMovieIdAndCinemaId = async (movieId: string, cinemaId: string) => {
    const token = localStorage.getItem('token');

    if (token == null || token.length <= 0) {
      nav('/', { state: { user: null } });
      return;
    }

    const res = await fetch(
      `${Url}/movie-region-tickets/get-by-movieid-and-cinemaid/${movieId}/${cinemaId}`,
      {
        headers: {
          uid: user.id,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 403) {
      nav('/', { state: { user: null } });
      return;
    }

    if (res.status === 200) {
      const json = await res.json();
      const ticketsSeats: string = json.data.ticketsSeats;
      var arraySeats = ticketsSeats.split(',');
      const arraySeatsAlreadyChosen: string[] = [];
      arraySeats.forEach((str) => {
        arraySeatsAlreadyChosen.push(str.replace(/\s/g, ''));
        // /\s/g corresponde a todos os espaços em branco na string, e o método replace() é usado para substituí-los por uma string vazia.
      });

      setTicketsSeats(arraySeatsAlreadyChosen);
    }
  };

  useEffect(() => {
    // console.log(ticketsSeats);
  }, [ticketsSeats]);

  const [formPayment, setFormPayment] = useState('');

  const handleClickSeats = (sea: string, formPayment: string) => {
    setFormPayment(formPayment);

    setPaymentSelectSeats((prev) => {
      if (prev.some((el) => el.nameSeats.includes(sea))) {
        const newArray = prev.map((el) => {
          if (el.paymentName === formPayment) {
            return {
              ...el,
              amountSeats: el.amountSeats - 1,
              nameSeats: el.nameSeats.filter((ft) => ft !== sea),
            };
          } else {
            return el;
          }
        });

        return newArray;
      } else if (prev.some((el) => el.paymentName === formPayment)) {
        const newArray = prev.map((pr) => {
          if (pr.paymentName === formPayment) {
            return { ...pr, amountSeats: pr.amountSeats + 1, nameSeats: [...pr.nameSeats, sea] };
          } else {
            return pr;
          }
        });

        return newArray;
      } else {
        return [...prev, { amountSeats: 1, paymentName: formPayment, nameSeats: [sea] }];
      }
    });

    setPaymentKeyValue((prev) => {
      let updatedState = { ...prev };

      listFormPayment.forEach((el) => {
        const array = updatedState[el.formName];
        const isCurrentForm = el.formName === formPayment;

        const newArray = array.map((seat) => {
          if (seat.nameSeat === sea) {
            if (seat.isSelect === 1) {
              // setUncheck(seat);

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
    if (seatJoinList.length <= 0) {
      setPaymentSelectSeats([]);
      setFormPayment('');
    }

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

  const [listProducts, setListProducts] = useState<listProductsProps[]>([]);

  const [countValueTotalOfAssentsAndProduct, setCountValueTotalOfAssentsAndProduct] = useState(0);
  const [totalValuePrice, setTotalValuePrice] = useState(0);
  const [countOfProduct, setCountOfProduct] = useState(0);

  const [chooseOneSeats, setChooseOneSeats] = useState(false);
  const [chooseOnePayment, setChooseOnePayment] = useState(false);
  const [loadPayment, setLoadPayment] = useState(false);
  const [seatPurchasedSuccessfully, setSeatPurchasedSuccessfully] = useState(false);

  const updateSeatsBought = async () => {
    if (checkoutMovie === null) return;

    let seatFullString = '';
    if (seatJoinList.length > 0) {
      seatJoinList.forEach((se, i) => {
        const word = se.replace(/\s/g, '');
        seatFullString += word;
        if (i < seatJoinList.length - 1) {
          seatFullString += ',';
        }
      });
    }

    const seat = {
      TicketsSeats: seatFullString,
      MovieId: checkoutMovie.movieId,
      CinemaId: checkoutMovie.cinemaId,
    };

    const token = localStorage.getItem('token');

    if (token == null || token.length <= 0) {
      nav('/', { state: { user: null } });
      return;
    }

    const res = await fetch(`${Url}/movie-region-tickets/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        uid: user.id,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(seat),
    });

    if (res.status === 403) {
      nav('/', { state: { user: null } });
      return;
    }

    if (res.status === 200) {
      const json = await res.json();
      const data: MovieRegionTickets = json.data;

      var arraySeats = data.ticketsSeats.split(',');
      const arraySeatsAlreadyChosen: string[] = [];
      arraySeats.forEach((str) => {
        arraySeatsAlreadyChosen.push(str.replace(/\s/g, ''));
      });

      setSeatJoinList([]);
      setTicketsSeats(arraySeatsAlreadyChosen);
      setTimeout(() => {
        setLoadPayment(false);
        setSeatPurchasedSuccessfully(true);
      }, 2000);
    }
  };

  const handleButtonSkip = () => {
    if (whatClicked === 4) {
      setLoadPayment(true);
      document.body.style.overflow = 'hidden';
      updateSeatsBought();
    }

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

  const [whatButtonClicked, setWhatButtonClicked] = useState(0);

  useEffect(() => {
    if (whatButtonClicked === 1) {
      setPaymentSelectSeats([]);
      setPaymentKeyValue((prev) => {
        let updatedState = { ...prev };

        listFormPayment.forEach((el) => {
          const array = updatedState[el.formName];

          const newArray = array.map((seat) => {
            if (seat.isSelect === 1) {
              // setUncheck(seat);

              return { ...seat, isSelect: 0 };
            }

            if (seat.isSelect === 2) {
              return { ...seat, isSelect: 0 };
            }

            return seat;
          });

          updatedState = { ...updatedState, [el.formName]: newArray };
        });

        return updatedState;
      });
    }
  }, [whatButtonClicked, listFormPayment]);

  const handleExitSeatsSuccessfully = () => {
    setSeatPurchasedSuccessfully(false);
    document.body.style.overflow = 'auto';
    setWhatClicked(1);
  };

  const [mouseInnerDiv, setMouseInnerDiv] = useState(false);
  const [clickDivMain, setClickDivMain] = useState(false);

  const handleClickDivMain = () => {
    setClickDivMain(false);
    if (!mouseInnerDiv) {
      setClickDivMain(true);
    }
  };

  return (
    <Styled.ContainerMain onClick={handleClickDivMain} $whatclicked={whatClicked}>
      <TopPartCheckout
        user={user}
        clickDivMain={clickDivMain}
        setMouseInnerDiv={setMouseInnerDiv}
      />
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
                setWhatButtonClicked={setWhatButtonClicked}
              />
            </Styled.ContainerFirst>
          )}

          <ChoiceSeats
            whatClicked={whatClicked}
            seatJoinList={seatJoinList}
            ticketsSeats={ticketsSeats}
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
            user={user}
            checkoutMovie={checkoutMovie}
            whatClicked={whatClicked}
            listProducts={listProducts}
            setListProducts={setListProducts}
          />

          <MethodPayment whatClicked={whatClicked} totalValuePrice={totalValuePrice} />
        </Styled.ContainerLeftRightSide>

        {loadPayment && (
          <Styled.ContainerMainLoader>
            <Styled.ContainerLoader></Styled.ContainerLoader>
          </Styled.ContainerMainLoader>
        )}

        {seatPurchasedSuccessfully && (
          <Styled.WrapperMandatoryToChoose>
            <Styled.ContainerAlert>
              <Styled.WrapperSvgExit onClick={handleExitSeatsSuccessfully}>
                <FontAwesomeIcon icon={faXmark} />
              </Styled.WrapperSvgExit>
              <Styled.WrapperSvgWarning>
                <FontAwesomeIcon icon={faThumbsUp} />
              </Styled.WrapperSvgWarning>
              <Styled.WrapperPAlertAndSpanAlert>
                <Styled.PAlert>Compra Bem-Sucedida</Styled.PAlert>
                <Styled.SpanAlert>
                  {`Sua Sala é Sala 1 e seu Assento é: ${seatsWithoutWhiteSpace}`}
                </Styled.SpanAlert>
              </Styled.WrapperPAlertAndSpanAlert>

              <Styled.ButtonContinue onClick={handleExitSeatsSuccessfully}>
                CONTINUAR
              </Styled.ButtonContinue>
            </Styled.ContainerAlert>
          </Styled.WrapperMandatoryToChoose>
        )}

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
