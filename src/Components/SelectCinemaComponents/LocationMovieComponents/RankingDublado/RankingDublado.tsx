import { cinemaMovieProps } from '../LocationMovie/LocationMovie';
import * as Styled from './styled';

interface RankingDubladoProps {
  el: cinemaMovieProps;
  listHoursKeyValue: { [key: number]: string[] };
  handleClickHourMovie: (hour: string, el: cinemaMovieProps) => void;
}

const RankingDublado = ({ el, listHoursKeyValue, handleClickHourMovie }: RankingDubladoProps) => {
  return (
    <>
      {el.cinemaDTO.ranking == 'DUBLADO' && (
        <Styled.ContainerHoursRanking>
          <Styled.ContainerRanking>
            <Styled.SpanRanking>DUBLADO</Styled.SpanRanking>
          </Styled.ContainerRanking>
          <Styled.ContainerAll>
            {listHoursKeyValue !== null &&
              listHoursKeyValue[el.cinemaDTO.ranking].map((hour, i) => (
                <Styled.ContainerHoursMain key={i} onClick={() => handleClickHourMovie(hour, el)}>
                  {hour.includes('D') && (
                    <Styled.ContainerHours>
                      <Styled.PHour $p="1">{hour.replace(/[^0-9:]/g, '')}</Styled.PHour>
                    </Styled.ContainerHours>
                  )}
                </Styled.ContainerHoursMain>
              ))}
          </Styled.ContainerAll>
        </Styled.ContainerHoursRanking>
      )}
    </>
  );
};

export default RankingDublado;
