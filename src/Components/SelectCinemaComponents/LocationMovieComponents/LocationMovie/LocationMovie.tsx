import { useNavigate } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';
import { movieSelectedProps, next7DaysProps } from '../../SelectCinema/SelectCinema';
import InfoMovieLocalSeatsPriceDetails from '../InfoMovieLocalSeatsPriceDetails/InfoMovieLocalSeatsPriceDetails';
import Ranking from '../Ranking/Ranking';
import RankingLegendaVip from '../RankingLegendaVip/RankingLegendaVip';
import RankingLegendaVipSecond from '../RankingLegendaVipSecond/RankingLegendaVipSecond';
import * as Styled from './styled';
import { useState, useEffect } from 'react';
import { ObjUser } from '../../../LoginComponents/SectionFirst/Form/Form';

export interface cinemaMovieProps {
  cinemaDTO: CinemaDTO;
  screeningSchedule: string;
  IsOnlyLegVip: number;
  IsOnlyLegImax: number;
  IsOnlyDubVip: number;
  IsOnlyDubImax: number;
  IsOnlyDubLeg: number;
  IsOnlyLegVipImax: number;
}

interface CinemaDTO {
  district: string;
  nameCinema: string;
  ranking: string;
}

interface LocationMovieProps {
  movieSelected: movieSelectedProps;
  rankingMovieList: string[];
  dataSelected: next7DaysProps;
  weekDay: string;
  userObj: ObjUser;
}

const LocationMovie = ({
  movieSelected,
  rankingMovieList,
  dataSelected,
  weekDay,
  userObj,
}: LocationMovieProps) => {
  const [cinemaMovie, setCinemaMovie] = useState<cinemaMovieProps[] | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (movieSelected === null) return;

    let location = localStorage.getItem('lastLocation');
    if (location === null) {
      location = 'Campinas';
    }

    const { id: idMovie } = movieSelected;
    getRegionCinema(location, idMovie);
  }, [movieSelected]);

  const getRegionCinema = async (location = 'Campinas', idMovie: string) => {
    const res = await fetch(`${Url}/cinemaMovie/getAll/${location}/${idMovie}`);
    if (res.status === 200) {
      const json = await res.json();
      const data = json.data;

      setCinemaMovie(data);
    }
  };

  const [listHoursKeyValue, setListHoursKeyValue] = useState<{ [key: number]: string[] | null }>(
    null
  );

  useEffect(() => {
    if (cinemaMovie === null) return;
    // console.log(cinemaMovie);

    cinemaMovie.forEach((el) => {
      const hours = el.screeningSchedule.split(',');
      setListHoursKeyValue((prev) => {
        const objKey = {
          ...prev,
          [el.cinemaDTO.ranking]: hours,
        };
        return objKey;
      });
    });
  }, [cinemaMovie]);

  const [listFilterRegion, setListFilterRegion] = useState<cinemaMovieProps[]>([]);

  useEffect(() => {
    if (cinemaMovie === null) return;

    const rankingMap = {
      'DUBLADO,LEGENDADO': 'IsOnlyDubLeg',
      'LEGENDADO,VIP': 'IsOnlyLegVip',
      'LEGENDADO,IMAX': 'IsOnlyLegImax',
      'DUBLADO,VIP': 'IsOnlyDubVip',
      'DUBLADO,IMAX': 'IsOnlyDubImax',
      'LEGENDADO,VIP,IMAX': 'IsOnlyLegVipImax',
    };

    const stringJoin = rankingMovieList.length >= 2 ? rankingMovieList.join() : rankingMovieList[0];

    let listString = cinemaMovie
      .filter((mov) => {
        const movRanking = mov.cinemaDTO.ranking;
        return rankingMovieList.length >= 2
          ? movRanking === stringJoin
          : movRanking.includes(stringJoin);
      })
      .map((mov) => {
        Object.keys(rankingMap).forEach(
          (key) => (mov[rankingMap[key]] = key === stringJoin ? 1 : 0)
        );
        return mov;
      });

    setListFilterRegion(listString);
  }, [rankingMovieList, cinemaMovie]);

  const handleClickHourMovie = (hour: string, el: cinemaMovieProps) => {
    let dateMovieString = '';
    if (dataSelected.weekDay === 'Hoje') {
      dateMovieString = `${weekDay} ${dataSelected.dayYear} ${hour.replace(/[^0-9:]/g, '')}`;
    } else {
      dateMovieString = `${dataSelected.weekDay} ${dataSelected.dayYear} ${hour.replace(
        /[^0-9:]/g,
        ''
      )}`;
    }

    const checkoutMovie = {
      id: movieSelected.id,
      movie: movieSelected.title,
      imgUrl: movieSelected.imgUrl,
      locationMovie: el.cinemaDTO.nameCinema,
      room: 1,
      dateMovie: dateMovieString,
      ranking: el.cinemaDTO.ranking,
    };

    nav('/checkout', { state: { user: userObj, checkoutMovie } });
  };

  return (
    <>
      {listFilterRegion.length >= 0 && rankingMovieList.length > 0 ? (
        <>
          {listFilterRegion.map((el, index) => (
            <Styled.ContainerCinemaRegionHours key={index}>
              <InfoMovieLocalSeatsPriceDetails el={el} />

              <Ranking
                el={el}
                listHoursKeyValue={listHoursKeyValue}
                handleClickHourMovie={handleClickHourMovie}
                rankingType="DUBLADO"
              />

              <Ranking
                el={el}
                listHoursKeyValue={listHoursKeyValue}
                handleClickHourMovie={handleClickHourMovie}
                rankingType="LEGENDADO"
              />

              <RankingLegendaVip el={el} listHoursKeyValue={listHoursKeyValue} />
              <RankingLegendaVipSecond el={el} listHoursKeyValue={listHoursKeyValue} />
            </Styled.ContainerCinemaRegionHours>
          ))}
        </>
      ) : (
        <>
          {cinemaMovie !== null &&
            cinemaMovie.map((el, index) => (
              <Styled.ContainerCinemaRegionHours key={index}>
                <InfoMovieLocalSeatsPriceDetails el={el} />

                <Ranking
                  el={el}
                  listHoursKeyValue={listHoursKeyValue}
                  handleClickHourMovie={handleClickHourMovie}
                  rankingType="DUBLADO"
                />
                <Ranking
                  el={el}
                  listHoursKeyValue={listHoursKeyValue}
                  handleClickHourMovie={handleClickHourMovie}
                  rankingType="LEGENDADO"
                />
                <RankingLegendaVip el={el} listHoursKeyValue={listHoursKeyValue} />
                <RankingLegendaVipSecond el={el} listHoursKeyValue={listHoursKeyValue} />
              </Styled.ContainerCinemaRegionHours>
            ))}
        </>
      )}
    </>
  );
};

export default LocationMovie;
