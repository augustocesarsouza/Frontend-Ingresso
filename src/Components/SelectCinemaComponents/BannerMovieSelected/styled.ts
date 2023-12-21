import styled from 'styled-components';

export const ContainerMainTop = styled.div`
  background: #727272;
`

export const ContainerBackgroundImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 88%;
    height: 100%;
    background-image: linear-gradient(to right, #3c3a3a, #7272721f);
    opacity: 1;
    z-index: 3;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 80%;
    height: 100%;
    background-image: linear-gradient(to left, #3c3a3a, #72727200);
    opacity: 1;
    z-index: 3;
  }
`

export const WrapperImgBackground = styled.div`
  width: 100%;
  height: 27rem;

  /* &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 160px;
    width: 18%;
    height: 100%;
    background-image: linear-gradient(to left, #3c3a3a, #72727200);
    opacity: 1;
    z-index: 3;
  } */
`

export const ImgBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1; 
`

export const WrapperImg = styled.div`
  width: 21rem;
  height: 31rem;
  position: absolute;
  left: 30px;
  top: 20px;
  z-index: 5;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContainerInfoMovie = styled.div`
  position: absolute;
  left: 270px;
  top: 0;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  z-index: 5;
`

interface spanProps {
  $span: string;
}

export const span = styled.span<spanProps>`
  color: white;
  font-size: 12px;

  color: ${props => props.$span === "2" && "#cdcdcd"};
  font-weight: ${props => props.$span === "2" && "600"};

  font-size: ${props => props.$span === "3" && "13px"};
  font-weight: ${props => props.$span === "3" && "500"};

  color: ${props => props.$span === "4" && "#03a9f4"};
  font-size: ${props => props.$span === "4" && "13px"};
  font-weight: ${props => props.$span === "4" && "600"};
`

export const ContainerTomatoCupPopcorn = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerTomato = styled.div`
  width:25px;
  height: 25px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ContainerCupPopcorn = styled.div`
  width: 25px;
  height: 25px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ContainerTitle = styled.div``

export const H1 = styled.h1`
  font-size: 26px;
  color: white;
`

export const ContainerGenderDurationMovieRating = styled.div`
  display: flex;
  gap: 15px;
`

export const ContainerBarWhite = styled.div`
  border: 1px solid #ffffffad;
`

export const ContainerGender = styled.div``

export const ContainerDuration = styled.div``

export const ContainerMovieRating = styled.div`
  background: #ba6a25;
  padding: 5px;
  border-radius: 3px;
`

export const PMovieRating = styled.p`
  font-size: 8px;
  color: white;
  font-weight: 600;
`

export const ContainerDescriptionButton = styled.div`
  display: flex;
  align-items: end;
`

export const ContainerDescription = styled.div`
  width: 72%;
`

export const ContainerSeeMore = styled.div``

export const ButtonSeeMore = styled.button`
  border: none;
  background: none;
  color: #4bafff;
  font-weight: 500;
  cursor: pointer;
`

export const ContainerShare = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`

export const ContainerShareSvg = styled.div`
  width: 25px;
  height: 25px;
  background: black;
  border-radius: 50%;
  padding: 2px;

  svg {
    width: 100%;
    height: 100%;
    
    fill: #03a9f4;
    
  }
`