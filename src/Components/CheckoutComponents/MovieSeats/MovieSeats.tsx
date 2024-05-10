import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import BlockSvg from '../../../Svg/BlockSvg';
import { Fragment } from 'react';
import UserSvg from '../../../Svg/UserSvg';

interface MovieSeatsProps {
  barIncreases: number;
  seatJoinList: string[];
  ticketsSeats: string[];
  handleSeatClicked: (seat: number, rowName: string) => void;
  setMouseEnterOrLeaveZoom: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieSeats = ({
  barIncreases,
  seatJoinList,
  ticketsSeats,
  handleSeatClicked,
  setMouseEnterOrLeaveZoom,
}: MovieSeatsProps) => {
  const [numberRow] = useState(26);
  const [listRow, setListRow] = useState<number[] | null>(null);
  const [listRowName, setListRowName] = useState<string[] | null>(null);
  const [listRowNameNotAppear, setListRowNameNotAppear] = useState<string[]>([]);
  const [listAssentDif, setListAssentDif] = useState<string[]>([]);

  useEffect(() => {
    const listRow: number[] = [];
    for (let i = 1; i <= numberRow; i++) {
      listRow.push(i);
    }
    setListRow(listRow);
    const listName = ['m', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    setListRowName(listName);

    const listNameNotAppear = [
      'l1',
      'k1',
      'j1',
      'i1',
      'h1',
      'g1',
      'f1',
      'e1',
      'd1',
      'c1',
      'b1',
      'a1',
      'd1',
      'c1',
      'b1',
      'd2',
      'a1',
      'a3',
      'a4',
      'c2',
      'b2',
      'a2',
      'i22',
      'h22',
      'g22',
      'f22',
      'e22',
      'i23',
      'h23',
      'g23',
      'f23',
      'e23',
      'i24',
      'h24',
      'g24',
      'f24',
      'e24',
      'i25',
      'h25',
      'g25',
      'f25',
      'e25',
      'i26',
      'h26',
      'g26',
      'f26',
      'e26',
      'd14',
      'd15',
      'd16',
      'd17',
      'a16',
      'a17',
      'c20',
      'b20',
      'a20',
      'a26',
      'l18',
      'k18',
      'j18',
      'i18',
      'h18',
      'g18',
      'f18',
      'e18',
      'd18',
      'c18',
      'b18',
      'a18',
      'l19',
      'k19',
      'j19',
      'i19',
      'h19',
      'g19',
      'f19',
      'e19',
      'd19',
      'c19',
      'b19',
      'a19',
    ];

    const listAssentDif = ['d3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd12', 'd13'];
    setListAssentDif(listAssentDif);

    setListRowNameNotAppear(listNameNotAppear);
  }, [numberRow]);

  const [entryDiv, setEntryDiv] = useState(0);

  const handleMouseEnter = (number: number) => {
    setEntryDiv(number);
  };

  const handleLeaveEnter = () => {
    setEntryDiv(0);
  };

  const [entryDivAC, setEntryDivAC] = useState(0);

  const handleMouseEnterAC = (number: number) => {
    setEntryDivAC(number);
  };

  const handleLeaveEnterAC = () => {
    setEntryDivAC(0);
  };

  const containerSeatsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerSeatsRef === null) return;

    if (barIncreases <= 9) {
      containerSeatsRef.current.style.transform = `scale(1) translate(0, 0)`;
    } else {
      containerSeatsRef.current.style.transform = `scale(1.${barIncreases}) translate(0, 0)`;
    }
  }, [barIncreases]);

  const handleMouseEnterZoomContainer = () => {
    setMouseEnterOrLeaveZoom(true);
  };

  const handleMouseLeaveZoomContainer = () => {
    setMouseEnterOrLeaveZoom(false);
  };

  return (
    <Styled.ZoomContainer
      onMouseEnter={handleMouseEnterZoomContainer}
      onMouseLeave={handleMouseLeaveZoomContainer}
    >
      <Styled.ContainerSeats ref={containerSeatsRef}>
        <Styled.ContainerNameRow>
          {listRowName !== null &&
            listRowName.map((ro) => (
              <Fragment key={ro}>
                {ro !== 'd' ? (
                  <Styled.ContainerNameNumberRow>
                    <Styled.PSeats>{`${ro.toUpperCase()}`}</Styled.PSeats>
                    <Styled.ContainerNumberRow>
                      <Styled.ContainerSeatsRow>
                        {listRow !== null &&
                          listRow.map((n) =>
                            ticketsSeats.some((sei) => sei === `${ro.toUpperCase()}${n}`) ? (
                              <Styled.ContainerBall $ball="3" key={n}>
                                <UserSvg />
                              </Styled.ContainerBall>
                            ) : (
                              <Styled.ContainerSeatsBall
                                key={n}
                                $seatjoinlist={seatJoinList}
                                $seatsjoinnumber={`${ro}${n}`}
                                $seatsjoinnumberuppercase={`${ro.toUpperCase()} ${n}`}
                                $listassentdif={listAssentDif}
                                $listrownamenotappear={listRowNameNotAppear}
                                onClick={() => {
                                  if (!listRowNameNotAppear.includes(`${ro}${n}`)) {
                                    handleSeatClicked(n, `${ro.toUpperCase()}`);
                                  }
                                }}
                              >
                                {`${ro.toUpperCase()}${n}`}
                              </Styled.ContainerSeatsBall>
                            )
                          )}
                      </Styled.ContainerSeatsRow>
                    </Styled.ContainerNumberRow>
                  </Styled.ContainerNameNumberRow>
                ) : (
                  <Styled.ContainerNameNumberRow>
                    <Styled.PSeats>D</Styled.PSeats>
                    <Styled.ContainerNumberRow>
                      <Styled.ContainerSeatsRow>
                        {listRow !== null &&
                          listRow.map((n) => (
                            <Fragment key={n}>
                              {n === 3 || n === 6 || n === 7 || n === 10 || n === 13 ? (
                                <Styled.ContainerSeatsBall
                                  $seatjoinlist={seatJoinList}
                                  $seatsjoinnumber={`${ro}${n}`}
                                  $seatsjoinnumberuppercase={`${ro.toUpperCase()} ${n}`}
                                  $listassentdif={listAssentDif}
                                  $listrownamenotappear={listRowNameNotAppear}
                                  onMouseEnter={() => handleMouseEnter(n)}
                                  onMouseLeave={handleLeaveEnter}
                                >
                                  {entryDiv === n && n < 20 ? (
                                    <Styled.ContainerSeatsBall
                                      key={n}
                                      $seatjoinlist={seatJoinList}
                                      $seatsjoinnumber={`${ro}${n}`}
                                      $seatsjoinnumberuppercase={`${ro.toUpperCase()} ${n}`}
                                      $listassentdif={listAssentDif}
                                      $listrownamenotappear={listRowNameNotAppear}
                                      onMouseEnter={() => handleMouseEnterAC(n)}
                                      onMouseLeave={handleLeaveEnterAC}
                                      onClick={() => {
                                        if (!listRowNameNotAppear.includes(`${ro}${n}`)) {
                                          handleSeatClicked(n, `${ro.toUpperCase()}`);
                                        }
                                      }}
                                    >
                                      D{n}
                                    </Styled.ContainerSeatsBall>
                                  ) : (
                                    <FontAwesomeIcon icon={faWheelchair} />
                                  )}
                                </Styled.ContainerSeatsBall>
                              ) : entryDivAC === n && n < 20 ? (
                                <Styled.ContainerSeatsBall
                                  $seatjoinlist={seatJoinList}
                                  $seatsjoinnumber={`${ro}${n}`}
                                  $seatsjoinnumberuppercase={`${ro.toUpperCase()} ${n}`}
                                  $listassentdif={listAssentDif}
                                  $listrownamenotappear={listRowNameNotAppear}
                                  onMouseEnter={() => handleMouseEnterAC(n)}
                                  onMouseLeave={handleLeaveEnterAC}
                                  onClick={() => {
                                    if (!listRowNameNotAppear.includes(`${ro}${n}`)) {
                                      handleSeatClicked(n, `${ro.toUpperCase()}`);
                                    }
                                  }}
                                >
                                  D{n}
                                </Styled.ContainerSeatsBall>
                              ) : n < 20 ? (
                                <Styled.ContainerSeatsBall
                                  $seatjoinlist={seatJoinList}
                                  $seatsjoinnumber={`${ro}${n}`}
                                  $seatsjoinnumberuppercase={`${ro.toUpperCase()} ${n}`}
                                  $listassentdif={listAssentDif}
                                  $listrownamenotappear={listRowNameNotAppear}
                                  onMouseEnter={() => handleMouseEnterAC(n)}
                                  onMouseLeave={handleLeaveEnterAC}
                                >
                                  AC
                                </Styled.ContainerSeatsBall>
                              ) : (
                                n === 21 ||
                                (n === 22 && (
                                  <Styled.ContainerBlockSvg>
                                    <BlockSvg />
                                  </Styled.ContainerBlockSvg>
                                ))
                              )}
                              {n === 20 ||
                                (n === 21 && (
                                  <Styled.ContainerBlockSvg>
                                    <BlockSvg />
                                  </Styled.ContainerBlockSvg>
                                ))}
                            </Fragment>
                          ))}
                      </Styled.ContainerSeatsRow>
                    </Styled.ContainerNumberRow>
                  </Styled.ContainerNameNumberRow>
                )}
              </Fragment>
            ))}
        </Styled.ContainerNameRow>
        <Styled.ContainerScreen>TELA</Styled.ContainerScreen>
      </Styled.ContainerSeats>
    </Styled.ZoomContainer>
  );
};

export default MovieSeats;
