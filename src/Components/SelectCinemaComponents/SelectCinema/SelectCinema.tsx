import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { Url } from '../../../Utils/Url';
import FirstContainer from '../../HeaderComponents/FirstContainer/FirstContainer';
import SecondContainer from '../../HeaderComponents/SecondContainer/SecondContainer';
import { ContextHome } from '../../../Templates/Home/Home';
import { ObjUser } from '../../LoginComponents/SectionFirst/Form/Form';
import BannerMovieSelected from '../BannerMovieSelected/BannerMovieSelected';
import SessionsAndAboutTheFilm from '../SessionsAndAboutTheFilm/SessionsAndAboutTheFilm';
import DateForFilm from '../DateForFilm/DateForFilm';
import LocationMovie from '../LocationMovieComponents/LocationMovie/LocationMovie';
import RankingMovie from '../RankingMovie/RankingMovie';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface movieSelectedProps {
  id: string;
  imgUrl: string;
  imgUrlBackground: string;
  title: string;
  gender: string;
  duration: string;
  movieRating: number;
  description: string;
}

export interface next7DaysProps {
  dayYear: string;
  weekDay: string;
}

const SelectCinema = () => {
  const [movieSelected, setMovieSelected] = useState<movieSelectedProps | null>(null);
  const [userObj, setUserObj] = useState<ObjUser | null>(null);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    setUserObj(location.state.user);

    const movieId = location.state.movieId;
    fetchInfoMovie(movieId, location.state.user);
  }, [location.pathname]);

  const fetchInfoMovie = async (movieId: string, user: ObjUser) => {
    const token = localStorage.getItem('token');

    if (token == null || token.length <= 0) {
      nav('/', { state: { user: null } });
      return;
    }

    const res = await fetch(`${Url}/movie/info/${movieId}`, {
      headers: {
        uid: user.id,
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 403) {
      nav('/', { state: { user: null } });
      return;
    }

    if (res.status === 200) {
      const json = await res.json();
      const data = json.data;
      setMovieSelected(data);
    }
  };

  const [mouseEnterContainerChooseLocation, setMouseEnterContainerChooseLocation] = useState(false);
  const [openChooseLocation, setOpenChooseLocation] = useState(false);

  const handleClickMainContainer = () => {
    if (openChooseLocation && !mouseEnterContainerChooseLocation) {
      setOpenChooseLocation(false);
    }
  };

  const handleMouseEnter = () => {
    setMouseEnterContainerChooseLocation(true);
  };

  const handleMouseLeave = () => {
    setMouseEnterContainerChooseLocation(false);
  };

  const [next7Days, setNext7Days] = useState<next7DaysProps[]>([]);
  const [weekDay, setWeekDay] = useState('');

  useEffect(() => {
    if (next7Days.length > 0) return;

    const today = new Date();
    const dayToday = today.getDate();

    const next7DaysEffect: next7DaysProps[] = [];

    for (let i = 0; i < 7; i++) {
      const day = addDays(today, i);

      const weekDay = format(day, 'E', { locale: ptBR });
      const formattedDay = format(day, 'dd', { locale: ptBR });
      const formattedMonth = format(day, 'MM', { locale: ptBR });

      if (dayToday === Number(formattedDay)) {
        setWeekDay(weekDay);

        const objData = {
          dayYear: `${formattedDay}/${formattedMonth}`,
          weekDay: 'Hoje',
        };
        next7DaysEffect.push(objData);
      } else {
        const objData = {
          dayYear: `${formattedDay}/${formattedMonth}`,
          weekDay: weekDay.slice(0, 3),
        };
        next7DaysEffect.push(objData);
      }
    }

    setNext7Days(next7DaysEffect);
  }, []);

  const [rankingMovieList, setRankingMovieList] = useState<string[]>([]);
  const [dataSelected, setDataSelected] = useState<next7DaysProps | null>(null);

  useEffect(() => {
    if (next7Days === null) return;
    setDataSelected(next7Days[0]);
  }, [next7Days]);

  return (
    <Styled.ContainerMain onClick={handleClickMainContainer}>
      <ContextHome.Provider
        value={{
          userObj,
          setUserObj,
        }}
      >
        <Styled.ContainerFirstHeader>
          <FirstContainer
            openChooseLocation={openChooseLocation}
            setOpenChooseLocation={setOpenChooseLocation}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
          <SecondContainer />
        </Styled.ContainerFirstHeader>
      </ContextHome.Provider>
      <Styled.ContainerSecondHeader>
        <Styled.NavHeader>
          <Styled.Ul>
            <Styled.Li>FILMES</Styled.Li>
            <Styled.Li>CINEMAS</Styled.Li>
            <Styled.Li>NOTÍCIAS</Styled.Li>
            <Styled.Li>FANSHOP</Styled.Li>
          </Styled.Ul>
        </Styled.NavHeader>
      </Styled.ContainerSecondHeader>
      {movieSelected !== null && (
        <BannerMovieSelected
          imgUrl={movieSelected.imgUrl}
          imgUrlBackground={movieSelected.imgUrlBackground}
          title={movieSelected.title}
          gender={movieSelected.gender}
          duration={movieSelected.duration}
          movieRating={movieSelected.movieRating}
          description={movieSelected.description}
        />
      )}
      <Styled.ContainerChooseRoom>
        <SessionsAndAboutTheFilm />
        <DateForFilm next7Days={next7Days} setDataSelected={setDataSelected} />
        <RankingMovie setRankingMovieList={setRankingMovieList} />

        <LocationMovie
          movieSelected={movieSelected}
          rankingMovieList={rankingMovieList}
          dataSelected={dataSelected}
          weekDay={weekDay}
          userObj={userObj}
        />
      </Styled.ContainerChooseRoom>
    </Styled.ContainerMain>
  );
};

export default SelectCinema;
