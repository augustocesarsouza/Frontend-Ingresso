import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import BlockSvg from '../../../Svg/BlockSvg';

interface MovieSeatsProps {
  barIncreases: number;
  handleSeatClicked: (seat: number, rowName: string) => void;
  seatJoinList: string[];
  setMouseEnterOrLeaveZoom: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieSeats = ({
  barIncreases,
  handleSeatClicked,
  seatJoinList,
  setMouseEnterOrLeaveZoom,
}: MovieSeatsProps) => {
  const [numberRow, setNumberRow] = useState(26);
  const [listRow, setListRow] = useState<number[] | null>(null);
  const [listRowName, setListRowName] = useState<string[] | null>(null);

  useEffect(() => {
    const listRow: number[] = [];
    for (let i = 1; i <= numberRow; i++) {
      listRow.push(i);
    }
    setListRow(listRow);
    const listName = ['m', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    setListRowName(listName);
  }, [numberRow]);

  useEffect(() => {
    console.log(listRowName);
  }, [listRowName]);

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
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>M</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`M ${n}`}
                      $containerseatsball=""
                      $seatjoinlist={seatJoinList}
                      $seatsletter="m"
                      onClick={() => handleSeatClicked(n, 'M')}
                    >
                      M{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>L</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`L ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="l"
                      onClick={() => handleSeatClicked(n, 'L')}
                    >
                      L{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>K</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`K ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="k"
                      onClick={() => handleSeatClicked(n, 'K')}
                    >
                      K{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>J</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`J ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="j"
                      onClick={() => handleSeatClicked(n, 'J')}
                    >
                      J{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>I</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`I ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="i"
                      onClick={() => handleSeatClicked(n, 'I')}
                    >
                      I{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>H</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`H ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="h"
                      onClick={() => handleSeatClicked(n, 'H')}
                    >
                      H{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>G</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`G ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="g"
                      onClick={() => handleSeatClicked(n, 'G')}
                    >
                      G{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>F</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`F ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="f"
                      onClick={() => handleSeatClicked(n, 'F')}
                    >
                      F{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>E</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`E ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="e"
                      onClick={() => handleSeatClicked(n, 'E')}
                    >
                      E{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>D</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <div key={n}>
                      {n === 3 || n === 6 || n === 7 || n === 10 || n === 13 ? (
                        <Styled.ContainerSeatsBall
                          key={n}
                          $numberrow={n}
                          $letternumber={`D ${n}`}
                          $seatjoinlist={seatJoinList}
                          $containerseatsball="notappear"
                          $seatsletter="d"
                          onMouseEnter={() => handleMouseEnter(n)}
                          onMouseLeave={handleLeaveEnter}
                        >
                          {entryDiv === n && n < 20 ? (
                            <Styled.ContainerSeatsBall
                              key={n}
                              $numberrow={n}
                              $letternumber={`D ${n}`}
                              $seatjoinlist={seatJoinList}
                              $containerseatsball="notappear"
                              $seatsletter="d"
                              onClick={() => handleSeatClicked(n, 'D')}
                            >
                              D{n}
                            </Styled.ContainerSeatsBall>
                          ) : (
                            <FontAwesomeIcon icon={faWheelchair} />
                          )}
                        </Styled.ContainerSeatsBall>
                      ) : (
                        <>
                          {entryDivAC === n && n < 20 ? (
                            <Styled.ContainerSeatsBall
                              key={n}
                              $numberrow={n}
                              $letternumber={`D ${n}`}
                              $seatjoinlist={seatJoinList}
                              $containerseatsball="notappear"
                              $seatsletter="d"
                              onClick={() => handleSeatClicked(n, 'D')}
                            >
                              D{n}
                            </Styled.ContainerSeatsBall>
                          ) : (
                            <>
                              {n < 20 ? (
                                <Styled.ContainerSeatsBall
                                  $numberrow={n}
                                  $letternumber={`D ${n}`}
                                  $seatjoinlist={seatJoinList}
                                  $containerseatsball="notappear"
                                  $seatsletter="d"
                                  onMouseEnter={() => handleMouseEnterAC(n)}
                                  onMouseLeave={handleLeaveEnterAC}
                                >
                                  AC
                                </Styled.ContainerSeatsBall>
                              ) : (
                                <>
                                  {n === 21 ||
                                    (n === 22 && (
                                      <Styled.ContainerBlockSvg>
                                        <BlockSvg />
                                      </Styled.ContainerBlockSvg>
                                    ))}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                      {n === 20 ||
                        (n === 21 && (
                          <Styled.ContainerBlockSvg>
                            <BlockSvg />
                          </Styled.ContainerBlockSvg>
                        ))}
                    </div>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <div></div>
          <div></div>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>C</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`C ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="c"
                      onClick={() => handleSeatClicked(n, 'C')}
                    >
                      C{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>B</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`B ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="b"
                      onClick={() => handleSeatClicked(n, 'B')}
                    >
                      B{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
          <Styled.ContainerNameNumberRow>
            <Styled.PSeats>A</Styled.PSeats>
            <Styled.ContainerNumberRow>
              <Styled.ContainerSeatsRow>
                {listRow !== null &&
                  listRow.map((n) => (
                    <Styled.ContainerSeatsBall
                      key={n}
                      $numberrow={n}
                      $letternumber={`A ${n}`}
                      $seatjoinlist={seatJoinList}
                      $containerseatsball="notappear"
                      $seatsletter="a"
                      onClick={() => handleSeatClicked(n, 'A')}
                    >
                      A{n}
                    </Styled.ContainerSeatsBall>
                  ))}
              </Styled.ContainerSeatsRow>
            </Styled.ContainerNumberRow>
          </Styled.ContainerNameNumberRow>
        </Styled.ContainerNameRow>
        <Styled.ContainerScreen>TELA</Styled.ContainerScreen>
      </Styled.ContainerSeats>
    </Styled.ZoomContainer>
  );
};

export default MovieSeats;
