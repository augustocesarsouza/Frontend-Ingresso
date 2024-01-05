import styled from 'styled-components';

export const ContainerInfoMovieMain = styled.div`
  display: flex;
  gap: 15px;

  padding-bottom: 35px;
  border-bottom: 1px solid #b7b7b7;
`

export const ContainerImg = styled.div`
  width: 100px;
  height: 145px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContainerInfoMovie = styled.div`
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const H2 = styled.h2`
  font-size: 18px;
  color: #6e6e6e;
  font-weight: 400;
`

export const ContainerLocationAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`

export const ContainerLocationMovieSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 22px;
    height: 22px;
    fill: #6e6e6e;
  }
`

export const ContainerDateSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    width: 22px;
    height: 22px;
    fill: #6e6e6e;
  }
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 13px;
  color: #929292;

  color: ${props => props.$span === "2" && "white"};
  background: ${props => props.$span === "2" && "orange"};
  font-weight: ${props => props.$span === "2" && "500"};
  padding: ${props => props.$span === "2" && "2px"};
  border-radius: ${props => props.$span === "2" && "2px"};
`

export const ContainerLanguageMovie = styled.div`
`