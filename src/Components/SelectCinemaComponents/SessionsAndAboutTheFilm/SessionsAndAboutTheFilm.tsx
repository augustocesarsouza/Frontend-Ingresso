import * as Styled from './styled';
import { useState, memo } from 'react';

const SessionsAndAboutTheFilm = () => {
  const [session, setSession] = useState('true');
  const [aboutFilm, setAboutFilm] = useState('false');

  const handleClickSession = () => {
    setSession('true');
    setAboutFilm('false');
  };

  const handleClickAboutFilm = () => {
    setAboutFilm('true');
    setSession('false');
  };

  return (
    <Styled.ContainerSessionsAboutFilm>
      <Styled.WrapperSession $containersessionor={session} onClick={handleClickSession}>
        <Styled.PSession $session={session}>Sessões</Styled.PSession>
      </Styled.WrapperSession>
      <Styled.WrapperAboutFilm $containeraboultfilm={aboutFilm} onClick={handleClickAboutFilm}>
        <Styled.PAboutFilm $aboutfilm={aboutFilm}>Sobre o filme</Styled.PAboutFilm>
      </Styled.WrapperAboutFilm>
    </Styled.ContainerSessionsAboutFilm>
  );
};

export default memo(SessionsAndAboutTheFilm);
