import styled from 'styled-components';

export const ContainerPRequirements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

interface PProps{
  $position: string;
  $greenorgray: string;
}

export const P = styled.p<PProps>`
  font-size: 13px;
  
  color: ${props => props.$position === "1" && "black"};
  color: ${props => props.$position === "2" ? props.$greenorgray === "true" ? "rgb(31, 207, 38)" : "rgb(153, 153, 153)" 
  : props => props.$position === "3" ? props.$greenorgray === "true" ? "rgb(31, 207, 38)" : "rgb(153, 153, 153)" 
  : props => props.$position === "4" ? props.$greenorgray === "true" ? "rgb(31, 207, 38)" : "rgb(153, 153, 153)" 
  : props => props.$position === "5" ? props.$greenorgray === "true" ? "rgb(31, 207, 38)" : "rgb(153, 153, 153)": ""};

`