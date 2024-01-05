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
import CreditCard from '../../Components/CheckoutComponents/CardForPaymentMethodComponent/CreditCard/CreditCard';

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

  const [isDragging, setIsDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [topValue, setTopValue] = useState(81);

  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const [barIncreases, setBarIncreases] = useState(0);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaY = e.clientY - initialY;
      const newTopValue = topValue + deltaY;

      const invertedTopValue = 85 - newTopValue;

      if (invertedTopValue >= -5 && invertedTopValue <= 85) {
        setBarIncreases(invertedTopValue);
      }

      if (newTopValue >= -5 && newTopValue <= 85) {
        setTopValue(newTopValue);
      }

      setInitialY(e.clientY);
    }
  };

  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    setBarIncreases((prevValue) => {
      const newValue = deltaY > 0 ? Math.max(0, prevValue - 3) : Math.min(85, prevValue + 3);
      const invertedValue = 85 - newValue;
      setTopValue(invertedValue);

      return newValue;
    });
  };

  useEffect(() => {
    document.addEventListener('wheel', handleScroll);
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isDragging]);

  const [seatJoin, setSeatJoin] = useState('');
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
    // setSeatJoin(`${rowName} ${seat}`);
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

  const [activeLabel, setActiveLabel] = useState(false);
  const [mouseEnterLabel, setMouseEnterLabel] = useState('');
  const [clickLabel, setClickLabel] = useState('');
  const [mouseEnterDebit, setMouseEnterDebit] = useState(false);

  const handleClickLabel = (value: string) => {
    setActiveLabel((prev) => !prev);

    setClickLabel((prev) => (prev.length <= 0 ? value : ''));
  };

  const handleClickLabelMain = (value: string) => {
    if (!mouseEnterDebit) {
      setActiveLabel((prev) => !prev);
      setClickLabel((prev) => (prev.length <= 0 ? value : ''));
    }
  };

  const handleMouseEnter = (value: string) => {
    setMouseEnterDebit(true);
    setMouseEnterLabel(value);
  };

  const handleMouseLeave = (value: string) => {
    setMouseEnterDebit(false);
    setMouseEnterLabel(value);
  };

  useEffect(() => {
    // console.log(clickLabel);
  }, [clickLabel]);

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
          {whatClicked === 1 && (
            <Styled.ContainerSecond>
              <Styled.ContainerTopYourSeats>
                <Styled.SpanSecond>Escolha seus assentos:</Styled.SpanSecond>
              </Styled.ContainerTopYourSeats>
              <MovieSeats
                barIncreases={barIncreases}
                handleSeatClicked={handleSeatClicked}
                seatJoin={seatJoin}
                seatJoinList={seatJoinList}
              />
              <Styled.ContainerParaIncreases>
                <Styled.ContainerParaMain>
                  <Styled.SpanIncreases $topvalue={barIncreases}></Styled.SpanIncreases>
                  <Styled.ContainerBallIncreases
                    onMouseDown={handleMouseDown}
                    ref={containerRef}
                    $topvalue={topValue}
                  ></Styled.ContainerBallIncreases>
                </Styled.ContainerParaMain>
              </Styled.ContainerParaIncreases>
            </Styled.ContainerSecond>
          )}
          {whatClicked === 2 && (
            <TicketTypes
              listFormPayment={listFormPayment}
              paymentSelectSeats={paymentSelectSeats}
              seatJoinList={seatJoinList}
              paymentKeyValue={paymentKeyValue}
              handleClickSeats={handleClickSeats}
            />
          )}

          <PopcornSelect
            checkoutMovie={checkoutMovie}
            whatClicked={whatClicked}
            listProducts={listProducts}
            setListProducts={setListProducts}
          />

          {whatClicked === 4 && (
            <Styled.ContainerPaymentForm>
              <Styled.ContainerMainPaymentMethods>
                <Styled.ContainerSvgCardPaymentMethod>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <Styled.P>FORMAS DE PAGAMENTO</Styled.P>
                </Styled.ContainerSvgCardPaymentMethod>
              </Styled.ContainerMainPaymentMethods>
              <Styled.ContainerTypesPayment>
                <CreditCard
                  clickLabel={clickLabel}
                  totalValuePrice={totalValuePrice}
                  activeLabel={activeLabel}
                  mouseEnterLabel={mouseEnterLabel}
                  handleClickLabelMain={handleClickLabelMain}
                  handleClickLabel={handleClickLabel}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />

                <Styled.WrapperCreditCard
                  $creditcard="2"
                  $clicklabel={clickLabel}
                  onClick={() => handleClickLabelMain('2')}
                >
                  <Styled.ContainerAllCreditCardSpanInfo>
                    <Styled.ContainerCheckbox onClick={() => handleClickLabel('2')}>
                      <Styled.Label
                        $activelabel={String(activeLabel)}
                        $label="2"
                        $mouseenterlabel={mouseEnterLabel}
                        onMouseEnter={() => handleMouseEnter('2')}
                        onMouseLeave={() => handleMouseLeave('')}
                      >
                        {clickLabel === '2' && <>{activeLabel && <CheckSvg />}</>}
                      </Styled.Label>
                    </Styled.ContainerCheckbox>
                    <Styled.WrapperCreditCardInfo
                      onMouseEnter={() => handleMouseEnter('2')}
                      onMouseLeave={() => handleMouseLeave('')}
                      onClick={() => handleClickLabel('2')}
                    >
                      <Styled.ContainerSvgCardCreditSpan>
                        <Styled.WrapperCreditCardSvg>
                          <CardCredit />
                          <Styled.SpanCardCredit>D</Styled.SpanCardCredit>
                        </Styled.WrapperCreditCardSvg>
                        <Styled.Span $span="3">
                          Cartão de <Styled.SpanCredit $spancd="debito">Débito</Styled.SpanCredit>
                        </Styled.Span>
                      </Styled.ContainerSvgCardCreditSpan>
                      <Styled.Span $span="4">{`R$ ${totalValuePrice}`}</Styled.Span>
                    </Styled.WrapperCreditCardInfo>
                  </Styled.ContainerAllCreditCardSpanInfo>
                  {clickLabel === '2' && (
                    <div>
                      <h1>aqui</h1>
                    </div>
                  )}
                </Styled.WrapperCreditCard>
                <Styled.WrapperCreditCard
                  $creditcard="3"
                  $clicklabel={clickLabel}
                  onClick={() => handleClickLabelMain('3')}
                >
                  <Styled.ContainerCheckbox onClick={() => handleClickLabel('3')}>
                    <Styled.Label
                      $activelabel={String(activeLabel)}
                      $label="3"
                      $mouseenterlabel={mouseEnterLabel}
                      onMouseEnter={() => handleMouseEnter('3')}
                      onMouseLeave={() => handleMouseLeave('')}
                    >
                      {clickLabel === '3' && <>{activeLabel && <CheckSvg />}</>}
                    </Styled.Label>
                  </Styled.ContainerCheckbox>
                  <Styled.WrapperCreditCardInfo
                    onMouseEnter={() => handleMouseEnter('3')}
                    onMouseLeave={() => handleMouseLeave('')}
                    onClick={() => handleClickLabel('3')}
                  >
                    <Styled.ContainerSvgCardCreditSpan>
                      <Styled.WrapperPayImg>
                        <Styled.ImgPay src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704291411/Pay_vzg6as.png" />
                      </Styled.WrapperPayImg>
                    </Styled.ContainerSvgCardCreditSpan>
                    <Styled.Span $span="5">{`R$ ${totalValuePrice}`}</Styled.Span>
                  </Styled.WrapperCreditCardInfo>
                </Styled.WrapperCreditCard>
                <Styled.WrapperCreditCard
                  $creditcard="4"
                  $clicklabel={clickLabel}
                  onClick={() => handleClickLabelMain('4')}
                >
                  <Styled.ContainerCheckbox onClick={() => handleClickLabel('4')}>
                    <Styled.Label
                      $activelabel={String(activeLabel)}
                      $label="4"
                      $mouseenterlabel={mouseEnterLabel}
                      onMouseEnter={() => handleMouseEnter('4')}
                      onMouseLeave={() => handleMouseLeave('')}
                    >
                      {clickLabel === '4' && <>{activeLabel && <CheckSvg />}</>}
                    </Styled.Label>
                  </Styled.ContainerCheckbox>
                  <Styled.WrapperCreditCardInfo
                    onMouseEnter={() => handleMouseEnter('4')}
                    onMouseLeave={() => handleMouseLeave('')}
                    onClick={() => handleClickLabel('4')}
                  >
                    <Styled.WrapperPayPalImg>
                      <Styled.ImgPay src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704292650/PayPal-Logo_shc49l.png" />
                    </Styled.WrapperPayPalImg>

                    <Styled.Span $span="6">{`R$ ${totalValuePrice}`}</Styled.Span>
                  </Styled.WrapperCreditCardInfo>
                </Styled.WrapperCreditCard>
              </Styled.ContainerTypesPayment>
            </Styled.ContainerPaymentForm>
          )}
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
