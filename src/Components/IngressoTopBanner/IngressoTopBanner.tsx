import IngressoSvg from '../../Svg/IngressoSvg';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const IngressoTopBanner = () => {
  const nav = useNavigate();

  const handleClickRedirect = () => {
    nav('/');
  };

  return (
    <Styled.ContainerSvgIngresso onClick={handleClickRedirect}>
      <IngressoSvg />
    </Styled.ContainerSvgIngresso>
  );
};

export default IngressoTopBanner;
