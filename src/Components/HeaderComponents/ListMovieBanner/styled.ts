import styled from 'styled-components';

interface ContainerInHighProps {
  $arrowdisableleft: string;
  $arrowdisableright: string;
}

export const ContainerInHigh = styled.div<ContainerInHighProps>`
  display: grid;
  font-size: 0;
  overflow-x: auto;
  scrollbar-width: none;
  grid-template-columns: repeat(10, 1fr);
  margin-bottom: 30px;
  margin-left: 7px;
  user-select: none;

  &::before {
    display: ${props => props.$arrowdisableleft === "true" && "none"};
    content: "";
    position: absolute;
    top: 519px;
    left: 0px;
    width: 18%;
    height: 29%;
    background-image: linear-gradient(to right, #28282878, #28282803);
    opacity: 1;
    z-index: 3;
  }

  &::after {
    display: ${props => props.$arrowdisableright === "true" && "none"};
    content: "";
    position: absolute;
    top: 519px;
    right: 0px;
    width: 18%;
    height: 29%;
    background-image: linear-gradient(to left, #28282885, #28282800);
    opacity: 1;
    z-index: 3;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContainerImgAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`

interface ContainerImgProps {
  $indexcurrent: number;
}

export const ContainerImg = styled.div<ContainerImgProps>`
  width: 192px;
  height: 291px;
  margin-left: 15px;
  margin-left: ${props => props.$indexcurrent === 0 && "0px"};
  position: relative;
  display: flex;
  /* cursor: pointer; */
  overflow: hidden;
  border-radius: 7px;
`

export const ImgMovie = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  } 
`

export const ContainerMovieRating = styled.div`
  position: absolute;
  left: 7px;
  top: 7px;
  background: #ba6a25;
  padding: 4px;
  border-radius: 3px;
`

export const PMovieRating = styled.p`
  font-size: 8px;
  color: white;
  font-weight: 600;
`

export const ContainerSvgTomatoAndCupPopcorn = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  /* margin-top: 10px; */
`

export const ContainerTomato = styled.div`
  svg {
    font-size: 20px;
  }
`

export const DivBar = styled.div`
  width: 8px;
  border-top: 2px solid #acacac;
`

export const ContainerCupPopcorn = styled.div``

export const PTitleMovie = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #d4d4d4;
  line-height: 2.2rem;
  width: 180px;
  /* margin-top: 10px; */
`

export const WrapperArrowLeft = styled.div`
  cursor: pointer;
  position: absolute;
  left: 17px;
  top: 662px;
  z-index: 5;

  svg {
    color: #50abf3;
    width: 40px;
    height: 40px;
  }
`

export const WrapperArrowRight = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 662px;
  z-index: 5;

  svg {
    color: #50abf3;
    width: 40px;
    height: 40px;
  }
`