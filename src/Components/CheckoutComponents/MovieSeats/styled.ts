import styled from 'styled-components';

export const ZoomContainer = styled.div`
  overflow: hidden; 
  user-select: none;
`;

export const ContainerSeats = styled.div`
  margin-top: 15px;
  transform: scale(1) translate(0, 0);
  width: 54rem;
`

export const PSeats = styled.p`
  font-size: 9px;
  margin-right: 15px;
  width: 0;
`

export const ContainerNameRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ContainerSeatsRow = styled.div`
  display: flex;
  gap: 4px;
  
`

interface ContainerSeatsBallProps {
  $seatjoinlist: string[];
  $seatsjoinnumber: string;
  $seatsjoinnumberuppercase: string;
  $listassentdif: string[];
  $listrownamenotappear: string[];
}

export const ContainerSeatsBall = styled.div<ContainerSeatsBallProps>`
  background: #3478c1;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 8px;
  font-weight: 500;
  color: #3478c1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: ${props => props.$listassentdif.includes(props.$seatsjoinnumber) && "15%"};
  background: ${props => props.$listassentdif.includes(props.$seatsjoinnumber) && "white"};
  border: ${props => props.$listassentdif.includes(props.$seatsjoinnumber) && "1px solid #3478c1"}; 
  
  &:hover {
    background: ${props => !props.$listrownamenotappear.includes(props.$seatsjoinnumber) && "#db8e02"};
    color: ${props => !props.$listrownamenotappear.includes(props.$seatsjoinnumber) && "white"};
  }
  
  background: ${props => props.$listrownamenotappear.includes(props.$seatsjoinnumber) && "white"};
  color: ${props => props.$listrownamenotappear.includes(props.$seatsjoinnumber) && "white"};
  cursor: ${props => props.$listrownamenotappear.includes(props.$seatsjoinnumber) && "auto"};
  user-select: ${props => props.$listrownamenotappear.includes(props.$seatsjoinnumber) && "none"};

  background: ${props => props.$seatjoinlist.includes(props.$seatsjoinnumberuppercase) && "#db8e02"};
  color: ${props => props.$seatjoinlist.includes(props.$seatsjoinnumberuppercase) && "white"};
`

export const ContainerNameNumberRow = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerNumberRow = styled.div``

export const ContainerBlockSvg = styled.div`
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
    fill: #c8c8c8;
  }
`

export const ContainerScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  margin-top: 25px;
  color: white;
  padding: 1px;
  font-size: 14px;
`

interface ContainerBallProps {
  $ball: string;
}

export const ContainerBall = styled.div<ContainerBallProps>`
  background: ${props => props.$ball === "3" && "#dbdbdb"};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;


  svg {
    width: ${props => props.$ball === "3" && "10px"};
    height: ${props => props.$ball === "3" && "10px"};
  }
`