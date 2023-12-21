import styled from 'styled-components';

export const ContainerMainHighlight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #252525;
  position: relative; 
  margin-bottom: 50px;
` 

export const ContainerImg = styled.div`
  width: 90%;
  height: 32rem;
  /* overflow: hidden; */

  position: relative; 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-image: linear-gradient(to right, #252525fa, #252525c4, #2525257d, #25252500);
    opacity: 1; 
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    background-image: linear-gradient(to left, #252525fa, #2525259e, #2525252b, #25252500);
    opacity: 1; 
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerInfoMovie = styled.div`
  position: absolute;
  left: 85px;
  top: 0;
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const ContainerMovieRatingGender = styled.div`
  display: flex;
  gap: 10px;
`

export const ContainerMovieRating = styled.div`
  background-color: red;
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 6px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerGender = styled.div``

export const Span = styled.span`
  color: white;
  font-size: 10px;
`

export const ContainerTitleAndDescription = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const H1 = styled.h1``

export const ContainerDesc = styled.div`
  width: 75%;
`

export const H2 = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

export const ContainerTwoButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

interface ContainerButtonProps {

}

export const ContainerButton = styled.div<ContainerButtonProps>`
  margin-top: 10px;
  height: 100%;
`

interface ButtonProps {
  $button: string;
}

export const Button = styled.button<ButtonProps>`
  padding: ${props => props.$button === "1" ? "13px" : "10px"};
  border: none;
  background: ${props => props.$button === "1" && "#ff7400"};
  width: 15rem;
  color: ${props => props.$button === "1" && "#333"};
  font-weight: 600;

  border-radius: 10px;

  background: ${props => props.$button === "2" && "transparent"};

  opacity: ${props => props.$button === "2" && "1"};
  color: ${props => props.$button === "2" && "#09f"};
  border: ${props => props.$button === "2" && "2px solid #09f"};
`