import LocationSvg from '../../../Svg/LocationSvg';
import * as Styled from './styled';

const FirstContainer = () => {
  return (
    <Styled.FirstContainer>
      <Styled.ContainerHomeLocation>
        <Styled.ContainerHome>
          <Styled.HomeLink>
            <Styled.ImgIngresso
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1698064983/IngressoImg/ingressologoTrans_in34qn.png"
              alt="img-logo-ingresso"
            />
          </Styled.HomeLink>
        </Styled.ContainerHome>
        <Styled.ContainerLocation data-testid="container-location">
          <LocationSvg />
          <Styled.Paragraph>Exemplo</Styled.Paragraph>
        </Styled.ContainerLocation>
      </Styled.ContainerHomeLocation>
    </Styled.FirstContainer>
  );
};

export default FirstContainer;
