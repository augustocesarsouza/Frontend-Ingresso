import { Url } from '../../../../Utils/Url';
import { movieSelectedProps } from '../../SelectCinema/SelectCinema';
import InfoMovieLocalSeatsPriceDetails from '../InfoMovieLocalSeatsPriceDetails/InfoMovieLocalSeatsPriceDetails';
import RankingDublado from '../RankingDublado/RankingDublado';
import RankingLegenda from '../RankingLegenda/RankingLegenda';
import RankingLegendaVip from '../RankingLegendaVip/RankingLegendaVip';
import RankingLegendaVipSecond from '../RankingLegendaVipSecond/RankingLegendaVipSecond';
import * as Styled from './styled';
import { useState, useEffect, memo } from 'react';

export interface cinemaMovieProps {
  cinemaDTO: CinemaDTO;
  screeningSchedule: string;
  IsOnlyLegVip: number;
  IsOnlyLegImax: number;
  IsOnlyDubVip: number;
  IsOnlyDubImax: number;
}

interface CinemaDTO {
  district: string;
  nameCinema: string;
  ranking: string;
}

interface LocationMovieProps {
  movieSelected: movieSelectedProps;
  rankingMovieList: string[];
}

const LocationMovie = ({ movieSelected, rankingMovieList }: LocationMovieProps) => {
  const [cinemaMovie, setCinemaMovie] = useState<cinemaMovieProps[] | null>(null);

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

    if (rankingMovieList.length >= 2) {
      const stringJoin = rankingMovieList.join();

      // let listString = cinemaMovie.filter((mov) => mov.cinemaDTO.ranking === stringJoin);
      if (stringJoin === 'LEGENDADO,VIP') {
        let listString = cinemaMovie
          .filter((mov) => mov.cinemaDTO.ranking === stringJoin)
          .map((mov) => {
            mov.IsOnlyLegVip = 1;
            return mov;
          });

        setListFilterRegion(listString);
      }

      if (stringJoin === 'LEGENDADO,IMAX') {
        let listString = cinemaMovie
          .filter((mov) => mov.cinemaDTO.ranking === stringJoin)
          .map((mov) => {
            mov.IsOnlyLegImax = 1;
            return mov;
          });

        setListFilterRegion(listString);
      }

      if (stringJoin === 'DUBLADO,VIP') {
        let listString = cinemaMovie
          .filter((mov) => mov.cinemaDTO.ranking === stringJoin)
          .map((mov) => {
            mov.IsOnlyDubVip = 1;
            return mov;
          });

        setListFilterRegion(listString);
      }

      if (stringJoin === 'DUBLADO,IMAX') {
        let listString = cinemaMovie
          .filter((mov) => mov.cinemaDTO.ranking === stringJoin)
          .map((mov) => {
            mov.IsOnlyDubImax = 1;
            return mov;
          });

        setListFilterRegion(listString);
      }
    } else {
      const stringJoin = rankingMovieList[0];

      let listString = cinemaMovie
        .filter((mov) => {
          if (mov.cinemaDTO.ranking.includes(',')) {
            const elString = mov.cinemaDTO.ranking.split(',');

            return elString.some((el) => el === stringJoin);
          } else {
            return mov.cinemaDTO.ranking === stringJoin;
          }
        })
        .map((mov) => {
          mov.IsOnlyLegVip = 0;
          mov.IsOnlyLegImax = 0;
          return mov;
        });

      setListFilterRegion(listString);
    }
  }, [rankingMovieList, cinemaMovie]);

  const handleClickHourMovie = (hour: string, el: cinemaMovieProps) => {
    console.log(hour);

    console.log(el);
  };

  return (
    <>
      {listFilterRegion.length >= 0 && rankingMovieList.length > 0 ? (
        <>
          {listFilterRegion.map((el, index) => (
            <Styled.ContainerCinemaRegionHours key={index}>
              <InfoMovieLocalSeatsPriceDetails el={el} />

              <RankingDublado
                el={el}
                listHoursKeyValue={listHoursKeyValue}
                handleClickHourMovie={handleClickHourMovie}
              />
              <RankingLegenda el={el} listHoursKeyValue={listHoursKeyValue} />
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

                <RankingDublado
                  el={el}
                  listHoursKeyValue={listHoursKeyValue}
                  handleClickHourMovie={handleClickHourMovie}
                />
                <RankingLegenda el={el} listHoursKeyValue={listHoursKeyValue} />
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
