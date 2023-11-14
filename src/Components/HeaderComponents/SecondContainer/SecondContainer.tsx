import QuestionMarkSvg from '../../../Svg/QuestionMarkSvg';
import UserLogoSvg from '../../../Svg/UserLogoSvg';
import LoupeSvg from '../../../Svg/loupeSvg';
import * as Styled from './styled';
import { useState, useEffect } from 'react';
import EnterOrRegister from '../EnterOrRegister/EnterOrRegister';

const SecondContainer = () => {
  const [enterOrRegister, setEnterOrRegister] = useState(false);
  const [enterMouseDivUserImgSvg, setEnterMouseDivUserImgSvg] = useState(false);

  const handleEnterOrRegister = () => {
    setEnterOrRegister((prev) => !prev);
  };

  const documentEvent = () => {
    setEnterOrRegister(false);
  };

  useEffect(() => {
    if (enterMouseDivUserImgSvg) return;
    document.addEventListener('click', documentEvent);

    return () => {
      document.removeEventListener('click', documentEvent);
    };
  }, [enterMouseDivUserImgSvg]);

  const handleEnter = () => {
    setEnterMouseDivUserImgSvg(true);
  };

  const handleLeave = () => {
    setEnterMouseDivUserImgSvg(false);
  };

  return (
    <Styled.SecondContainer>
      <Styled.ContainerLoupe data-testid="container-loupe">
        <LoupeSvg />
      </Styled.ContainerLoupe>
      <Styled.ContainerUserImgSvg onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <Styled.ContainerUserLogo data-testid="container-user-logo" onClick={handleEnterOrRegister}>
          <UserLogoSvg />
        </Styled.ContainerUserLogo>
        <Styled.Span data-testid="span-entry-register" onClick={handleEnterOrRegister}>
          Entre ou Cadastre-se
        </Styled.Span>
        <EnterOrRegister enterOrRegister={enterOrRegister} />
      </Styled.ContainerUserImgSvg>
      <Styled.ContainerQuestion data-testid="container-question-mark">
        <QuestionMarkSvg />
      </Styled.ContainerQuestion>
    </Styled.SecondContainer>
  );
};

export default SecondContainer;
