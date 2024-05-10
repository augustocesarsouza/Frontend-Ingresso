import { cinemaMovieProps } from '../LocationMovie/LocationMovie';
import * as Styled from './styled';

interface RankingLegendaVipProps {
  el: cinemaMovieProps;
  listHoursKeyValue: { [key: number]: string[] };
  handleClickHourMovie: (hour: string, el: cinemaMovieProps) => void;
}

const RankingLegendaVip = ({
  el,
  listHoursKeyValue,
  handleClickHourMovie,
}: RankingLegendaVipProps) => {
  return (
    <>
      {el.cinemaDTO.ranking == 'LEGENDADO,VIP' && el.IsOnlyLegVip !== 1 && (
        <Styled.ContainerHoursRanking>
          <Styled.ContainerRanking>
            <Styled.SpanRanking>LEGENDADO</Styled.SpanRanking>
          </Styled.ContainerRanking>
          <Styled.ContainerAll>
            {listHoursKeyValue !== null &&
              listHoursKeyValue[el.cinemaDTO.id].map((hour, i) => (
                <Styled.ContainerHoursMain key={i} onClick={() => handleClickHourMovie(hour, el)}>
                  {!hour.includes('V') && (
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

export default RankingLegendaVip;
