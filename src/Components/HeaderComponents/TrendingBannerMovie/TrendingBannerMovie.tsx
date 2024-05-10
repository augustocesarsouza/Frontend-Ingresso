import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { Url } from '../../../Utils/Url';
import ListMovieBanner from '../ListMovieBanner/ListMovieBanner';

export interface MoviesBanner {
  id: string;
  title: string;
  imgUrl: string;
  movieRating: number;
}

const TrendingBannerMovie = () => {
  const [moviesBanner, setMoviesBanner] = useState<MoviesBanner[] | null>(null);

  useEffect(() => {
    const GetAllMoviePerRegion = async () => {
      const region = 'São Paulo';
      // const res = await fetch(`${Url}/movie/get-all-region/${region}`);c#
      const res = await fetch(`${Url}/public/movie/get-all-region/${region}`);

      if (res.status === 200) {
        const json = await res.json();
        const movies = json.data;

        setMoviesBanner(movies);
      }
    };

    GetAllMoviePerRegion();
  }, []);

  return (
    <Styled.Section>
      <Styled.ContainerH1>
        <Styled.H1>Em Alta</Styled.H1>
      </Styled.ContainerH1>
      <ListMovieBanner moviesBanner={moviesBanner} />
    </Styled.Section>
  );
};

export default TrendingBannerMovie;
