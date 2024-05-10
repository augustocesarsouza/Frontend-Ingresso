import { cinemaMovieProps } from '../LocationMovie/LocationMovie';
import * as Styled from './styled';

interface RankingLegendaVipSecondProps {
  el: cinemaMovieProps;
  listHoursKeyValue: { [key: number]: string[] };
  handleClickHourMovie: (hour: string, el: cinemaMovieProps) => void;
}

const RankingLegendaVipSecond = ({
  el,
  listHoursKeyValue,
  handleClickHourMovie,
}: RankingLegendaVipSecondProps) => {
  return (
    <>
      {el.cinemaDTO.ranking == 'LEGENDADO,VIP' && (
        <Styled.ContainerHoursRanking>
          <Styled.ContainerRanking>
            <Styled.SpanRanking>LEGENDADO</Styled.SpanRanking>
            <Styled.SpanRanking>VIP</Styled.SpanRanking>
          </Styled.ContainerRanking>
          <Styled.ContainerAll>
            {listHoursKeyValue !== null &&
              listHoursKeyValue[el.cinemaDTO.id].map((hour, i) => (
                <Styled.ContainerHoursMain key={i} onClick={() => handleClickHourMovie(hour, el)}>
                  {hour.includes('LV') && (
                    <Styled.ContainerHours>
                      <Styled.PHour $p="1">{hour.slice(0, 6)}</Styled.PHour>
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

export default RankingLegendaVipSecond;
