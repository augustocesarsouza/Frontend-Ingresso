import CalendarSvg from '../../../Svg/CalendarSvg';
import LocationSvg from '../../../Svg/LocationSvg';
import { CheckoutMovie } from '../../../Templates/Checkout/Checkout';
import * as Styled from './styled';

interface MovieBannerRoomProps {
  checkoutMovie: CheckoutMovie;
}

const MovieBannerRoom = ({ checkoutMovie }: MovieBannerRoomProps) => {
  return (
    <Styled.ContainerInfoMovieMain>
      <Styled.ContainerImg>
        <Styled.Img src={checkoutMovie.imgUrl} alt={checkoutMovie.movie} />
      </Styled.ContainerImg>
      <Styled.ContainerInfoMovie>
        <Styled.H2>{checkoutMovie.movie}</Styled.H2>
        <Styled.ContainerLocationAndDate>
          <Styled.ContainerLocationMovieSvg>
            <LocationSvg />
            <Styled.Span $span="1">
              {`${checkoutMovie.locationMovie} - Sala ${checkoutMovie.room}`}
            </Styled.Span>
          </Styled.ContainerLocationMovieSvg>
          <Styled.ContainerDateSvg>
            <CalendarSvg />
            <Styled.Span $span="1">{checkoutMovie.dateMovie}</Styled.Span>
          </Styled.ContainerDateSvg>
        </Styled.ContainerLocationAndDate>
        <Styled.ContainerLanguageMovie>
          <Styled.Span $span="2">{checkoutMovie.ranking}</Styled.Span>
        </Styled.ContainerLanguageMovie>
      </Styled.ContainerInfoMovie>
    </Styled.ContainerInfoMovieMain>
  );
};

export default MovieBannerRoom;
