import styled from 'styled-components';

export const ZoomContainer = styled.div`
  overflow: hidden; 
`;

export const ContainerSeats = styled.div`
  margin-top: 15px;
  /* transform: scale(1.3); */
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
  $numberrow: number;
  $containerseatsball: string;
  $seatsletter: string;
  $letternumber: string;
  $seatjoinlist: string[];
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
  
  border-radius: ${props => (props.$numberrow >= 3 && props.$numberrow <= 10 || props.$numberrow === 12 || props.$numberrow === 13 ) && props.$seatsletter === "d" && "15%"};
  background: ${props => (props.$numberrow >= 3 && props.$numberrow <= 10 || props.$numberrow === 12 || props.$numberrow === 13 ) && props.$seatsletter === "d" && "white"};
  border: ${props => (props.$numberrow >= 3 && props.$numberrow <= 10 || props.$numberrow === 12 || props.$numberrow === 13 ) &&  props.$seatsletter === "d" && "1px solid #3478c1"}; 
  
  &:hover {
    color: white;
    background: #db8e02;

    border: ${props => (props.$numberrow >= 3 && props.$numberrow <= 10 || props.$numberrow === 12 || props.$numberrow === 13 ) && props.$seatsletter === "d" && "none"}; 

    background: ${props => (props.$numberrow === 1 || props.$numberrow === 18 || props.$numberrow === 19) && props.$containerseatsball === "notappear" && "none"};
    color: ${props => (props.$numberrow === 1 || props.$numberrow === 18 || props.$numberrow === 19) && props.$containerseatsball === "notappear" && "none"};

    background: ${props =>  props.$numberrow >= 22 && (props.$seatsletter === "i" || props.$seatsletter === "h" || props.$seatsletter === "g" || props.$seatsletter === "f" || props.$seatsletter === "e" || props.$seatsletter === "d") && "none"};
    color: ${props => props.$numberrow >= 22 && (props.$seatsletter === "i" || props.$seatsletter === "h" || props.$seatsletter === "g" || props.$seatsletter === "f" || props.$seatsletter === "e" || props.$seatsletter === "d") && "none"};

    background: ${props => (props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 20 && "none"};
    color: ${props => (props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 20 && "none"};

    background: ${props => (props.$seatsletter === "d"  || props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 2 && "none"};
    color: ${props => (props.$seatsletter === "d"  || props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 2 && "none"};
    
    background: ${props => props.$seatsletter === "a" && (props.$numberrow === 3 || props.$numberrow === 4 || props.$numberrow === 16 || props.$numberrow === 17 || props.$numberrow === 26) && "none"};
    color: ${props => props.$seatsletter === "a" && (props.$numberrow === 3 || props.$numberrow === 4 || props.$numberrow === 16 || props.$numberrow === 17 || props.$numberrow === 26) && "none"};

    background: ${props => props.$seatsletter === "d" && (props.$numberrow === 14 || props.$numberrow === 15 || props.$numberrow === 16 || props.$numberrow === 17) && "none"};
    color: ${props => props.$seatsletter === "d" && (props.$numberrow === 14 || props.$numberrow === 15 || props.$numberrow === 16 || props.$numberrow === 17) && "none"};
  }
  
  background: ${props => (props.$numberrow === 1 || props.$numberrow === 18|| props.$numberrow === 19) && props.$containerseatsball === "notappear" && "white"};
  color: ${props => (props.$numberrow === 1 || props.$numberrow === 18 || props.$numberrow === 19) && props.$containerseatsball === "notappear" && "white"};
  cursor:${props => (props.$numberrow === 1 || props.$numberrow === 18 || props.$numberrow === 19) && props.$containerseatsball === "notappear" && "auto"};
  user-select: ${props => (props.$numberrow === 1 || props.$numberrow === 18 || props.$numberrow === 19) && props.$containerseatsball === "notappear" && "none"};

  background: ${props => props.$numberrow >= 22 && (props.$seatsletter === "i" || props.$seatsletter === "h"|| props.$seatsletter === "g" || props.$seatsletter === "f" || props.$seatsletter === "e" || props.$seatsletter === "d") && "white"};
  color: ${props => props.$numberrow >= 22 && (props.$seatsletter === "i" || props.$seatsletter === "h"|| props.$seatsletter === "g" || props.$seatsletter === "f" || props.$seatsletter === "e" || props.$seatsletter === "d") && "white"};
  cursor:${props => props.$numberrow >= 22 && (props.$seatsletter === "i" || props.$seatsletter === "h"|| props.$seatsletter === "g" || props.$seatsletter === "f" || props.$seatsletter === "e" || props.$seatsletter === "d") && "auto"};
  user-select: ${props => props.$numberrow >= 22 && (props.$seatsletter === "i" || props.$seatsletter === "h"|| props.$seatsletter === "g" || props.$seatsletter === "f" || props.$seatsletter === "e" || props.$seatsletter === "d") && "none"};

  background: ${props => (props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 20 && "white"};
  color: ${props => (props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 20 && "white"};
  cursor:${props => (props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 20 && "auto"};
  user-select: ${props => (props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 20 && "none"};

  background: ${props => (props.$seatsletter === "d"  || props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 2 && "white"};
  color: ${props => (props.$seatsletter === "d"  || props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 2 && "white"};
  cursor:${props => (props.$seatsletter === "d"  || props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 2 && "auto"};
  user-select: ${props => (props.$seatsletter === "d"  || props.$seatsletter === "c" || props.$seatsletter === "b" || props.$seatsletter === "a") && props.$numberrow === 2 && "none"};
 
  background: ${props => props.$seatsletter === "a" && (props.$numberrow === 3 || props.$numberrow === 4 || props.$numberrow === 16 || props.$numberrow === 17 || props.$numberrow === 26) && "white"};
  color: ${props => props.$seatsletter === "a" && (props.$numberrow === 3 || props.$numberrow === 4 || props.$numberrow === 16 || props.$numberrow === 17 || props.$numberrow === 26) && "white"};
  cursor:${props => props.$seatsletter === "a" && (props.$numberrow === 3 || props.$numberrow === 4 || props.$numberrow === 16 || props.$numberrow === 17 || props.$numberrow === 26) && "auto"};
  user-select: ${props => props.$seatsletter === "a" && (props.$numberrow === 3 || props.$numberrow === 4 || props.$numberrow === 16 || props.$numberrow === 17 || props.$numberrow === 26) && "none"};

  background: ${props => props.$seatsletter === "d" && (props.$numberrow === 14 || props.$numberrow === 15 || props.$numberrow === 16 || props.$numberrow === 17) && "white"};
  color: ${props => props.$seatsletter === "d" && (props.$numberrow === 14 || props.$numberrow === 15 || props.$numberrow === 16 || props.$numberrow === 17) && "white"};
  cursor:${props => props.$seatsletter === "d" && (props.$numberrow === 14 || props.$numberrow === 15 || props.$numberrow === 16 || props.$numberrow === 17) && "auto"};
  user-select: ${props => props.$seatsletter === "d" && (props.$numberrow === 14 || props.$numberrow === 15 || props.$numberrow === 16 || props.$numberrow === 17) && "none"};

  color: ${props => props.$seatjoinlist.includes(props.$letternumber) && "white"};
  background: ${props => props.$seatjoinlist.includes(props.$letternumber) && "#db8e02"};
`

export const ContainerNameNumberRow = styled.div`
  display: flex;
  align-items: center;
  /* gap: 5px; */
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