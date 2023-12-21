import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { Url } from '../../../Utils/Url';

interface MovieProps {
  id: string;
  title: string;
  description: string;
  gender: string;
  duration: string;
  movieRating: number;
  imgUrl: string;
  statusMovie: string;
}

const HighlightContent = () => {
  const [movieHighlight, setMovieHighlight] = useState<MovieProps | null>(null);

  useEffect(() => {
    if (movieHighlight !== null) return;

    const GetHighlightMovie = async () => {
      const statusMovie = 'Highlight';
      const res = await fetch(`${Url}/movie/get-status-movie/${statusMovie}`);

      if (res.status === 200) {
        const json = await res.json();
        const movie: MovieProps = json.data;

        setMovieHighlight(movie);
      }
    };

    GetHighlightMovie();
  }, [movieHighlight]);

  const TruncateDescription = (description: string, maxLength = 149, suffix = '...') => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}${suffix}`;
    }
  };

  return (
    <Styled.ContainerMainHighlight>
      {movieHighlight && (
        <>
          <Styled.ContainerImg>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701530844/e2bd8e54-fc21-4438-8a12-ad79b0d8bc8c_zm2eoe.webp"
              alt={movieHighlight?.title}
            />
          </Styled.ContainerImg>
          <Styled.ContainerInfoMovie>
            <Styled.ContainerMovieRatingGender>
              <Styled.ContainerMovieRating>
                {movieHighlight.movieRating}
              </Styled.ContainerMovieRating>
              <Styled.ContainerGender>
                <Styled.Span>{movieHighlight.gender}</Styled.Span>
              </Styled.ContainerGender>
            </Styled.ContainerMovieRatingGender>
            <Styled.ContainerTitleAndDescription>
              <Styled.H1>{movieHighlight.title}</Styled.H1>
              <Styled.ContainerDesc>
                <Styled.H2>{TruncateDescription(movieHighlight.description)}</Styled.H2>
              </Styled.ContainerDesc>
            </Styled.ContainerTitleAndDescription>
            <Styled.ContainerTwoButton>
              <Styled.ContainerButton $container-button="1">
                <Styled.Button $button="1">INGRESSOS</Styled.Button>
              </Styled.ContainerButton>
              <Styled.ContainerButton $container-button="1">
                <Styled.Button $button="2">ASSISTIR TRAILER</Styled.Button>
              </Styled.ContainerButton>
            </Styled.ContainerTwoButton>
          </Styled.ContainerInfoMovie>
        </>
      )}
    </Styled.ContainerMainHighlight>
  );
};

export default HighlightContent;
