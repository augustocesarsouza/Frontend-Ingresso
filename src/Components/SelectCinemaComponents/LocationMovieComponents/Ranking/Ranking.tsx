import { cinemaMovieProps } from '../LocationMovie/LocationMovie';
import * as Styled from './styled';

interface RankingProps {
  el: cinemaMovieProps;
  listHoursKeyValue: { [key: number]: string[] };
  handleClickHourMovie: (hour: string, el: cinemaMovieProps) => void;
  rankingType: string;
}

const Ranking = ({ el, listHoursKeyValue, handleClickHourMovie, rankingType }: RankingProps) => {
  // console.log(listHoursKeyValue);

  const renderRanking = (rankingLabel: string) => (
    <Styled.ContainerHoursRanking>
      <Styled.ContainerRanking>
        <Styled.SpanRanking>{rankingLabel}</Styled.SpanRanking>
      </Styled.ContainerRanking>
      <Styled.ContainerAll>
        {listHoursKeyValue !== null &&
          listHoursKeyValue[el.cinemaDTO.id].map((hour, i) => (
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
  );

  return <>{el.cinemaDTO.ranking === rankingType && renderRanking(rankingType)}</>;
};

export default Ranking;
