import styled from 'styled-components';

export const ContainerMain = styled.div`
`

export const ContainerFirstHeader = styled.div`
  display: flex;
  background-image: linear-gradient(to right, rgb(81 108 237), rgb(45, 73, 201));
`

export const ContainerSecondHeader = styled.div``

export const NavHeader = styled.nav`
  background-color: rgb(32 35 128);
  padding: 20px;
`

export const Ul = styled.ul`
  display: flex;
  gap: 40px;
  margin-left: 30px;
`

export const Li = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #bbc8ff;

  &:hover {
    color: rgb(187 200 255 / 73%);
  }
`

export const ContainerMainTop = styled.div`
  background: #727272;
`

export const ContainerBackgroundImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`

export const WrapperImgBackground = styled.div`
  width: 100%;
  height: 27rem;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 18%;
    height: 100%;
    background-image: linear-gradient(to right, #727272d4, #7272721f);
    opacity: 1;
    z-index: 3;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 18%;
    height: 100%;
    background-image: linear-gradient(to left, #727272d4, #72727200);
    opacity: 1;
    z-index: 3;
  }
`

export const ImgBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
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
`

interface spanProps {
  $span: string;
}

export const span = styled.span<spanProps>`
  color: white;
  font-size: 12px;

  color: ${props => props.$span === "2" && "#272727b3"};
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
  width: 69%;
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

export const ContainerChooseRoom = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
`

export const ContainerCinemaRegionHours = styled.div`
  background-color: #3a3a3a;
  margin: 40px 70px 0px 70px;
  padding: 20px 25px;
  border-radius: 15px;
  
`

export const ContainerRegion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #707070;
  padding-bottom: 25px;
`

export const ContainerLikeAndRegionMovie = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerHeartSvg = styled.div`
  width: 25px;
  height: 25px;
  fill: #47a7f3;
  margin-top: 2px;

  svg > {
    width: 100%;
    height: 100%;
    
  }
`

export const ContainerRegionName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

interface PNameRegionProps {
  $pname: string;
}

export const PNameRegion = styled.p<PNameRegionProps>`
  /* color: #47a7f3; */
  color: ${props => props.$pname === "1" ? "#47a7f3" : "gray"};
  font-size: ${props => props.$pname === "1" && "17px"};
  font-size: ${props => props.$pname === "2" && "14px"};
  font-weight: ${props => props.$pname === "1" && "500"};
`

export const ContainerSeatsPriceDetailsSvg = styled.div`
  display: flex;
  gap: 15px;
`

export const ContainerSvgAndP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
`

export const ContainerSvg = styled.div`
  width: 25px;
  height: 25px;

  svg > {
    width: 100%;
    height: 100%;
  }
`

export const PSvgName = styled.p`
  color: #47a7f3;
`

export const ContainerHoursRanking = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 15px;
  flex-direction: column;
`

export const ContainerAll = styled.div`
  display: flex;
  
  gap: 10px;
`

export const ContainerRanking = styled.div`
  display: flex;
  /* background: orange; */
  gap: 10px;
`

export const SpanRanking = styled.span`
  font-size: 12px;
  background: orange;
  padding: 3.5px 11px;
  border-radius: 5px;
  font-weight: 400;
`

export const ContainerHoursMain = styled.div`
  display: flex;
  gap: 5px;
`

export const ContainerHours = styled.div`
  border: 2px solid #47a7f3;
  padding: 20px 50px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
 
  &::before {
    content: "COMPRAR";
    left: 12px;
    top: -12px;
    position: absolute;
    transition-duration: .25s;
    color: #47a7f3;
    z-index: -1;
  }
  
  &:hover {
    &::before {
    content: "COMPRAR";
      left: 12px;
      top: 11px;
      z-index: 1;
    }

    > p {
      left: 30px;
      top: 35px;
      z-index: -1;
    }
  }
`

interface PHourProps {
  $p: string;
}

export const PHour = styled.p<PHourProps>`
  color: #47a7f3;
  z-index: 1;
  position: absolute;

  left: 30px;
  top: 10px;
  transition-duration: .25s;
  
`