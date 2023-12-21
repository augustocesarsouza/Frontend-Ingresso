import CupPopcornSvgColor from '../../../Svg/CupPopcornSvgColor';
import ShareSvg from '../../../Svg/ShareSvg';
import TomatoRedSvg from '../../../Svg/TomatoRedSvg';
import * as Styled from './styled';

interface BannerMovieSelectedProps {
  imgUrl: string;
  imgUrlBackground: string;
  title: string;
  gender: string;
  duration: string;
  movieRating: number;
  description: string;
}

// imgUrl: string;
//   imgUrlBackground: string;
//   title: string;
//   gender: string;
//   duration: string;
//   movieRating: string;
//   description: string;

const BannerMovieSelected = ({
  imgUrl,
  imgUrlBackground,
  title,
  gender,
  duration,
  movieRating,
  description,
}: BannerMovieSelectedProps) => {
  const TruncateDescription = (description: string, maxLength = 128, suffix = '...') => {
    if (description.length <= 50) return description;

    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}${suffix}`;
    }
  };

  return (
    <Styled.ContainerMainTop>
      <Styled.ContainerBackgroundImg>
        <Styled.WrapperImgBackground>
          <Styled.ImgBackground src={imgUrlBackground} />
        </Styled.WrapperImgBackground>
        <Styled.WrapperImg>
          <Styled.Img src={imgUrl} />
        </Styled.WrapperImg>
        <Styled.ContainerInfoMovie>
          <Styled.ContainerTomatoCupPopcorn>
            <Styled.ContainerTomato>
              <TomatoRedSvg />
            </Styled.ContainerTomato>
            <Styled.span $span="1">64%</Styled.span>
            <Styled.ContainerCupPopcorn>
              <CupPopcornSvgColor />
            </Styled.ContainerCupPopcorn>
            <Styled.span $span="1">89%</Styled.span>
          </Styled.ContainerTomatoCupPopcorn>
          <Styled.ContainerTitle>
            <Styled.H1>{title}</Styled.H1>
          </Styled.ContainerTitle>
          <Styled.ContainerGenderDurationMovieRating>
            <Styled.ContainerGender>
              <Styled.span $span="2">{gender}</Styled.span>
            </Styled.ContainerGender>
            <Styled.ContainerBarWhite></Styled.ContainerBarWhite>
            <Styled.ContainerDuration>
              <Styled.span $span="2">{duration}</Styled.span>
            </Styled.ContainerDuration>
            <Styled.ContainerBarWhite></Styled.ContainerBarWhite>
            <Styled.ContainerMovieRating>
              <Styled.PMovieRating>{movieRating}</Styled.PMovieRating>
            </Styled.ContainerMovieRating>
          </Styled.ContainerGenderDurationMovieRating>
          <Styled.ContainerDescriptionButton>
            <Styled.ContainerDescription>
              <Styled.span $span="3">{TruncateDescription(description)}</Styled.span>
            </Styled.ContainerDescription>
            <Styled.ContainerSeeMore>
              <Styled.ButtonSeeMore>ver mais</Styled.ButtonSeeMore>
            </Styled.ContainerSeeMore>
          </Styled.ContainerDescriptionButton>
          <Styled.ContainerShare>
            <Styled.ContainerShareSvg>
              <ShareSvg />
            </Styled.ContainerShareSvg>
            <Styled.span $span="4">Compartilhar</Styled.span>
          </Styled.ContainerShare>
        </Styled.ContainerInfoMovie>
      </Styled.ContainerBackgroundImg>
    </Styled.ContainerMainTop>
  );
};

export default BannerMovieSelected;
