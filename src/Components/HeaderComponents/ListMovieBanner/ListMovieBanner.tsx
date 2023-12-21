import TomatoSvg from '../../../Svg/TomatoSvg';
import * as Styled from './styled';
import CupPopcornSvg from '../../../Svg/CupPopcornSvg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MoviesBanner } from '../TrendingBannerMovie/TrendingBannerMovie';

interface ListMovieBannerProps {
  moviesBanner: MoviesBanner[];
}

const ListMovieBanner = ({ moviesBanner }: ListMovieBannerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const refButtonLeft = useRef<HTMLDivElement | null>(null);
  const refButtonRight = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const [arrowDisableLeft, setArrowDisableLeft] = useState(false);
  const [arrowDisableRight, setArrowDisableRight] = useState(false);
  const nav = useNavigate();

  const handleClickArrowLeft = () => {
    const scrollAmount = ref.current.clientWidth * -0.46;

    ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleClickArrowRight = () => {
    const scrollAmount = ref.current.clientWidth * 0.46;
    ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleSlideButtons = () => {
    const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;

    refButtonLeft.current.style.display = ref.current.scrollLeft <= 10 ? 'none' : 'block';
    refButtonRight.current.style.display =
      ref.current.scrollLeft >= maxScrollLeft ? 'none' : 'block';

    setArrowDisableLeft(ref.current.scrollLeft <= 10);
    setArrowDisableRight(ref.current.scrollLeft >= maxScrollLeft);
  };

  useEffect(() => {
    refButtonLeft.current.style.display = ref.current.scrollLeft <= 10 ? 'none' : 'block';
    setArrowDisableLeft(ref.current.scrollLeft <= 10);

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    handleSlideButtons();
  };

  const TruncateDescription = (description: string, maxLength = 40, suffix = '...') => {
    if (description.length <= 50) return description;

    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}${suffix}`;
    }
  };

  const handleMouseEnter = () => {
    // console.log('enter');
  };

  const handleMouseLeave = () => {
    // console.log('leave');
  };

  const handleClickImgBanner = (title: string, id: string) => {
    const titleFormatted = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
      .replace(/[^\w\s]/g, '') // Remove caracteres especiais, exceto letras, números e espaços
      .replace(/\s+/g, '-'); // Substitui espaços por traços
    let user;
    if (location.state !== null) {
      user = location.state.user;
    }

    nav(`/filme/${titleFormatted}`, { state: { id: id, user } });
  };

  return (
    <>
      <Styled.WrapperArrowLeft
        onClick={handleClickArrowLeft}
        ref={refButtonLeft}
        className="div-arrow-left"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Styled.WrapperArrowLeft>
      <Styled.ContainerInHigh
        ref={ref}
        $arrowdisableleft={String(arrowDisableLeft)}
        $arrowdisableright={String(arrowDisableRight)}
      >
        {moviesBanner &&
          moviesBanner.map((mov, index) => (
            <Styled.ContainerImgAndTitle
              key={mov.id}
              onClick={() => handleClickImgBanner(mov.title, mov.id)}
            >
              <Styled.ContainerImg
                $indexcurrent={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Styled.ImgMovie src={mov.imgUrl} alt={mov.title} />
                <Styled.ContainerMovieRating>
                  <Styled.PMovieRating>{mov.movieRating}</Styled.PMovieRating>
                </Styled.ContainerMovieRating>
              </Styled.ContainerImg>
              <Styled.ContainerSvgTomatoAndCupPopcorn>
                <Styled.ContainerTomato>
                  <TomatoSvg />
                </Styled.ContainerTomato>
                <Styled.DivBar>-</Styled.DivBar>
                <Styled.ContainerCupPopcorn>
                  <CupPopcornSvg />
                </Styled.ContainerCupPopcorn>
                <Styled.DivBar>-</Styled.DivBar>
              </Styled.ContainerSvgTomatoAndCupPopcorn>
              <Styled.PTitleMovie>{TruncateDescription(mov.title)}</Styled.PTitleMovie>
            </Styled.ContainerImgAndTitle>
          ))}
      </Styled.ContainerInHigh>
      <Styled.WrapperArrowRight
        onClick={handleClickArrowRight}
        ref={refButtonRight}
        className="div-arrow-right"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Styled.WrapperArrowRight>
    </>
  );
};

export default ListMovieBanner;
