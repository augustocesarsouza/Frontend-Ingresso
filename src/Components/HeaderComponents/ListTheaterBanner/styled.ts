import styled from 'styled-components';

interface ContainerTheaterMainPosterProps {
  $arrowdisableleft: string;
  $arrowdisableright: string;
}

export const ContainerTheaterMainPoster = styled.div<ContainerTheaterMainPosterProps>`
  display: grid;
  font-size: 0;
  overflow-x: auto;
  scrollbar-width: none;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;
  margin-left: 7px;
  user-select: none;

  &::before {
    display: ${props => props.$arrowdisableleft === "true" && "none"};
    content: "";
    position: absolute;
    top: 988px;
    left: 0px;
    width: 18%;
    height: 30%;
    background-image: linear-gradient(to right, #727272, #7272721f);
    opacity: 1;
    z-index: 3;
  }

  &::after {
    display: ${props => props.$arrowdisableright === "true" && "none"};
    content: "";
    position: absolute;
    top: 988px;
    right: 0px;
    width: 18%;
    height: 30%;
    background-image: linear-gradient(to left, #727272bf, #72727200);
    opacity: 1;
    z-index: 3;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContainerTheatreBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 15px;
  margin-left: 7px;
  user-select: none;
  width: 170%;

  & > * {
    flex: 0 0 calc(33.3333% - 15px); /* Ajuste a largura conforme necessário */
  }
`

export const ContainerFirstTheaterBanner = styled.div`
  cursor: pointer;
`

export const ContainerFirstImg = styled.div`
  width: 100%;
  height: 260px;
`

export const ImgFirstImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`

export const ContainerInfoTheater = styled.div`
  width: 100%;
  /* height: 11rem; */
  background: #3c3c3ceb;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 8px 0px 39px 15px;
  border-radius: 0px 0px 20px 20px;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  color: #f19e17;
  font-size: 15px;

  font-size: ${props => props.$span === "2" && "12px"};
  color: ${props => props.$span === "2" && "white"};
`

export const H2 = styled.h2`
  font-size: 20px;
  color: #ffffffe3;
`

export const ContainerInfoTheaterRight = styled.div`
  width: 100%;
  background: #3c3c3ceb;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 5px 0px 11px 20px;
  border-radius: 0px 0px 20px 20px;
`

interface SpanRightProps {
  $span: string;
}

export const SpanRight = styled.span<SpanRightProps>`
  color: #f19e17;
  font-size: 15px;

  font-size: ${props => props.$span === "2" && "12px"};
  color: ${props => props.$span === "2" && "white"};
`

export const H2Right = styled.h2`
  font-size: 15px;
  color: #ffffffe3;
`

export const ContainerBannerTop = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

interface ContainerImgProps {
  $indexcurrent: number;
}

export const ContainerImg = styled.div<ContainerImgProps>`
  width: 100%;
  height: 124px;
  margin-left: ${props => props.$indexcurrent === 0 && "0px"};
  position: relative;
  display: flex;
  cursor: pointer;
  overflow: hidden;
`

export const ImgMovie = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
  
  /* transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }  */
`

export const WrapperArrowLeft = styled.div`
  cursor: pointer;
  position: absolute;
  left: 17px;
  top: 1180px;
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
  top: 1180px;
  z-index: 5;

  svg {
    color: #50abf3;
    width: 40px;
    height: 40px;
  }
`