import styled from 'styled-components';

interface ContainerMainProps {
  $ishome: string;
  $isfilm: string;
  $checkout: string;
}

export const ContainerMain = styled.div<ContainerMainProps>`
  position: relative;
  /* height: 100vh; */
  /* overflow-y: hidden; */
  width: 100%;
  background: ${props => props.$ishome === "true" && "#4e4b4b" };
  background: ${props => props.$isfilm === "true" && "#4c4c4c"};
  /* background: ${props => props.$checkout === "true" && "#4c4c4c"}; */
`