import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faArrowsLeftRight, faBan, faList, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import UserSvg from '../../../Svg/UserSvg';

const CaptionAll = () => {
  return (
    <Styled.ContainerCaptionMain>
      <Styled.WrapperCaption>
        <FontAwesomeIcon icon={faList} />
        <Styled.Span $span="1">Legenda</Styled.Span>
      </Styled.WrapperCaption>
      <Styled.ContainerInfoCaptionMain>
        <Styled.ContainerInfoCaption $infocaption="1">
          <Styled.ContainerInfo>
            <Styled.ContainerBall $ball="1"></Styled.ContainerBall>
            <Styled.Span $span="2">Disponível</Styled.Span>
          </Styled.ContainerInfo>
          <Styled.ContainerInfo>
            <Styled.ContainerBall $ball="2"></Styled.ContainerBall>
            <Styled.Span $span="2">Selecionado</Styled.Span>
          </Styled.ContainerInfo>
          <Styled.ContainerInfo>
            <Styled.ContainerBall $ball="3">
              <UserSvg />
            </Styled.ContainerBall>
            <Styled.Span $span="2">Ocupados</Styled.Span>
          </Styled.ContainerInfo>
          <Styled.ContainerInfo>
            <Styled.ContainerBall $ball="4">
              <FontAwesomeIcon icon={faBan} />
            </Styled.ContainerBall>
            <Styled.Span $span="2">Bloqueados</Styled.Span>
          </Styled.ContainerInfo>
        </Styled.ContainerInfoCaption>
        <Styled.ContainerInfoCaption $infocaption="2">
          <Styled.ContainerInfo>
            <Styled.ContainerBall $ball="5">
              <FontAwesomeIcon icon={faWheelchair} />
            </Styled.ContainerBall>
            <Styled.Span $span="2">Cadeirante</Styled.Span>
          </Styled.ContainerInfo>
          <Styled.ContainerInfo>
            <Styled.ContainerBall $ball="5">
              <FontAwesomeIcon icon={faArrowsLeftRight} />
            </Styled.ContainerBall>
            <Styled.Span $span="2">Obeso</Styled.Span>
          </Styled.ContainerInfo>
        </Styled.ContainerInfoCaption>
      </Styled.ContainerInfoCaptionMain>
    </Styled.ContainerCaptionMain>
  );
};

export default CaptionAll;
