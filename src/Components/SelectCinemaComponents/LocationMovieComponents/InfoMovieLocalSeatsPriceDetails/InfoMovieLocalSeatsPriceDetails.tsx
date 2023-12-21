import DetailsSvg from '../../../../Svg/DetailsSvg';
import HeartLikeSvg from '../../../../Svg/HeartLikeSvg';
import PriceSvg from '../../../../Svg/PriceSvg';
import SeatsSvg from '../../../../Svg/SeatsSvg';
import { cinemaMovieProps } from '../LocationMovie/LocationMovie';
import * as Styled from './styled';

interface InfoMovieLocalSeatsPriceDetailsProps {
  el: cinemaMovieProps;
}

const InfoMovieLocalSeatsPriceDetails = ({ el }: InfoMovieLocalSeatsPriceDetailsProps) => {
  return (
    <Styled.ContainerRegion>
      <Styled.ContainerLikeAndRegionMovie>
        <Styled.ContainerHeartSvg>
          <HeartLikeSvg />
        </Styled.ContainerHeartSvg>
        <Styled.ContainerRegionName>
          <Styled.PNameRegion $pname="1">{el.cinemaDTO.nameCinema}</Styled.PNameRegion>
          <Styled.PNameRegion $pname="2">{el.cinemaDTO.district}</Styled.PNameRegion>
        </Styled.ContainerRegionName>
      </Styled.ContainerLikeAndRegionMovie>
      <Styled.ContainerSeatsPriceDetailsSvg>
        <Styled.ContainerSvgAndP>
          <Styled.ContainerSvg>
            <SeatsSvg />
          </Styled.ContainerSvg>
          <Styled.PSvgName>Assentos</Styled.PSvgName>
        </Styled.ContainerSvgAndP>
        <Styled.ContainerSvgAndP>
          <Styled.ContainerSvg>
            <PriceSvg />
          </Styled.ContainerSvg>
          <Styled.PSvgName>Preços</Styled.PSvgName>
        </Styled.ContainerSvgAndP>
        <Styled.ContainerSvgAndP>
          <Styled.ContainerSvg>
            <DetailsSvg />
          </Styled.ContainerSvg>
          <Styled.PSvgName>Detalhes</Styled.PSvgName>
        </Styled.ContainerSvgAndP>
      </Styled.ContainerSeatsPriceDetailsSvg>
    </Styled.ContainerRegion>
  );
};

export default InfoMovieLocalSeatsPriceDetails;
