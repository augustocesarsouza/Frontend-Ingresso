import styled from 'styled-components';

export const ContainerMain = styled.div`
  background: white;
  height: 100vh;
`

export const ContainerMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* height: 91%; */
  /* gap: 25px; */
  /* margin: 0px 80px 0px 50px; */
  
`

export const ContainerLeftRightSide = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
 
  /* @media (max-width: 1285px){
    width: 84%;
  } */
  @media (max-width: 1200px){
    width: 94%;
  }
  /* margin: 0px 80px 0px 50px; */
`

export const ContainerFirst = styled.div`
  border-right: 1px solid #bcbcbc1c;
`
