import { faArrowsLeftRight, faBan, faList, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import MovieSeats from '../MovieSeats/MovieSeats';
import * as Styled from './styled';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserSvg from '../../../Svg/UserSvg';
import CaptionAll from '../CaptionAll/CaptionAll';

interface ChoiceSeatsProps {
  whatClicked: number;
  seatJoinList: string[];
  handleSeatClicked: (seat: number, rowName: string) => void;
}

const ChoiceSeats = ({ whatClicked, seatJoinList, handleSeatClicked }: ChoiceSeatsProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [topValue, setTopValue] = useState(81);

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

  const [mouseEnterOrLeaveZoom, setMouseEnterOrLeaveZoom] = useState(false);

  useEffect(() => {
    if (mouseEnterOrLeaveZoom) {
      document.addEventListener('wheel', handleScroll);
    }
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
  }, [isDragging, mouseEnterOrLeaveZoom]);

  useEffect(() => {
    console.log(barIncreases);
  }, [barIncreases]);

  return (
    <>
      {whatClicked === 1 && (
        <Styled.ContainerSecond>
          <Styled.ContainerTopYourSeats>
            <Styled.SpanSecond>Escolha seus assentos:</Styled.SpanSecond>
          </Styled.ContainerTopYourSeats>
          <MovieSeats
            barIncreases={barIncreases}
            handleSeatClicked={handleSeatClicked}
            seatJoinList={seatJoinList}
            setMouseEnterOrLeaveZoom={setMouseEnterOrLeaveZoom}
          />
          <Styled.ContainerParaIncreases>
            <Styled.ContainerParaMain>
              <Styled.SpanIncreases $topvalue={barIncreases}></Styled.SpanIncreases>
              <Styled.ContainerBallIncreases
                onMouseDown={handleMouseDown}
                $topvalue={topValue}
              ></Styled.ContainerBallIncreases>
            </Styled.ContainerParaMain>
          </Styled.ContainerParaIncreases>

          <CaptionAll />
        </Styled.ContainerSecond>
      )}
    </>
  );
};

export default ChoiceSeats;
