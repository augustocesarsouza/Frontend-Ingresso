import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { ArrayTheatreNewProps, FirstElementTheatre } from '../TheatresBanner/TheatresBanner';

interface ListTheaterBannerProps {
  firstElementTheatre: FirstElementTheatre;
  arrayTheatreNew: ArrayTheatreNewProps[];
}

const ListTheaterBanner = ({ firstElementTheatre, arrayTheatreNew }: ListTheaterBannerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const refButtonLeft = useRef<HTMLDivElement | null>(null);
  const refButtonRight = useRef<HTMLDivElement | null>(null);

  const [arrowDisableLeft, setArrowDisableLeft] = useState(false);
  const [arrowDisableRight, setArrowDisableRight] = useState(false);

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

  return (
    <>
      <Styled.WrapperArrowLeft
        onClick={handleClickArrowLeft}
        ref={refButtonLeft}
        className="div-arrow-left"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Styled.WrapperArrowLeft>
      <Styled.ContainerTheaterMainPoster
        ref={ref}
        $arrowdisableleft={String(arrowDisableLeft)}
        $arrowdisableright={String(arrowDisableRight)}
      >
        {firstElementTheatre !== null && (
          <Styled.ContainerFirstTheaterBanner>
            <Styled.ContainerFirstImg>
              <Styled.ImgFirstImg
                src={firstElementTheatre.imgUrl}
                alt={firstElementTheatre.title}
              />
            </Styled.ContainerFirstImg>
            <Styled.ContainerInfoTheater>
              <Styled.Span $span="1">{firstElementTheatre.joinString}</Styled.Span>
              <Styled.H2>{firstElementTheatre.title}</Styled.H2>
              <Styled.Span $span="2">{firstElementTheatre.splitLocation}</Styled.Span>
            </Styled.ContainerInfoTheater>
          </Styled.ContainerFirstTheaterBanner>
        )}
        <Styled.ContainerTheatreBanner>
          {arrayTheatreNew.length > 0 &&
            arrayTheatreNew.map((the: ArrayTheatreNewProps, index) => (
              <Styled.ContainerBannerTop key={the.id}>
                <Styled.ContainerImg $indexcurrent={index}>
                  <Styled.ImgMovie src={the.imgUrl} alt={the.title} />
                </Styled.ContainerImg>
                <Styled.ContainerInfoTheaterRight>
                  <Styled.SpanRight $span="1">{the.joinStringData}</Styled.SpanRight>
                  <Styled.H2Right>{the.title}</Styled.H2Right>
                  <Styled.SpanRight $span="2">{the.splitLocation}</Styled.SpanRight>
                </Styled.ContainerInfoTheaterRight>
              </Styled.ContainerBannerTop>
            ))}
        </Styled.ContainerTheatreBanner>
      </Styled.ContainerTheaterMainPoster>
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

export default ListTheaterBanner;
