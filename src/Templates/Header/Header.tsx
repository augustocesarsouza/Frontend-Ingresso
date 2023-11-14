import FirstContainer from '../../Components/HeaderComponents/FirstContainer/FirstContainer';
import SecondContainer from '../../Components/HeaderComponents/SecondContainer/SecondContainer';
import * as Styled from './styled';

const Header = () => {
  return (
    <Styled.ContainerMain>
      <Styled.ContainerFirstHeader>
        <FirstContainer />
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
    </Styled.ContainerMain>
  );
};

export default Header;
