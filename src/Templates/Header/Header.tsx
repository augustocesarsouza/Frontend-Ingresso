import FirstContainer from '../../Components/HeaderComponents/FirstContainer/FirstContainer';
import SecondContainer from '../../Components/HeaderComponents/SecondContainer/SecondContainer';
import HighlightContent from '../../Components/MainPageAllContentsComponents/HighlightContent/HighlightContent';
import * as Styled from './styled';
import TrendingBannerMovie from '../../Components/HeaderComponents/TrendingBannerMovie/TrendingBannerMovie';
import TheatresBanner from '../../Components/HeaderComponents/TheatresBanner/TheatresBanner';
import { useState } from 'react';

const Header = () => {
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

  return (
    <Styled.ContainerMain onClick={handleClickMainContainer}>
      <Styled.ContainerFirstHeader>
        <FirstContainer
          openChooseLocation={openChooseLocation}
          setOpenChooseLocation={setOpenChooseLocation}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <SecondContainer />
      </Styled.ContainerFirstHeader>
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
      <HighlightContent />
      <Styled.ContainerTrendingDown>
        <Styled.ContainerSection>
          <TrendingBannerMovie />
          <TheatresBanner />
        </Styled.ContainerSection>
      </Styled.ContainerTrendingDown>
    </Styled.ContainerMain>
  );
};

export default Header;
