import * as Styled from './styled';
import { useState, memo } from 'react';
import { next7DaysProps } from '../SelectCinema/SelectCinema';

interface DateForFilmProps {
  next7Days: next7DaysProps[];
}

const DateForFilm = ({ next7Days }: DateForFilmProps) => {
  const [clickIn, setClickIn] = useState('0');

  const handleClickDate = (day: string) => {
    setClickIn(day);
  };

  return (
    <Styled.ContainerDataMovieMain>
      {next7Days.length > 0 &&
        next7Days.map((day, index) => (
          <Styled.ContainerDataMovie onClick={() => handleClickDate(String(index))} key={index}>
            <Styled.Span $span={String(index)} $clickin={String(clickIn)}>
              {day.dayYear}
            </Styled.Span>
            <Styled.Span $span={String(index)} $clickin={String(clickIn)}>
              {day.weekDay}
            </Styled.Span>
          </Styled.ContainerDataMovie>
        ))}
    </Styled.ContainerDataMovieMain>
  );
};

export default memo(DateForFilm);
