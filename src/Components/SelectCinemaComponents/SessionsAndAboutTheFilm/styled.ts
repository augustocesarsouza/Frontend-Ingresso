import styled from 'styled-components';

export const ContainerSessionsAboutFilm = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1px 70px 1px 70px;
  border-bottom: 0px solid #a5a5a5;
`

interface WrapperSessionProps {
  $containersessionor: string;
}

export const WrapperSession = styled.div<WrapperSessionProps>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: 3px solid #a5a5a5; */
  padding-bottom: 18px;
  cursor: pointer;
  border-bottom: ${props => props.$containersessionor === "true" ? "4px solid orange" : "3px solid #a5a5a5"};
  
`

interface WrapperAboutFilmProps {
  $containeraboultfilm: string;
}

export const WrapperAboutFilm = styled.div<WrapperAboutFilmProps>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: 3px solid #a5a5a5; */
  padding-bottom: 18px;
  cursor: pointer;
  border-bottom: ${props => props.$containeraboultfilm === "true" ? "4px solid orange" : "3px solid #a5a5a5"};
  
`

interface PSessionProps {
  $session: string;
}

export const PSession = styled.p<PSessionProps>`
  font-size: 17px;
  /* color: #2196f3; */
  color: ${props => props.$session === "true" ? "orange" : "#2196f3"};
  font-weight: 600;
  
`

interface PAboutFilmProps {
  $aboutfilm: string;
}

export const PAboutFilm = styled.p<PAboutFilmProps>`
  font-size: 17px;
  /* color: #2196f3; */
  color: ${props => props.$aboutfilm === "true" ? "orange" : "#2196f3"};
  font-weight: 600;
  
`