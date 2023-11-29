import styled from 'styled-components';

interface ContainerMainProps {
  $datapersonclicked: string;
}

export const ContainerMain = styled.div<ContainerMainProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 50px; */
  gap: 85px;
  /* height: 100vh; */

  height: ${props => props. $datapersonclicked === "false" && "100vh"};
`

export const ContainerImgIngressoNameUserServiceWelcomeUser = styled.div`
  height: 100%;
`